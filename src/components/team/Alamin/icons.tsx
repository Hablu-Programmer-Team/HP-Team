import { IconSvgProps } from "@/types";
import { FC } from "react";

export const DashboardIcon: FC<IconSvgProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      stroke="none"
      d="M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
    />
  </svg>
);

export const LeaveIcon: FC<IconSvgProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g fill="none" fillRule="evenodd">
      <path stroke="none" d="M0 0h24v24H0z" />
      <path
        strokeLinecap="round"
        strokeWidth="2"
        d="M9 12h10M16 8l2.586 2.586a2 2 0 0 1 0 2.828L16 16"
      />
      <path
        strokeLinecap="round"
        strokeWidth="2"
        d="M16 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10"
      />
    </g>
  </svg>
);
export const ArrowDownIcon: FC<IconSvgProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m7 10 5 5 5-5"
    />
  </svg>
);
export const ProjectIcon: FC<IconSvgProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path
      stroke="none"
      fillRule="evenodd"
      d="m256 34.347 192 110.85v132.136h-42.667v-85.331l-128 73.9v199.533L256 477.752 64 366.9V145.198zm149.333 264.32v64h64v42.666h-64v64h-42.666l-.001-64h-64v-42.666h64v-64zM106.666 192v150.266l128 73.9V265.902zM256 83.614l-125.867 72.669L256 228.953l125.867-72.67z"
    />
  </svg>
);
export const TaskIcon: FC<IconSvgProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path
      stroke="none"
      fillRule="evenodd"
      d="M256 85.333h170.667V128H256zm0 149.334h170.667v42.666H256zM85.333 341.333H192V448H85.333zm32 32V416H160v-42.667zM256 384h170.667v42.667H256zM189.816 46.126l25.364 19.51-76.033 98.843-68.616-60.04 21.072-24.082 42.968 37.574zm0 149.333 25.364 19.51-76.033 98.843-68.616-60.04 21.072-24.082 42.968 37.574z"
    />
  </svg>
);
export const CategoryIcon: FC<IconSvgProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path d="M396.8 310.571V59.733a8.525 8.525 0 0 0-8.533-8.533H294.4v-8.533a8.525 8.525 0 0 0-8.533-8.533h-26.462C255.445 14.686 238.208 0 217.6 0s-37.845 14.686-41.805 34.133h-26.462a8.525 8.525 0 0 0-8.533 8.533V51.2H46.933a8.525 8.525 0 0 0-8.533 8.533V486.4a8.525 8.525 0 0 0 8.533 8.533h267.785C330.923 505.694 350.327 512 371.2 512c56.465 0 102.4-45.935 102.4-102.4 0-47.616-32.708-87.62-76.8-99.029M294.4 85.333h59.733a8.525 8.525 0 0 1 8.533 8.533v213.769c-6.4.529-12.612 1.681-18.628 3.337.529-.145 1.033-.333 1.562-.469V102.4h-51.2zm-8.533 68.267h25.6c4.719 0 8.533 3.814 8.533 8.533s-3.814 8.533-8.533 8.533h-25.6c-4.719 0-8.533-3.814-8.533-8.533s3.814-8.533 8.533-8.533m25.6 153.6H243.2c-4.719 0-8.533-3.814-8.533-8.533s3.814-8.533 8.533-8.533h68.267c4.719 0 8.533 3.814 8.533 8.533s-3.814 8.533-8.533 8.533m-179.2-34.133c-4.719 0-8.533-3.814-8.533-8.533s3.814-8.533 8.533-8.533h68.267c4.719 0 8.533 3.814 8.533 8.533s-3.814 8.533-8.533 8.533zm17.066 25.6a8.525 8.525 0 0 1-8.533 8.533h-8.533c-4.719 0-8.533-3.814-8.533-8.533s3.814-8.533 8.533-8.533h8.533a8.524 8.524 0 0 1 8.533 8.533m-17.066-76.8h25.6a8.525 8.525 0 0 1 8.533 8.533 8.525 8.525 0 0 1-8.533 8.533h-25.6a8.525 8.525 0 0 1-8.533-8.533 8.524 8.524 0 0 1 8.533-8.533m-8.534-25.6a8.525 8.525 0 0 1 8.533-8.533H192c4.719 0 8.533 3.814 8.533 8.533S196.719 204.8 192 204.8h-59.733a8.526 8.526 0 0 1-8.534-8.533m51.2 93.866h34.133c4.719 0 8.533 3.814 8.533 8.533s-3.814 8.533-8.533 8.533h-34.133c-4.719 0-8.533-3.814-8.533-8.533s3.814-8.533 8.533-8.533m17.067-51.2a8.525 8.525 0 0 1-8.533-8.533 8.525 8.525 0 0 1 8.533-8.533h51.2a8.525 8.525 0 0 1 8.533 8.533 8.525 8.525 0 0 1-8.533 8.533zM234.667 256H268.8c4.719 0 8.533 3.814 8.533 8.533s-3.814 8.533-8.533 8.533h-34.133c-4.719 0-8.533-3.814-8.533-8.533s3.814-8.533 8.533-8.533m76.8 17.067h-8.533c-4.719 0-8.533-3.814-8.533-8.533s3.814-8.533 8.533-8.533h8.533c4.719 0 8.533 3.814 8.533 8.533s-3.814 8.533-8.533 8.533m0-34.134h-34.133a8.525 8.525 0 0 1-8.533-8.533 8.525 8.525 0 0 1 8.533-8.533h34.133A8.525 8.525 0 0 1 320 230.4a8.525 8.525 0 0 1-8.533 8.533m0-34.133h-85.333c-4.719 0-8.533-3.814-8.533-8.533s3.814-8.533 8.533-8.533h85.333c4.719 0 8.533 3.814 8.533 8.533s-3.814 8.533-8.533 8.533m-153.6-110.933V51.2h25.6A8.525 8.525 0 0 0 192 42.667c0-14.114 11.486-25.6 25.6-25.6s25.6 11.486 25.6 25.6a8.525 8.525 0 0 0 8.533 8.533h25.6v51.199H157.867zm93.866 59.733c4.719 0 8.533 3.814 8.533 8.533s-3.814 8.533-8.533 8.533H132.267c-4.719 0-8.533-3.814-8.533-8.533s3.814-8.533 8.533-8.533zM81.067 460.8a8.525 8.525 0 0 1-8.533-8.533v-358.4a8.525 8.525 0 0 1 8.533-8.533H140.8V102.4H89.6v341.333h185.088c-.171-.478-.282-.964-.444-1.442a102.5 102.5 0 0 0 8.405 18.509zM371.2 494.933c-18.483 0-35.567-5.973-49.553-16a84 84 0 0 1-7.637-6.187c-.341-.307-.683-.614-1.015-.93a86.1 86.1 0 0 1-19.157-26.675c.401.887.759 1.783 1.169 2.662-5.794-11.511-9.139-24.465-9.139-38.204 0-17.749 5.461-34.236 14.763-47.906 2.039-2.987 4.309-5.777 6.69-8.474a109 109 0 0 1 1.604-1.766q.924-.99 1.872-1.956a117 117 0 0 0-1.82 1.905c12.211-13.056 28.425-22.272 46.694-25.651 2.5-.461 5.035-.828 7.603-1.084 2.611-.239 5.248-.401 7.927-.401 2.637 0 5.231.162 7.799.393 2.483.247 5.018.597 7.637 1.075 39.697 7.296 69.897 42.095 69.897 83.866-.001 47.053-38.281 85.333-85.334 85.333" />
    <path d="M418.603 368.37c-3.942-2.62-9.233-1.562-11.836 2.364l-44.51 66.765-18.364-24.482a8.527 8.527 0 0 0-11.947-1.707c-3.772 2.825-4.54 8.175-1.707 11.938l25.6 34.133c.179.247.469.333.666.555.452.495.845 1.041 1.425 1.434.222.145.461.196.683.316.247.137.486.239.742.35 1.075.452 2.185.768 3.302.768h.017c.017 0 .034-.009.051-.009.794-.008 1.57-.154 2.33-.375.23-.068.444-.162.666-.247a8.3 8.3 0 0 0 1.681-.879c.119-.085.265-.111.384-.205.06-.043.085-.111.145-.162.691-.546 1.323-1.161 1.835-1.929l51.2-76.8a8.516 8.516 0 0 0-2.363-11.828" />
  </svg>
);
export const SettingIcon: FC<IconSvgProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
   
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M3 9.11v5.77C3 17 3 17 5 18.35l5.5 3.18c.83.48 2.18.48 3 0l5.5-3.18c2-1.35 2-1.35 2-3.46V9.11C21 7 21 7 19 5.65l-5.5-3.18c-.82-.48-2.17-.48-3 0L5 5.65C3 7 3 7 3 9.11"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      opacity=".5"
    />
  </svg>
);
export const HelpIcon: FC<IconSvgProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
   
  >
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10M7.92 9.234v.102a.5.5 0 0 0 .5.5h.997a.5.5 0 0 0 .499-.499c0-1.29.998-1.979 2.34-1.979 1.308 0 2.168.689 2.168 1.67 0 .928-.482 1.359-1.686 1.91l-.344.154C11.379 11.54 11 12.21 11 13.381v.119a.5.5 0 0 0 .5.5h.997a.5.5 0 0 0 .499-.499c0-.516.138-.723.55-.912l.345-.155c1.445-.654 2.529-1.514 2.529-3.39v-.103c0-1.978-1.72-3.441-4.164-3.441-2.478 0-4.336 1.428-4.336 3.734m2.58 7.757c0 .867.659 1.509 1.491 1.509.85 0 1.509-.642 1.509-1.509s-.659-1.491-1.509-1.491c-.832 0-1.491.624-1.491 1.491" />
  </svg>
);
export const UserIcon: FC<IconSvgProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 16 16"
  
  >
    <path
      fill="#000"
      d="M8 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6M14 12a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v3h12z"
    />
  </svg>
);
export const UserProfileIcon: FC<IconSvgProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="150"
    height="150"
    viewBox="0 0 508 508"
  >
    <circle cx="254" cy="254" r="254" fill="#84dbff" />
    <path
      d="M455.2 408.8C408.8 469.2 336 508 254 508S99.2 469.2 52.8 408.8l10.8-69.2 136.8-70.4v1.6l-36 39.2 22 16.4-27.2 14.4L254 490.4l94.8-149.6-27.2-14.4 22-16.4-36-38.8v-1.6L444.4 340z"
      fill="#2b3b4e"
    />
    <path
      d="M348.8 340.8 254 490.4l38.8-168c1.2 2 2 4.4 3.2 6.8 0 0 13.6-29.6 12-57.6l36 38.8-22 16.4zM159.2 340.8l27.2-14.4-22-16.4 35.6-38.8c-1.6 28.4 12 57.6 12 57.6.8-2.4 2-4.8 3.2-6.8L254 490.4z"
      fill="#324a5e"
    />
    <path
      d="M292.8 322 254 490l-38.8-168c13.2-23.6 38.8-20.8 38.8-20.8s25.6-2.8 38.8 20.8"
      fill="#e6e9ee"
    />
    <path d="M254.4 300.8q-.6.6 0 0h-.4z" fill="#f1543f" />
    <path
      d="m278 306.8-8.8 19.2h-30l-9.2-19.2c12-6.8 24-5.2 24-5.2s12-1.6 24 5.2"
      fill="#f1543f"
    />
    <path d="M274.4 402 254 490l-20.4-88 5.6-76.4h29.6z" fill="#ff7058" />
    <path
      d="M296 244.4c-1.6 8.8-9.2 27.2-42 56.8-28.4-26.8-37.6-45.6-40.8-55.2 11.2 14.8 25.2 24.8 40.8 24.8 16 0 30.4-10.4 42-26.4"
      fill="#f9b54c"
    />
    <path
      d="M296 328.8c-11.6-31.2-42-27.6-42-27.6 32.4-29.2 40.4-47.6 41.6-56.4.8-1.2 1.6-2 2.4-3.2 23.2 32-2 87.2-2 87.2M254 301.2s-30.4-3.6-42 27.6c0 0-25.6-55.6-2.4-87.2l3.6 4.8c3.2 9.2 12.4 28 40.8 54.8"
      fill="#fff"
    />
    <path
      d="M325.6 201.2c-3.6 5.6-8.4 9.6-12.8 11.2-11.6 31.6-33.6 58.4-58.8 58.4s-47.2-26.8-58.8-58.4c-4.4-1.6-9.2-5.6-12.8-11.2-6-9.6-6-20.4 0-24 .4-.4 1.2-.4 2-.8 1.2 6.8 2.8 13.2 4.8 18.8 0 0 5.2 9.6 6.4 18-.4-9.6-.8-29.6 2.4-33.6 0 0 14-24.4 3.6-46 0 0 2.4-32 38-17.2 0 0 6.8 1.6 14 2 6.8-.4 14-2 14-2 36-14.8 38.4 17.6 38.4 17.6-10.4 21.6 3.6 46 3.6 46 3.2 4 2.8 24 2.4 33.6 1.2-8.4 6.4-18 6.4-18 2.4-5.2 4-12 4.8-18.8.8 0 1.2.4 2 .8 6 3.6 6 14 .4 23.6"
      fill="#ffd05b"
    />
    <path
      d="M330 102.8c-2-3.2-11.6 2-11.6 2 1.2-7.2-3.2-23.2-3.2-23.2-1.6 5.6-8 6.4-8 6.4.8-5.2-5.6-19.2-5.6-19.2 1.2 6.4-8 12.8-8 12.8 1.6-5.2-10.8-23.2-10.8-23.2 2 2.8 1.2 10.8 1.2 10.8-4.4-9.2-16.8-18.4-16.8-18.4 0 2.4-1.2 4.8-3.2 6.8-3.2-5.6-9.2-8.8-10.4-9.6-1.2.4-7.6 3.6-10.4 9.6-1.6-2-3.2-4.4-3.2-6.8 0 0-12.4 9.2-16.8 18.4 0 0-.8-8 1.2-10.8 0 0-12.4 18-10.8 23.2 0 0-9.2-6.4-8-12.8 0 0-6.4 14-5.6 19.2 0 0-6.4-.8-8-6.4 0 0-4.4 16-3.2 23.2 0 0-9.6-5.6-11.6-2 0 0 9.2 9.6 4.4 18.4 0 0-3.2 48.8 6.8 74 0 0 5.2 9.6 6.4 18-.4-9.6-.8-29.6 2.4-33.6 0 0 14-24.4 3.6-46 0 0 2.4-32 38-17.2 0 0 6.8 1.6 14 2 7.2-.4 14-2 14-2C303.6 101.6 306 134 306 134c-10.4 21.6 3.6 46 3.6 46 3.2 4 2.8 24 2.4 33.6 1.2-8.4 6.4-18 6.4-18 10.4-25.2 6.8-74 6.8-74-4.4-8.8 4.8-18.8 4.8-18.8"
      fill="#324a5e"
    />
  </svg>
);
