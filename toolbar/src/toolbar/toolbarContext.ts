import { createContext } from "react";

export type ToolbarProviderContextType = {
  checkItemVisibility: (id: string) => boolean;
  setItemWidth: (id: string, width: number) => void;
  setContainerWidth: (width: number) => void;
  setKebabWidth: (width: number) => void;
  getHiddenItems: () => string[];
  isolateItemIds: (ids: string[]) => void;
  resetIsolatedItems: () => void;
};

export const ToolbarContext = createContext<
  ToolbarProviderContextType | undefined
>(undefined);
