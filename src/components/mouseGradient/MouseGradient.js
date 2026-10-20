import React, {useEffect, useRef} from "react";
import "./MouseGradient.scss";

const LAYERS = [
  {key: "lead", stiffness: 0.055, damping: 0.78, stretch: true},
  {key: "mid", stiffness: 0.022, damping: 0.84, stretch: false},
  {key: "wake", stiffness: 0.009, damping: 0.9, stretch: false}
];

function MouseGradient() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const canUsePointer = typeof window.PointerEvent === "function";

    const nodes = LAYERS.map(layer =>
      root.querySelector(`[data-layer="${layer.key}"]`)
    );
    const state = LAYERS.map(() => ({
      x: window.innerWidth * 0.58,
      y: window.innerHeight * 0.32,
      vx: 0,
      vy: 0
    }));

    let targetX = state[0].x;
    let targetY = state[0].y;
    let frame = 0;
    let seenPointer = false;

    /* Snap all blobs directly to a position (no spring physics). */
    const snapTo = (x, y) => {
      state.forEach(point => {
        point.x = x;
        point.y = y;
        point.vx = 0;
        point.vy = 0;
      });
      nodes.forEach(node => {
        if (!node) return;
        node.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      });
    };

    const paint = () => {
      let energy = 0;

      LAYERS.forEach((layer, index) => {
        const point = state[index];
        const node = nodes[index];
        point.vx =
          (point.vx + (targetX - point.x) * layer.stiffness) * layer.damping;
        point.vy =
          (point.vy + (targetY - point.y) * layer.stiffness) * layer.damping;
        point.x += point.vx;
        point.y += point.vy;
        energy += Math.abs(point.vx) + Math.abs(point.vy);

        if (!node) return;

        const speed = Math.hypot(point.vx, point.vy);
        let transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`;

        if (layer.stretch && speed > 0.8) {
          const stretch = 1 + Math.min(speed / 36, 0.22);
          const angle = (Math.atan2(point.vy, point.vx) * 180) / Math.PI;
          const squash = 1 - (stretch - 1) * 0.55;
          transform += ` rotate(${angle}deg) scale(${stretch}, ${squash})`;
        }

        node.style.transform = transform;
      });

      if (energy > 0.12) {
        frame = window.requestAnimationFrame(paint);
      } else {
        frame = 0;
      }
    };

    const kick = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    const onMove = event => {
      const pointerType = event.pointerType;
      if (pointerType === "touch") return;

      targetX = event.clientX;
      targetY = event.clientY;

      if (!seenPointer) {
        seenPointer = true;
        snapTo(targetX, targetY);
        root.classList.add("is-active");
      }

      if (reduceMotion.matches) {
        /* Reduced motion: snap instantly, no spring animation. */
        snapTo(targetX, targetY);
      } else {
        kick();
      }
    };

    const onLeave = event => {
      if (event.relatedTarget) return;
      seenPointer = false;
      root.classList.remove("is-active");
    };

    const halt = () => {
      seenPointer = false;
      root.classList.remove("is-active");
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };

    const onReduce = () => {
      if (reduceMotion.matches) {
        /* Stop the spring animation loop; the gradient stays visible
           and future moves will snap instead. */
        if (frame) window.cancelAnimationFrame(frame);
        frame = 0;
        snapTo(targetX, targetY);
      }
    };

    const moveOptions = {passive: true};
    const leaveTarget = document.documentElement;
    if (canUsePointer) {
      window.addEventListener("pointermove", onMove, moveOptions);
      leaveTarget.addEventListener("pointerleave", onLeave);
    } else {
      window.addEventListener("mousemove", onMove, moveOptions);
      leaveTarget.addEventListener("mouseleave", onLeave);
    }

    if (reduceMotion.addEventListener) {
      reduceMotion.addEventListener("change", onReduce);
    } else if (reduceMotion.addListener) {
      reduceMotion.addListener(onReduce);
    }

    return () => {
      halt();
      if (canUsePointer) {
        window.removeEventListener("pointermove", onMove);
        leaveTarget.removeEventListener("pointerleave", onLeave);
      } else {
        window.removeEventListener("mousemove", onMove);
        leaveTarget.removeEventListener("mouseleave", onLeave);
      }
      if (reduceMotion.removeEventListener) {
        reduceMotion.removeEventListener("change", onReduce);
      } else if (reduceMotion.removeListener) {
        reduceMotion.removeListener(onReduce);
      }
    };
  }, []);

  return (
    <div ref={rootRef} className="mouse-gradient" aria-hidden="true">
      <span
        className="mouse-gradient__blob mouse-gradient__blob--wake"
        data-layer="wake"
      />
      <span
        className="mouse-gradient__blob mouse-gradient__blob--mid"
        data-layer="mid"
      />
      <span
        className="mouse-gradient__blob mouse-gradient__blob--lead"
        data-layer="lead"
      />
    </div>
  );
}

export default MouseGradient;
