import { Search } from "lucide-react";
import { cn } from "../lib/cn";
import { Input } from "../lib/ui/input";

type Props = {
  delay?: number;
  placeholder: string;
};

const SearchBar: React.FC<Props> = (props) => {
  return (
    <>
      <div className={cn("flex flex-col gap-2")}>
        <div className="flex h-8 rounded-xl bg-gray-100 px-2 py-2">
          <Search size={16} className="mr-2 text-gray-500" />
          <Input
            id="search"
            className="h-full w-45 rounded border-0 bg-transparent px-0 py-0 font-medium text-gray-500 shadow-none transition-all placeholder:truncate focus-visible:ring-0 focus-visible:outline-0"
            placeholder={props.placeholder}
          />
        </div>
      </div>
    </>
  );
};

// type Props = {
//   delay?: number;
//   placeholder: string;
// };

// const SearchBar: React.FC<Props> = (props) => {
//   const { delay } = props;
//   const [searchTerm, setSearchTerm] = useState("");
//   const { isolateItemIds, resetIsolatedItems } = useToolbar();

//   const [value, setValue] = useState(searchTerm ?? "");

//   const onSearch = (v: string) => {
//     setValue(v);

//     if (v === "") {
//       resetIsolatedItems();
//       return;
//     }

//     const ids = ["search", "filter-date-dropdown", "filter-date-selector"];
//     isolateItemIds(ids);
//   };

//   useDebouncedValue(value, delay, (value) => {
//     setSearchTerm(value);
//   });

//   const hasSearchTerm = value !== "";
//   const clearSearch = () => {
//     setValue("");
//     resetIsolatedItems();
//   };

//   return (
//     <>
//       <div className={cn("flex flex-col gap-2")}>
//         <div className="flex h-[2rem] rounded-xl bg-gray-100 px-2 py-2">
//           <Search size={16} className="mr-2 text-gray-500" />
//           <Input
//             id="search"
//             value={value}
//             onChange={(e) => onSearch(e.target.value)}
//             className="h-full w-[180px] rounded border-0 bg-transparent px-0 py-0 font-medium text-gray-500 shadow-none transition-all placeholder:truncate focus-visible:ring-0 focus-visible:outline-0"
//             placeholder={props.placeholder}
//           />
//           {hasSearchTerm && (
//             <Button
//               className="text-primary ml-4 h-full cursor-pointer p-0 uppercase"
//               variant={"ghost"}
//               onClick={clearSearch}
//             >
//               Clear
//             </Button>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

export default SearchBar;
