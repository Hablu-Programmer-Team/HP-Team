
declare interface IChildren {
  children: React.ReactNode;
}
declare interface IClassName {
  className?: string;
}
declare interface IClassNameWithChildren extends IChildren, IClassName {}

