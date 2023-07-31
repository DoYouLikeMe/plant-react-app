import {ReactComponent as InstIcon} from "@/assets/images/icons/inst.svg";
import {ReactComponent as FbIcon} from "@/assets/images/icons/fb.svg";
import {ReactComponent as TwIcon} from "@/assets/images/icons/tw.svg";
import {ReactComponent as PinterestIcon} from "@/assets/images/icons/pinterest.svg";

export const Socials = () => {
  return (
    <ul className="social-list">
      <li className="social-list__item">
        <a class="social-list__link" href="instagram.com">
          <InstIcon className="social-list__icon" />
        </a>
      </li>
      <li className="social-list__item">
        <a class="social-list__link" href="instagram.com">
          <FbIcon className="social-list__icon" />
        </a>
      </li>
      <li className="social-list__item">
        <a class="social-list__link" href="instagram.com">
          <TwIcon className="social-list__icon" />
        </a>
      </li>
      <li className="social-list__item">
        <a class="social-list__link" href="instagram.com">
          <PinterestIcon className="social-list__icon" />
        </a>
      </li>
    </ul>
  );
};
