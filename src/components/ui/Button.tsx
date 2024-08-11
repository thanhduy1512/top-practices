import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  color?: string;
  hoverColor?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  color = "bg-blue-500",
  hoverColor = "hover:bg-blue-700",
  children,
  ...props
}) => {
  return (
    <button
      className={`font-bold text-white ${color} ${hoverColor} rounded flex items-center p-1`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
