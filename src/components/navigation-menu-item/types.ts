export type TNavigationMenuItem = {
  Icon: JSX.Element;
  title: string;
  clickHandler: (v: number) => void;
  activeIndex: number;
  itemIndex: number;
};
