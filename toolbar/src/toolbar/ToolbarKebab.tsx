import React, { useState } from "react";
import { useElementWidth } from "../toolbar/useElementWidth";
import { Ellipsis } from "lucide-react";
import { useToolbar } from "./useToolbar";
// import { useMasterfileSearch } from "../provider-search";
import { Button } from "../lib/ui/button";
import { cn } from "../lib/cn";
import { Popover, PopoverContent, PopoverTrigger } from "../lib/ui/popover";

type ToolbarKebabProps = {
  // children: { id: string; component: React.ReactNode }[];
  children: React.ReactNode[];
  forcedHidden?: boolean;
};

export const ToolbarKebab = (props: ToolbarKebabProps) => {
  const { setKebabWidth, getHiddenItems } = useToolbar();

  const elementRef = useElementWidth({ onWidthChange: setKebabWidth });

  // const { hasSearchTerm } = useMasterfileSearch();

  const hiddenItems = getHiddenItems();
  const noHiddenItems = hiddenItems.length === 0;

  const items = React.Children.toArray(props.children).map((child) => {
    if (!React.isValidElement(child)) return null;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { id, children } = child.props as any;

    return {
      id,
      component: children,
    };
  });

  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          onMouseEnter={() => setOpen(true)}
          ref={elementRef}
          className={cn(
            "grid! h-8 w-8 cursor-pointer place-content-center rounded-xl border-0 p-0 text-gray-500 shadow-none transition-all hover:bg-gray-100 focus-visible:ring-0 focus-visible:outline-0",
            (props?.forcedHidden || noHiddenItems) && "hidden!",
          )}
          variant={"outline"}
        >
          <Ellipsis />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        className="w-fit max-w-screen rounded-2xl border border-gray-200 bg-gray-50 p-1 shadow-xs"
      >
        <div className="flex flex-wrap">
          {items
            .filter((v) => v !== null)
            .filter((v) => hiddenItems.includes(v.id))
            .map((v) => (
              <React.Fragment key={v.id}>{v.component} </React.Fragment>
            ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
