import React from "react";
export enum ButtonColorEnum {
 Primary = "primary",
 Secondary = "secondary",
 Gradient = "gradient",
 Transparent = "transparent",
}
export interface ButtonProps extends React.PropsWithChildren {
 color?: ButtonColorEnum;
 logo?: React.ReactElement;
 disabled?: boolean;
 fullWidth?: boolean;
 className?: string;
 notAllow?: boolean;
 onClick?: () => void;
}
export const Button: React.FC<ButtonProps> = ({
 color,
 children,
 disabled,
 fullWidth,
 className,
 notAllow,
 onClick,
}) => {
 const buttonStyles = React.useMemo(() => {
  let _buttonStyles = "";
  if (color === ButtonColorEnum.Primary) {
   _buttonStyles = "bg-primary text-white";
  } else if (color === ButtonColorEnum.Secondary) {
   _buttonStyles = "bg-secondary text-white";
  } else if (color === ButtonColorEnum.Gradient) {
   _buttonStyles =
    "bg-gradient-to-r from-secondary via-primary to-secondary-900 text-neutral-200 ";
  } else if (color === ButtonColorEnum.Transparent) {
   _buttonStyles = "bg-transparent border border-white text-white";
  } else {
   _buttonStyles = "bg-white border border-black ";
  }
  return _buttonStyles;
 }, [color]);
 return (
  <button
   onClick={onClick}
   disabled={disabled}
   className={
    "h-full px-3 py-2 md:px-6 rounded-full font-semibold  flex justify-center items-center gap-x-2 text-center truncate disabled:opacity-50 disabled:cursor-not-allowed text-sm hover:brightness-125 " +
    buttonStyles +
    (fullWidth ? " w-full" : "") +
    (className ? " " + className : "") +
    (notAllow ? " cursor-not-allowed" : "")
   }
  >
   {children}
  </button>
 );
};
