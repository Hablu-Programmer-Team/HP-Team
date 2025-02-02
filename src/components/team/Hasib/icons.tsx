import { FC, SVGProps } from "react";

type IconSvgProps = SVGProps<SVGSVGElement>;

export const SearchIcon: FC<IconSvgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    {...props}
    
  >
    <path
      className="fill-[#1C1D22] group-hover:fill-[#FF7979]  "
      d="M9.167 3.667a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m-7.334 5.5a7.333 7.333 0 1 1 13.127 4.497l4.938 4.938a.917.917 0 0 1-1.296 1.296l-4.938-4.938a7.333 7.333 0 0 1-11.83-5.793"
    />
  </svg>
);

export const NotificationIcon: FC<IconSvgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    {...props}
   
  >
    <path
      className="fill-[#1C1D22] group-hover:fill-[#FF7979] "
      d="M9.3 2.977a1.834 1.834 0 0 1 3.4 0 6.42 6.42 0 0 1 4.717 6.19v4.306l1.679 2.518a.916.916 0 0 1-.763 1.426h-4.157a3.209 3.209 0 0 1-6.352 0H3.667a.917.917 0 0 1-.763-1.426l1.68-2.518V9.167A6.42 6.42 0 0 1 9.3 2.977m.403 14.44a1.376 1.376 0 0 0 2.594 0zM11 4.583a4.583 4.583 0 0 0-4.583 4.584v4.583a.9.9 0 0 1-.154.508l-.884 1.325H16.62l-.883-1.325a.9.9 0 0 1-.154-.508V9.167A4.583 4.583 0 0 0 11 4.583"
    />
  </svg>
);

export const CalendarIcon: FC<IconSvgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    {...props}
  >
    <path
      className="fill-[#1C1D22] group-hover:fill-[#FF7979] "
      d="M8.25 1.833c.506 0 .917.41.917.917v.917h3.666V2.75a.917.917 0 0 1 1.834 0v.917h2.75c1.012 0 1.833.82 1.833 1.833v11.917c0 1.012-.82 1.833-1.833 1.833H4.583a1.833 1.833 0 0 1-1.833-1.833V5.5c0-1.013.82-1.833 1.833-1.833h2.75V2.75c0-.506.41-.917.917-.917M7.333 5.5h-2.75v2.75h12.834V5.5h-2.75v.917a.917.917 0 0 1-1.834 0V5.5H9.167v.917a.917.917 0 0 1-1.834 0zm10.084 4.583H4.583v7.334h12.834z"
    />
  </svg>
);
