import { useState } from "react";
import { calculateVisibleItems } from "./calculateVisibleItems";
import {
  ToolbarContext,
  type ToolbarProviderContextType,
} from "./toolbarContext";

type Props = {
  children: React.ReactNode;
  visibilityPriorityIds: string[];
};

export const Toolbar = (props: Props) => {
  const { visibilityPriorityIds: idOrder } = props;

  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const [kebabWidth, setKebabWidth] = useState<number | null>(null);
  const [items, setItems] = useState<{ id: string; width: number }[]>([]);

  const getHiddenItems = () => {
    const hasIsolatedItems = isolatedItemIds.length > 0;
    if (hasIsolatedItems) return [];

    const { overflow } = calculateVisibleItems({
      containerWidth,
      idOrder,
      items,
      kebabWidth,
    });

    return overflow;
  };

  const checkItemVisibility = (id: string) => {
    const hasIsolatedItems = isolatedItemIds.length > 0;
    if (hasIsolatedItems) return isolatedItemIds.includes(id);

    const visibleItems = calculateVisibleItems({
      containerWidth,
      idOrder,
      items,
      kebabWidth,
    });

    return visibleItems.visible.includes(id);
  };
  const setItemWidth = (id: string, width: number) =>
    setItems((p) => [...p, { id, width }]);

  const [isolatedItemIds, setIsolatedItemIds] = useState<string[]>([]);
  const isolateItemIds = (ids: string[]) => {
    setIsolatedItemIds(ids);
  };
  const resetIsolatedItems = () => setIsolatedItemIds([]);

  const value: ToolbarProviderContextType = {
    isolateItemIds,
    resetIsolatedItems,
    checkItemVisibility,
    setItemWidth,
    setContainerWidth,
    setKebabWidth,
    getHiddenItems,
  };

  return (
    <ToolbarContext.Provider value={value}>
      {props.children}
    </ToolbarContext.Provider>
  );
};
