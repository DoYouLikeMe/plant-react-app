import Leafs from "@/assets/images/leafs.png";
import {Button} from "@/components/ui/Button";
import {Link} from "react-router-dom";

export const Main = () => {
  return (
    <section className="main fullHeight grey-bg">
      <div className="container">
        <div className="main__wrapper">
          <img className="main__image" src={Leafs} alt="Leafs" />
          <div className="main__content">
            <h1 className="section-heading main__heading">
              We grow <span className="green-emphasizing">plants</span> and give
              you oxygen
            </h1>
            <p>
              We are passionate about growing plants and providing you with the
              gift of oxygen. Our mission is to create a greener and healthier
              environment for everyone.
            </p>
            <Link to="/about">
              {" "}
              <Button text="Learn More" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
