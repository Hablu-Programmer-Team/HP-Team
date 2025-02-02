import { FC, SVGProps } from "react";

type IconSvgProps = SVGProps<SVGSVGElement>;

export const ProgressIcon: FC<IconSvgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="8"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M.667.667C.667.298.965 0 1.333 0H2a.667.667 0 1 1 0 1.333h-.667A.667.667 0 0 1 .667.667M4 .667C4 .298 4.298 0 4.667 0h6a.667.667 0 0 1 0 1.333h-6A.667.667 0 0 1 4 .667M.667 4c0-.368.298-.667.666-.667H2a.667.667 0 0 1 0 1.334h-.667A.667.667 0 0 1 .667 4M4 4c0-.368.298-.667.667-.667h6a.667.667 0 0 1 0 1.334h-6A.667.667 0 0 1 4 4M.667 7.333c0-.368.298-.666.666-.666H2A.667.667 0 1 1 2 8h-.667a.667.667 0 0 1-.666-.667m3.333 0c0-.368.298-.666.667-.666h6a.667.667 0 0 1 0 1.333h-6A.667.667 0 0 1 4 7.333"
    />
  </svg>
);
