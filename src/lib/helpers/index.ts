import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 max-w-fit max-h-fit",
  {
    variants: {
      variant: {
        primary:
          "relative overflow-hidden bg-[#2D2ACD] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56 cursor-pointer active:scale-95",
        secondary:
          "relative overflow-hidden bg-[#2A2E44] text-[#DE8A2A] shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-[#DE8A2A] before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-[#DE8A2A] after:duration-500 hover:text-white hover:shadow-[#DE8A2A] hover:before:h-1/2 hover:after:h-1/2 cursor-pointer active:scale-95",
        accent:
          "relative flex items-center justify-center overflow-hidden bg-[#A649DA] font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-150 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px] cursor-pointer active:scale-95 delay-150",
        outline:
          "relative bg-transparent overflow-hidden border border-pink-400 text-pink-400 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-pink-400 hover:before:w-2/4 hover:before:bg-pink-400 hover:after:w-2/4 hover:after:bg-pink-400 cursor-pointer active:scale-95",
      },
      size: {
        sm: "px-2.5 py-1 text-[10px]",
        md: "rounded-md text-xs px-[1rem] py-[0.375rem]",
        lg: "px-4 py-2 rounded-md px-8",
        xl: "px-9 py-3",
        icon: "size-10 p-2",
      },
      radius: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md", radius: "md" },
  }
);
