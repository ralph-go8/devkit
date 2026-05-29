import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToolbarContainer } from "./toolbar/ToolbarContainer";
import { ToolbarItem } from "./toolbar/ToolbarItem";
import SearchBar from "./controls/Search";
import Dropdown from "./controls/Dropdown";
import { ToolbarKebab } from "./toolbar/ToolbarKebab";
import { ToolbarKebabItem } from "./toolbar/ToolbarKebabItem";
import { Toolbar } from "./toolbar/Toolbar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="mx-auto mt-[33vh] max-w-[75vw] ">
      <Toolbar
        visibilityPriorityIds={[
          "item-1",
          "item-2",
          "item-3",
          "item-4",
          "item-5",
          "item-6",
          "item-7",
          "item-8",
          "item-9",
          "item-10",
        ]}
      >
        <ToolbarContainer className="">
          <ToolbarItem id="item-1">
            <SearchBar placeholder="Search" />
          </ToolbarItem>
          <ToolbarItem id="item-2">
            <Dropdown />
          </ToolbarItem>
          <ToolbarItem id="item-3">
            <Dropdown />
          </ToolbarItem>
          <ToolbarItem id="item-4">
            <Dropdown />
          </ToolbarItem>
          <ToolbarItem id="item-5">
            <Dropdown />
          </ToolbarItem>
          <ToolbarItem id="item-6">
            <Dropdown />
          </ToolbarItem>
          <ToolbarItem id="item-7">
            <Dropdown />
          </ToolbarItem>
          <ToolbarItem id="item-8">
            <Dropdown />
          </ToolbarItem>
          <ToolbarItem id="item-9">
            <Dropdown />
          </ToolbarItem>
          <ToolbarItem id="item-10">
            <Dropdown />
          </ToolbarItem>

          <ToolbarKebab>
            {/* todo: this mess up with checkedRows */}
            {/* <SearchBar
                    isHidden={checkItemVisibility("search")}
                    placeholder="PN Number or Borrower's Name"
                    onSearch={setSearchTerm}
                    initialValue={searchTerm ?? ""}
                  /> */}

            <ToolbarKebabItem id="item-1">
              {/* <DateFilterDropdown /> */}
              <SearchBar placeholder="Search" />
            </ToolbarKebabItem>
            <ToolbarKebabItem id="item-2">
              {/* <DateFilterDateSelector /> */}
              <SearchBar placeholder="Search" />
            </ToolbarKebabItem>
            <ToolbarKebabItem id="item-3">
              {/* <CreditProcessedDateFilter /> */}
              <SearchBar placeholder="Search" />
            </ToolbarKebabItem>

            <ToolbarKebabItem id="item-4">
              {/* <FilterByDocumentStatus />, */}
              <SearchBar placeholder="Search" />
            </ToolbarKebabItem>
            <ToolbarKebabItem id="item-5">
              {/* <AgencyFilter />, */}
              <SearchBar placeholder="Search" />
            </ToolbarKebabItem>
            <ToolbarKebabItem id="item-6">
              {/* <AgencyFilter />, */}
              <SearchBar placeholder="Search" />
            </ToolbarKebabItem>
            <ToolbarKebabItem id="item-7">
              {/* <AgencyFilter />, */}
              <SearchBar placeholder="Search" />
            </ToolbarKebabItem>
            <ToolbarKebabItem id="item-8">
              {/* <AgencyFilter />, */}
              <SearchBar placeholder="Search" />
            </ToolbarKebabItem>
            <ToolbarKebabItem id="item-9">
              {/* <AgencyFilter />, */}
              <SearchBar placeholder="Search" />
            </ToolbarKebabItem>
            <ToolbarKebabItem id="item-10">
              {/* <AgencyFilter />, */}
              <SearchBar placeholder="Search" />
            </ToolbarKebabItem>

            {/* {!isPresident && (
              <ToolbarKebabItem id="view-mode-non-president">
                <View />
              </ToolbarKebabItem>
            )}
            {isPresident && (
              <ToolbarKebabItem id="view-mode-president">
                <ViewMode />
              </ToolbarKebabItem>
            )}
            {hasCheckedRows && isPresident && (
              <ToolbarKebabItem id="batch-approve">
                <BatchApprove />
              </ToolbarKebabItem>
            )}
            {hasCheckedRows && isCfo && (
              <ToolbarKebabItem id="mark-as-claimed">
                <MarkAsClaimed />
              </ToolbarKebabItem>
            )} */}
          </ToolbarKebab>

          <div className="flex-1"></div>
          <SearchBar placeholder="Search" />

          {/* {!isPresident && (
          <ToolbarItem id="view-mode-non-president">
            <View />
          </ToolbarItem>
        )}
        {isPresident && (
          <ToolbarItem id="view-mode-president">
            <ViewMode />
          </ToolbarItem>
        )}
        {hasCheckedRows && isPresident && (
          <ToolbarItem id="batch-approve">
            <BatchApprove />
          </ToolbarItem>
        )}
        {hasCheckedRows && isCfo && (
          <ToolbarItem id="mark-as-claimed">
            <MarkAsClaimed />
          </ToolbarItem>
        )} */}
        </ToolbarContainer>
      </Toolbar>
    </div>
  </StrictMode>,
);
