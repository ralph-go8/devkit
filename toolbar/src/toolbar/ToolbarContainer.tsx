import { cn } from "../lib/cn";
import { useElementWidth } from "./useElementWidth";
import { useToolbar } from "./useToolbar";

type ToolbarContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const ToolbarContainer = (props: ToolbarContainerProps) => {
  const { setContainerWidth } = useToolbar();

  const elementRef = useElementWidth({
    onWidthChange: (w) => setContainerWidth(w - 100),
    runContinuous: true,
  });

  return (
    <div className={cn("relative mb-2 h-10.5 w-full", props.className)}>
      <div
        ref={elementRef}
        className="absolute top-0 left-0 flex w-full min-w-0 shrink items-center overflow-clip rounded-2xl border border-gray-200 bg-gray-50 px-1 py-1 shadow-xs"
      >
        {props.children}
      </div>
    </div>
  );
};
