import { useContext } from "react";
import { ToolbarContext } from "./toolbarContext";

export function useToolbar() {
  const context = useContext(ToolbarContext);

  if (!context) {
    throw new Error("useToolbar must be used within Toolbar");
  }

  return context;
}
