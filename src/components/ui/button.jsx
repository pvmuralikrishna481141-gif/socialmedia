import React from "react";
// Simple wrapper to make the code run without full shadcn setup
export const Button = ({ children, className, variant, size, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    gradient: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90", // Matches your gradient theme
    ghost: "hover:bg-accent hover:text-accent-foreground"
  };
  const sizes = {
    default: "h-10 px-4 py-2",
    lg: "h-11 px-8"
  };
  
  const variantStyle = variants[variant] || variants.default;
  const sizeStyle = sizes[size] || sizes.default;

  return (
    <button className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className || ""}`} {...props}>
      {children}
    </button>
  );
};