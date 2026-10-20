import {useEffect} from "react";

const SECTION_SELECTOR = [
  "#greeting",
  "#focus",
  "#practice",
  "#projects",
  "#experience",
  "#principles",
  "#skills",
  ".foundation-grid",
  "#contact"
].join(", ");

const GESTURE_GAP_MS = 160;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function hasFinePointer() {
  return window.matchMedia("(pointer: fine)").matches;
}

function wheelDelta(event) {
  if (event.deltaMode === 1) return event.deltaY * 16;
  if (event.deltaMode === 2) return event.deltaY * window.innerHeight;
  return event.deltaY;
}

function headerOffset() {
  const header = document.querySelector(".header");
  if (!header) return 80;
  return Math.ceil(header.getBoundingClientRect().height) + 12;
}

function sectionTops() {
  const offset = headerOffset();
  return Array.from(document.querySelectorAll(SECTION_SELECTOR))
    .map(
      section => section.getBoundingClientRect().top + window.scrollY - offset
    )
    .sort((a, b) => a - b);
}

function maxScroll() {
  return Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight
  );
}

function readScroll() {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

function writeScroll(y) {
  document.documentElement.scrollTop = y;
  document.body.scrollTop = y;
}

function nextStop(direction) {
  const y = readScroll();
  const view = window.innerHeight;
  const limit = maxScroll();
  const tops = sectionTops();
  const step = view * 0.84;

  if (direction > 0) {
    const next = tops.find(top => top > y + 20);
    if (next == null) return limit;
    if (next - y <= view * 1.05) return Math.min(next, limit);
    return Math.min(y + step, next, limit);
  }

  const previous = [...tops].reverse().find(top => top < y - 20);
  if (previous == null) return 0;
  if (y - previous <= view * 1.05) return Math.max(previous, 0);
  return Math.max(y - step, previous, 0);
}

export function useSectionScroll() {
  useEffect(() => {
    let frame = 0;
    let idleTimer = 0;
    let pending = 0;
    let gestureActive = false;
    let animating = false;

    const setBehavior = value => {
      document.documentElement.style.scrollBehavior = value;
    };

    const cancel = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      animating = false;
      setBehavior("");
    };

    const animateTo = target => {
      const start = readScroll();
      const delta = target - start;
      if (Math.abs(delta) < 2) return;

      cancel();
      animating = true;
      setBehavior("auto");
      const duration = Math.min(680, Math.max(280, Math.abs(delta) * 0.5));
      const started = performance.now();

      const tick = now => {
        const progress = Math.min(1, (now - started) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        writeScroll(start + delta * eased);
        if (progress < 1) {
          frame = requestAnimationFrame(tick);
          return;
        }
        writeScroll(target);
        frame = 0;
        animating = false;
        setBehavior("");
      };

      frame = requestAnimationFrame(tick);
    };

    const onWheel = event => {
      if (!hasFinePointer() || prefersReducedMotion()) return;
      if (event.ctrlKey || event.metaKey) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      const delta = wheelDelta(event);
      if (delta === 0) return;

      event.preventDefault();
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        gestureActive = false;
        pending = 0;
      }, GESTURE_GAP_MS);

      if (gestureActive || animating) return;

      pending += delta;
      if (Math.abs(pending) < 24) return;

      const direction = pending > 0 ? 1 : -1;
      pending = 0;
      gestureActive = true;
      animateTo(nextStop(direction));
    };

    const onIntentionalJump = event => {
      const trigger = event.target.closest("#topButton, a[href^='#']");
      if (!trigger) return;
      cancel();
      gestureActive = false;
      pending = 0;
    };

    window.addEventListener("wheel", onWheel, {passive: false});
    document.addEventListener("click", onIntentionalJump, true);

    return () => {
      cancel();
      window.clearTimeout(idleTimer);
      window.removeEventListener("wheel", onWheel);
      document.removeEventListener("click", onIntentionalJump, true);
    };
  }, []);
}
