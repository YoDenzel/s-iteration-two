export type TNavigationMen = {
  activeIndex: number;
  navItemClickhandler: (v: number) => void;
  windowWidth: number;
  isMenuActive: boolean;
  setIsMenuActive: (v: boolean) => void;
  mobileMenuRef?: React.RefObject<HTMLDivElement>;
};
