import { useState } from "react";
import { cn } from "../lib/cn";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../lib/ui/select";

const Dropdown = () => {
  const [value, setValue] = useState("");

  return (
    <Select value={value ?? undefined} onValueChange={setValue}>
      <SelectTrigger
        className={cn(
          "h-8! w-30 cursor-pointer rounded-xl border-0 bg-transparent px-2 py-2 font-medium text-gray-500 shadow-none transition-all hover:bg-gray-100 focus-visible:ring-0 focus-visible:outline-0",
        )}
      >
        <SelectValue placeholder="Select" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">All Time</SelectItem>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="thisWeek">This Week</SelectItem>
          <SelectItem value="thisMonth">This Month</SelectItem>
          <SelectItem value="lastMonth">Last Month</SelectItem>
          <SelectItem value="lastWeek">Last Week</SelectItem>
          <SelectItem value="custom" className="hidden">
            ----
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
