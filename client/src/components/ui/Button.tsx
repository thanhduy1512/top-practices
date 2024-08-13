import React, { useRef } from "react";
import createEmojiRain from "./createEmojiRain";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  color?: string;
  hoverColor?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  color = "bg-blue-500",
  hoverColor = "hover:bg-blue-700",
  children,
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    createEmojiRain(buttonRef, icon); // Pass the button ref to createEmojiRain
    if (onClick) onClick(event); // Pass the event to the onClick prop
  };

  return (
    <button
      ref={buttonRef} // Attach the ref to the button
      className={`font-bold text-white ${color} ${hoverColor} rounded flex items-center p-1`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
