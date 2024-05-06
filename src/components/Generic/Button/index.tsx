import { ButtonType } from "./types";

const Button = ({ children, isWhite }: ButtonType) => {
  const colors = isWhite
    ? "border-white text-white hover:border-accentColor"
    : "border-accentLightColor text-accentColor";
  return (
    <button
      className={`mt-8 px-8 py-2 border rounded-full ${colors} hover:bg-accentColor hover:text-white font-bold`}
    >
      {children}
    </button>
  );
};

export default Button;
