import { animate, inView, scroll } from "./vendor/motion.js";

document.documentElement.classList.add("js");

const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const wideQuery = window.matchMedia("(min-width: 768px)");
const video = document.querySelector("#hero-video");
const media = document.querySelector(".hero-media");
const hero = document.querySelector(".hero");
const button = document.querySelector("#motion-control");
const label = button?.querySelector(".motion-label");
const playIcon = button?.querySelector(".icon-play");
const pauseIcon = button?.querySelector(".icon-pause");

let cancelDrift = function () {};
let desiredPlay = false;
let failed = false;

function reduced() {
  return reduceQuery.matches;
}

function saveData() {
  return Boolean(navigator.connection && navigator.connection.saveData);
}

function stored() {
  try {
    return sessionStorage.getItem("mc-motion");
  } catch (error) {
    return null;
  }
}

function store(value) {
  try {
    sessionStorage.setItem("mc-motion", value);
  } catch (error) {
    /* Private mode can refuse storage. The button still works for this view. */
  }
}

function setButton(playing) {
  if (!button || button.disabled) return;
  button.setAttribute("aria-pressed", playing ? "true" : "false");
  if (label) label.textContent = playing ? "Pause motion" : "Play motion";
  playIcon?.classList.toggle("is-hidden", playing);
  pauseIcon?.classList.toggle("is-hidden", !playing);
}

function failMotion() {
  failed = true;
  desiredPlay = false;
  media?.classList.remove("is-live");
  stopDrift();
  if (!button) return;
  button.disabled = true;
  button.setAttribute("aria-pressed", "false");
  if (label) label.textContent = "Motion unavailable";
  playIcon?.classList.add("is-hidden");
  pauseIcon?.classList.add("is-hidden");
}

function stopDrift() {
  cancelDrift();
  cancelDrift = function () {};
  if (media) media.style.transform = "";
}

function startDrift() {
  if (!media || !hero || reduced() || !wideQuery.matches || !desiredPlay) return;
  stopDrift();
  const animation = animate(
    media,
    { transform: ["scale(1.08) translateY(0px)", "scale(1) translateY(-40px)"] },
    { ease: "linear" }
  );
  cancelDrift = scroll(animation, {
    target: hero,
    offset: ["start start", "end start"]
  });
}

function attachSources() {
  if (!video || video.dataset.ready === "true") return;
  const webm = document.createElement("source");
  webm.src = video.dataset.webm;
  webm.type = "video/webm";
  const mp4 = document.createElement("source");
  mp4.src = video.dataset.mp4;
  mp4.type = "video/mp4";
  video.append(webm, mp4);
  video.dataset.ready = "true";
  video.load();
}

function playFilm() {
  if (!video || failed) return;
  attachSources();
  video.muted = true;
  window.setTimeout(function () {
    if (failed || !desiredPlay) return;
    if (video.error || video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) failMotion();
  }, 800);
  const pending = video.play();
  if (pending && typeof pending.then === "function") {
    pending.then(function () {
      if (failed) return;
      media?.classList.add("is-live");
      setButton(true);
      startDrift();
    }).catch(function () {
      if (video.error) failMotion();
      else {
        setButton(false);
        stopDrift();
      }
    });
  }
}

function pauseFilm() {
  if (video) video.pause();
  setButton(false);
  stopDrift();
}

function autoplayAllowed() {
  const choice = stored();
  if (choice === "pause") return false;
  if (reduced() || saveData() || !wideQuery.matches) return false;
  return true;
}

if (button && video) {
  button.addEventListener("click", function () {
    if (button.getAttribute("aria-pressed") === "true") {
      desiredPlay = false;
      store("pause");
      document.documentElement.dataset.motion = "still";
      pauseFilm();
      return;
    }
    desiredPlay = true;
    store("play");
    if (!reduced()) document.documentElement.dataset.motion = "run";
    playFilm();
  });

  video.addEventListener("error", failMotion);

  inView(hero, function () {
    if (desiredPlay) playFilm();
    return function () {
      if (video && !video.paused) video.pause();
    };
  });
}

desiredPlay = Boolean(video) && autoplayAllowed();
if (desiredPlay) {
  document.documentElement.dataset.motion = reduced() ? "still" : "run";
  playFilm();
} else if (button) {
  setButton(false);
}

setupMenu();
setupChain();

function setupMenu() {
  const btn = document.querySelector(".menu-btn");
  const panel = document.getElementById("nav-panel");
  if (!btn || !panel) return;
  const mq = window.matchMedia("(max-width: 900px)");

  function setClosed() {
    btn.setAttribute("aria-expanded", "false");
    panel.classList.remove("is-open");
    panel.hidden = mq.matches;
  }

  function setOpen() {
    btn.setAttribute("aria-expanded", "true");
    panel.hidden = false;
    panel.classList.add("is-open");
    const first = panel.querySelector("a");
    if (first) first.focus();
  }

  btn.addEventListener("click", function () {
    if (btn.getAttribute("aria-expanded") === "true") {
      setClosed();
      btn.focus();
    } else {
      setOpen();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    if (btn.getAttribute("aria-expanded") !== "true") return;
    setClosed();
    btn.focus();
  });

  mq.addEventListener("change", function () {
    if (!mq.matches) {
      panel.hidden = false;
      panel.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    } else if (btn.getAttribute("aria-expanded") !== "true") {
      panel.hidden = true;
    }
  });

  if (mq.matches) panel.hidden = true;
}

function setupChain() {
  const root = document.querySelector(".chain");
  if (!root) return;
  const tabs = [...root.querySelectorAll('[role="tab"]')];
  const wide = window.matchMedia("(min-width: 960px)");
  if (!tabs.length) return;
  root.classList.add("is-ready");

  function select(tab, animatePanel) {
    tabs.forEach(function (item) {
      const on = item === tab;
      item.setAttribute("aria-selected", on ? "true" : "false");
      item.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(item.getAttribute("aria-controls"));
      if (!panel) return;
      panel.classList.toggle("is-selected", on);
      panel.hidden = wide.matches ? false : !on;
      if (on && animatePanel && !wide.matches && !reduced() && document.documentElement.dataset.motion === "run") {
        animate(panel, { opacity: [0.45, 1] }, { duration: 0.3, ease: "easeOut" });
      }
    });
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () { select(tab, true); });
    tab.addEventListener("keydown", function (event) {
      const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
      if (!keys.includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      tabs[next].focus();
      select(tabs[next], true);
    });
  });

  wide.addEventListener("change", function () {
    const current = tabs.find(function (tab) { return tab.getAttribute("aria-selected") === "true"; }) || tabs[0];
    select(current, false);
  });
  select(tabs[0], false);
}

reduceQuery.addEventListener("change", function () {
  if (!reduced()) return;
  document.documentElement.dataset.motion = "still";
  desiredPlay = false;
  pauseFilm();
});

document.addEventListener("visibilitychange", function () {
  if (!video || failed) return;
  if (document.hidden) {
    video.pause();
    return;
  }
  if (desiredPlay) playFilm();
});
