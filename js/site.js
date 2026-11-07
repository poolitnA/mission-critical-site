import { animate, inView, scroll } from "./vendor/motion.js";

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

if (!reduced() && document.documentElement.dataset.motion === "run") {
  inView("[data-reveal]", function (element) {
    animate(
      element,
      { transform: ["translateY(18px)", "translateY(0px)"] },
      { duration: 0.55, ease: "easeOut" }
    );
  });
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
