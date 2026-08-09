import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  icon?: React.ReactNode;
  download?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  icon,
  download,
}) => {
  const baseClasses =
    "group relative px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 overflow-hidden";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#20B2AA] to-[#4682B4] hover:from-[#4682B4] hover:to-[#20B2AA] text-white hover:scale-105",
    secondary:
      "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#4682B4]/40 text-white",
    outline:
      "border-2 border-[#20B2AA] hover:bg-[#20B2AA]/10 text-[#20B2AA] hover:scale-105",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default Button;