import {Link} from "react-router-dom";
import Leafs from "@/assets/images/leafs.png";
import {Button} from "@/components/ui/Button";

import {PriceDetails} from "@/components/PriceDetails";
export const Price = () => {
  return (
    <section className="fullHeight price">
      <div className="container">
        <div className="price__wrapper">
          <div className="price-content-left">
            <h2 className="section-heading">Prices</h2>
            <PriceDetails />
          </div>
          <div className="price-content-right">
            <h2 className="section-heading section-heading_right">
              Our best{" "}
              <span className="green-emphasizing">
                gardeners are ready to help you
              </span>
            </h2>
            <Link to="/contacts">
              <Button text="Contact us" />
            </Link>
            <img
              className="price-content-right__image"
              src={Leafs}
              alt="Leafs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
