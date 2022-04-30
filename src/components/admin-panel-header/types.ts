export type TAdminPanelHeader = {
  logoutClickhandler: () => void;
  searchValue: string;
  setSearchValue: (v: string) => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
  isDropdownActive: boolean;
  setIsDropdownActive: (v: boolean) => void;
};
