import React, { forwardRef } from 'react';

const ButtonComponent = forwardRef(({ 
  as: Component = 'button',
  children, 
  className = "", 
  variant, 
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variantStyles = {
    outline: "border-2 bg-transparent",
    default: "",
  };
  
  const finalClassName = `${baseStyles} ${variantStyles[variant] || ""} ${className}`.trim();
  
  return (
    <Component className={finalClassName} ref={ref} {...props}>
      {children}
    </Component>
  );
});

ButtonComponent.displayName = 'Button';

export const Button = ButtonComponent;
