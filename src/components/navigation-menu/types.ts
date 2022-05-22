export type TNavigationMen = {
  activeIndex: number;
  setActiveIndex: (v: number) => void;
  windowWidth: number;
  isMenuActive: boolean;
  setIsMenuActive: (v: boolean) => void;
  mobileMenuRef?: React.RefObject<HTMLDivElement>;
};
