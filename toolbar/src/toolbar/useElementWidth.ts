import { useCallback, useRef } from "react";

type Options = {
  onWidthChange?: (width: number) => void;
  runContinuous?: boolean;
};

export function useElementWidth({
  onWidthChange,
  runContinuous = false,
}: Options) {
  const hasRun = useRef(false);
  const observerRef = useRef<ResizeObserver | null>(null);
  const lastWidth = useRef<number | null>(null);

  const ref = useCallback(
    (node: HTMLElement | null) => {
      // cleanup previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (!node) return;

      // ✅ RUN ONCE MODE
      if (!runContinuous) {
        if (hasRun.current) return;

        hasRun.current = true;

        const width = node.getBoundingClientRect().width;
        onWidthChange?.(width);

        return;
      }

      // ✅ CONTINUOUS MODE (ResizeObserver)
      observerRef.current = new ResizeObserver((entries) => {
        const width = entries[0].contentRect.width;

        // prevent noisy duplicate updates
        if (lastWidth.current !== width) {
          lastWidth.current = width;
          onWidthChange?.(width);
        }
      });

      observerRef.current.observe(node);
    },
    [onWidthChange, runContinuous],
  );

  return ref;
}
