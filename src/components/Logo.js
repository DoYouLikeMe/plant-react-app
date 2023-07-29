import {ReactComponent as LogoImage} from "@/assets/images/icons/logo.svg";

export const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__icon">
        <LogoImage />
      </div>
      <div className="logo__text">Plants</div>
    </div>
  );
};
