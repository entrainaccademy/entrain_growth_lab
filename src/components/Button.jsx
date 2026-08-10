import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  showArrow = true,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold tracking-tight transition-all duration-200 rounded-full select-none cursor-pointer focus:outline-none';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs md:text-sm gap-1.5',
    md: 'px-6 py-3 text-sm md:text-base gap-2',
    lg: 'px-8 py-4 text-base md:text-lg gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#C7FF3D] text-[#0A0A0A] hover:bg-[#B0F025] hover:shadow-lg hover:shadow-[#C7FF3D]/20 active:scale-[0.98]',
    secondary:
      'bg-[#141414] text-[#F5F5F0] border border-[#282828] hover:border-[#C7FF3D] hover:text-[#C7FF3D] active:scale-[0.98]',
    outline:
      'bg-transparent border border-white/20 text-[#F5F5F0] hover:border-[#C7FF3D] hover:text-[#C7FF3D] hover:bg-[#C7FF3D]/5 active:scale-[0.98]',
    white:
      'bg-[#F5F5F0] text-[#0A0A0A] hover:bg-white active:scale-[0.98]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`group ${combinedClasses}`} onClick={onClick} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={`group ${combinedClasses}`} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
