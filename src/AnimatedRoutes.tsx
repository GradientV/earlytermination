import { useEffect } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Routes, useLocation } from "react-router-dom";
import type { Location } from "react-router-dom";
import "./motion.css";

function RouteSurface({
  location,
  children,
}: {
  location: Location;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let secondFrame = 0;

    // Service deep links can reveal a filtered-out panel in a child effect.
    // Wait for that commit before finding the target and placing focus.
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        document.getElementById("main-content")?.focus({ preventScroll: true });

        if (location.hash) {
          let targetId = location.hash.slice(1);
          try {
            targetId = decodeURIComponent(targetId);
          } catch {
            // A malformed hash can still be matched as a literal element ID.
          }
          const target = document.getElementById(targetId);
          if (target) {
            target.scrollIntoView({ block: "start", behavior: "instant" });
            return;
          }
        }

        window.scrollTo({ top: 0, behavior: "instant" });
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
    };
  }, [location.pathname, location.hash]);

  return (
    <motion.div
      className="page-transition"
      initial={reduceMotion ? false : { opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
      transition={{
        duration: reduceMotion ? 0 : 0.24,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Routes location={location}>{children}</Routes>
    </motion.div>
  );
}

export default function AnimatedRoutes({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} mode="wait">
      <RouteSurface key={location.pathname} location={location}>
        {children}
      </RouteSurface>
    </AnimatePresence>
  );
}
