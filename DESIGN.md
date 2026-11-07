---
name: Mission Critical
description: Dark specimen bench with a stone-paper reading sheet and copper marks.
colors:
  copper: "#b0441f"
  copper-deep: "#8c3418"
  copper-hot: "#f0b48a"
  copper-press: "#9a3b1b"
  focus: "#9be8ff"
  bench: "#08090d"
  bench-raise: "#12141c"
  bench-lift: "#1b1e28"
  ink: "#f4f0e8"
  ink-dim: "#d4cdc2"
  paper: "#e6e0d2"
  paper-ink: "#1b1612"
  paper-dim: "#3f3832"
  line: "rgba(244, 240, 232, 0.22)"
  close-cream: "#f7f1e8"
  white: "#fff"
typography:
  display:
    fontFamily: "\"Schibsted Grotesk\", \"Avenir Next Condensed\", \"Arial Narrow\", sans-serif"
    fontSize: "clamp(1.28rem, 8.15cqi, 5.4rem)"
    fontWeight: 650
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "\"Schibsted Grotesk\", \"Avenir Next Condensed\", \"Arial Narrow\", sans-serif"
    fontSize: "clamp(2.2rem, 6vw, 4.2rem)"
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "\"Schibsted Grotesk\", \"Avenir Next Condensed\", \"Arial Narrow\", sans-serif"
    fontSize: "clamp(1.8rem, 3vw, 2.7rem)"
    fontWeight: 650
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Literata, \"Iowan Old Style\", Palatino, \"Palatino Linotype\", serif"
    fontSize: "1.125rem"
    fontWeight: 460
    lineHeight: 1.6
  label:
    fontFamily: "\"Schibsted Grotesk\", \"Avenir Next Condensed\", \"Arial Narrow\", sans-serif"
    fontSize: "1rem"
    fontWeight: 640
    lineHeight: 1.1
rounded:
  control: "2px"
spacing:
  gutter: "clamp(1rem, 4vw, 3.5rem)"
  section: "clamp(4.5rem, 9vw, 7.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.1rem"
  button-primary-hover:
    backgroundColor: "{colors.copper-press}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.1rem"
  button-ghost-paper:
    backgroundColor: "transparent"
    textColor: "{colors.paper-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.1rem"
  button-ghost-close:
    backgroundColor: "transparent"
    textColor: "{colors.close-cream}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.1rem"
  button-paper:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.1rem"
  button-paper-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.control}"
  button-motion:
    backgroundColor: "{colors.bench-raise}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.1rem"
  button-motion-hover:
    backgroundColor: "{colors.bench-lift}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0.35rem 0.7rem"
  sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
    padding: "clamp(3.5rem, 8vw, 6rem) clamp(1rem, 4vw, 3.5rem) clamp(4rem, 8vw, 6.5rem)"
  close-band:
    backgroundColor: "{colors.copper-deep}"
    textColor: "{colors.close-cream}"
    padding: "clamp(4.5rem, 9vw, 7rem) clamp(1rem, 4vw, 3.5rem)"
---

# Design System: Mission Critical

## Overview

**Creative North Star: "The Specimen Bench"**

Mission Critical sits on a near-black bench. Reading surfaces are stone paper. Copper is the checked mark: the action, the assay figure, and the second line of the strapline. Names, headings, and numbers are Schibsted Grotesk. Reading is Literata. The hero is a designed film behind a bench-colored scrim, with the poster as the still state. Illustrations keep the existing copper, cyan, and violet family. The interface does not add violet chrome.

Density is editorial. One reading measure, wide section intervals, and a single record on the bench. Motion is the hero film and a short rise on the assay figure. Body copy does not move.

**Key Characteristics:**

- Bench black field, stone-paper sheets, deep-copper closing band
- Copper for the primary action, the assay figure, and the strapline's second line
- Schibsted Grotesk for names and numbers, Literata for reading
- Two-pixel controls, hairline rules, one soft shadow under illustrations
- Designed hero motion behind a scrim; reading stays still

## Colors

A furnace copper on a blue-black bench, with a warm paper sheet for anything read closely.

### Primary

- **Furnace copper** (#b0441f): Primary actions, text selection on the bench, and the scrollbar thumb.
- **Deep copper** (#8c3418): The closing band, the assay figure, links on paper, and selection on paper.
- **Hot copper** (#f0b48a): The strapline's second line, and the current-page underline.
- **Pressed copper** (#9a3b1b): Primary action hover. Darker than furnace copper, lighter than deep copper.

### Secondary

- **Focus cyan** (#9be8ff): The keyboard focus ring. It is not a fill and not a link color.

### Neutral

- **Bench black** (#08090d): Page background, header, and the theme color.
- **Raised bench** (#12141c): The alternate bench band and the motion control at rest.
- **Lifted bench** (#1b1e28): Motion control hover.
- **Specimen ink** (#f4f0e8): Text on the bench.
- **Dim ink** (#d4cdc2): Datelines, captions, bylines, footer, and supporting lines on the bench.
- **Stone paper** (#e6e0d2): The assay field and the reading sheet.
- **Paper ink** (#1b1612): Text on paper, and the paper button's label.
- **Dim paper ink** (#3f3832): Datelines, captions, and supporting lines on the sheet.
- **Hairline** (rgba(244, 240, 232, 0.22)): Header rule, footer rule, and rules on the bench.
- **Close cream** (#f7f1e8): Text on the deep-copper closing band.
- **White** (#fff): Primary action label, paper-button hover, and selection text.

**The Assay Copper Rule.** Copper marks the thing to check or the thing to do: the primary action, the figure on paper, the strapline's second line, and the current page. The bench is not washed with it.

**The Paper Sheet Rule.** Stone paper is a full-bleed reading field. On it, text is paper ink, links and the figure are deep copper, and selection is deep copper with white text.

## Typography

**Display Font:** Schibsted Grotesk (with Avenir Next Condensed, Arial Narrow, sans-serif)

**Body Font:** Literata (with Iowan Old Style, Palatino, Palatino Linotype, serif)

**Character:** A condensed grotesque for the name and the number, an old-style serif for the reading. Both are variable files, swapped in while they load. The loaded weights are the ones below, including 460, 580, 640, 650, and 680.

### Hierarchy

- **Display** (650, clamp(1.28rem, 8.15cqi, 5.4rem), line-height 0.92, tracking -0.035em): The strapline, sized against the hero copy container. The second line is hot copper. "build-out" stays unbroken on the first line.
- **Headline** (650, clamp(2.2rem, 6vw, 4.2rem), line-height 1.02, tracking -0.03em): Page titles on the paper sheet.
- **Title** (650, clamp(1.8rem, 3vw, 2.7rem), line-height 1.05, tracking -0.03em): Section headings, with balanced wrapping.
- **Body** (460, 1.125rem, line-height 1.6): Reading. Paragraphs stop at 66ch. The hero dek is 1.15rem and stops at 38rem. The issue deck is 1.2rem and stops at 62ch. Closing-band paragraphs are 1.15rem.
- **Label** (640, 1rem, line-height 1.1): Navigation, buttons, and the motion control, in Schibsted Grotesk.

The wordmark is Schibsted Grotesk at 0.78rem, weight 680, tracking 0.14em, uppercase. The byline under it stays Literata at 0.95rem. The assay figure is Schibsted Grotesk at weight 680, tracking -0.04em, line-height 0.9, value size clamp(3.2rem, 8vw, 5.5rem), tabular numerals, unit at 1.15rem and weight 600. Datelines are Schibsted Grotesk at 1rem, weight 580. The about strap is Schibsted Grotesk at weight 640, clamp(1.35rem, 2.4vw, 1.8rem), line-height 1.15, tracking -0.03em. Captions, the film note, and the footer are 0.95rem.

**The Two Faces Rule.** Schibsted Grotesk carries the name, the headings, the dateline, the figure, and the controls. Literata carries the reading. They do not swap.

**The Strapline Break Rule.** The compound "build-out" stays on one line. The next line is "is made of", in hot copper, at the same display size.

## Layout

The column is min(1120px, 100%), inset by the gutter, clamp(1rem, 4vw, 3.5rem). Section bands and the assay field use clamp(4.5rem, 9vw, 7.5rem) vertically. The sheet uses clamp(3.5rem, 8vw, 6rem) on top and clamp(4rem, 8vw, 6.5rem) on the bottom. The closing band uses clamp(4.5rem, 9vw, 7rem). The header is sticky, with 0.75rem of vertical padding, and the page reserves 5.5rem of scroll padding.

The hero stage fills the viewport minus 6.5rem (100dvh). Copy sits at the end of the stage, at min(100%, 66vw). The film and poster are cropped at 72% 42%, and the media frame is inset by -8% so the scroll drift has room. The wide scrim is a left-weighted bench gradient: rgba(8, 9, 13, 0.96) at 0%, 0.9 at 36%, 0.62 at 58%, 0.22 at 80%, and 0.28 at 100%.

From 861px, the assay field is 0.8fr / 1.2fr, the issue record is 1.15fr / 0.85fr, and the split bands are about 0.9fr / 1.1fr, with the reverse split flipping that bias. Below 860px the hero copy is full width and the scrim turns vertical: 0.78, then 0.86 at 42%, then 0.94. Below 760px the header wraps and the scrim becomes a flat rgba(8, 9, 13, 0.9) veil. Below 560px the actions stack. Below 420px the header is static, the mark shrinks from 40px to 32px, and a short viewport tightens the hero copy.

**The Measure Rule.** Reading stops at 66ch. The issue deck and the freshness line stop at 62ch. The hero dek stops at 38rem.

## Elevation & Depth

Depth is a change of field: bench, raised bench, stone paper, deep copper. Surfaces are flat. Illustrations are the only elements that lift. The current page is an inset hot-copper line, which marks position and is not elevation. The hero scrim keeps the strapline on a dark field while the film stays visible.

### Shadow Vocabulary

- **Plate** (`box-shadow: 0 16px 36px rgba(0, 0, 0, 0.28)`): Illustrations in the record and the split bands.

**The Tonal Bench Rule.** A region separates by changing field color. Buttons, the header, and the sheet do not receive a shadow.

## Shapes

Controls are almost square, with a 2px radius on buttons and the motion control. Sheets, bands, images, and the header have square corners. Rules are 1px. The current-page mark is a 2px inset line. Keyboard focus is a 2px outline, 3px outside the control. The outline is suppressed on mouse focus and shown for `:focus-visible`.

**The Two-Pixel Rule.** Interactive controls use a 2px radius. Nothing else is rounded.

## Components

### Buttons

- **Shape:** Almost square (2px), minimum height 48px, padding 0.7rem 1.1rem, label in the label face.
- **Primary:** Furnace copper fill, white label. Hover fills with pressed copper. In the header, the primary label stays white.
- **Hover / Focus:** The fill swaps immediately. There is no transition and no separate active style. Focus is the cyan ring.
- **Ghost:** Transparent, ink label, border rgba(244, 240, 232, 0.55). Hover fills rgba(244, 240, 232, 0.08). On paper the label is paper ink, the border is rgba(27, 22, 18, 0.5), and the hover fill is rgba(27, 22, 18, 0.06). On the closing band the label is close cream and the border is rgba(247, 241, 232, 0.72).
- **Paper:** Ink fill and paper-ink label, on the closing band. Hover fills white.
- **Motion:** Raised-bench fill, ink label, border rgba(244, 240, 232, 0.45), minimum height 48px. Hover fills lifted bench. Disabled drops to opacity 0.7.

### Cards / Containers

The assay field and the reading sheet are full-bleed stone paper with paper-ink text. The raised band is raised bench. The closing band is deep copper with close-cream text. Illustrations sit in a square plate with the plate shadow and a dim caption at 0.95rem, 0.7rem under the image. A source line on paper uses a 1px rule at rgba(27, 22, 18, 0.35). Tag lists on the bench use the hairline; on the sheet they use rgba(27, 22, 18, 0.28).

### Navigation

The header is a bench bar with a bottom hairline. The mark is 40px, and 32px below 420px. Links are ink, minimum height 44px, padding 0.35rem 0.7rem. The current page gets `inset 0 -2px 0` in hot copper. Below 760px the nav takes the full row. The footer is dim ink at 0.95rem, with a top hairline and the same 44px link targets.

### Assay figure

A deep-copper Schibsted figure on the paper field. The value uses tabular numerals at clamp(3.2rem, 8vw, 5.5rem). The unit is 1.15rem at weight 600. When motion is running, the figure rises from 18px to rest in 0.55s with ease-out. Reduced motion, and the no-script state, leave the transform cleared.

### Skip link

Parked above the page until focused, then ink fill, paper-ink label, Schibsted Grotesk at weight 650, padding 0.65rem 1rem.

**The Current Underline Rule.** The active nav item is an inset 2px hot-copper line. It is not a filled chip.

**The Still Reading Rule.** The film may play, muted, and the assay figure may rise once. Reading text does not animate. Reduced motion starts on the still poster and clears the figure transform.

## Do's and Don'ts

### Do:

- **Do** set the page on bench black with specimen ink, and set reading on stone paper with paper ink.
- **Do** use Schibsted Grotesk for the name, headings, datelines, figures, and controls, and Literata for reading.
- **Do** keep "build-out" on the strapline's first line and set "is made of" in hot copper.
- **Do** mark the current page with an inset 2px hot-copper line, and show keyboard focus as a 2px focus-cyan outline, 3px offset.
- **Do** keep the hero muted, and start from the poster when reduced motion is requested.

### Don't:

- **Don't** set reading text in Schibsted Grotesk, or headings in Literata.
- **Don't** round controls past 2px, or round the sheets, bands, or illustrations.
- **Don't** add a shadow to anything but the illustration plates. The plate shadow is 0 16px 36px rgba(0, 0, 0, 0.28).
- **Don't** use furnace copper as a large bench fill. The deep-copper closing band is the one full-bleed copper field.
- **Don't** animate paragraphs, headings, or captions. The only text motion is the assay figure, and it is removed when reduced motion is on or scripting is off.
