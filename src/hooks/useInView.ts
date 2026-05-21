import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) setInView(true);
      },
      { root: null, rootMargin: "0px 0px -15% 0px", threshold: 0.12, ...options },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return { ref, inView };
}

