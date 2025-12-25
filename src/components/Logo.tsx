import { Link } from "react-router-dom";

type LogoProps = {
  size?: "sm" | "md" | "lg";
};

const Logo = ({ size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <Link to="/" className="flex items-center">
      <span
        className={`
          font-display 
          font-bold 
          tracking-widest 
          text-primary 
          ${sizeClasses[size]}
          drop-shadow-[0_0_10px_rgba(0,255,150,0.6)]
        `}
      >
        JFN
      </span>
    </Link>
  );
};

export default Logo;
