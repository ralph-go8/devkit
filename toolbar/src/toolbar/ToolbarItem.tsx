import { cn } from "../lib/cn";
import { useElementWidth } from "./useElementWidth";
import { useHasMounted } from "./useHasMounted";
import { useToolbar } from "./useToolbar";

type ToolbarItemProps = {
  id: string;
  children: React.ReactNode;
};

export const ToolbarItem = (props: ToolbarItemProps) => {
  const { setItemWidth, checkItemVisibility } = useToolbar();

  const elementRef = useElementWidth({
    onWidthChange: (width) => setItemWidth(props.id, width),
  });

  const isHidden = !checkItemVisibility(props.id);

  const hasMounted = useHasMounted().current;
  const shouldHide = isHidden && hasMounted;

  return (
    <div ref={elementRef} className={cn(shouldHide && "hidden")}>
      {props.children}
    </div>
  );
};
