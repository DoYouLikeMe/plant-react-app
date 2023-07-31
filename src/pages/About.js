import HousePlant from "@/assets/images/houseplant.png";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/Button";
export const About = () => {
  return (
    <section className="about fullHeight">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h2 className="section-heading section-heading_secondary">
              We are{" "}
              <span className="red-emphasizing">
                professional<br></br>experienced
              </span>{" "}
              gardeners
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <Link to="/Service">
              <Button text="Our Service" />
            </Link>
          </div>
          <img className="about__image" src={HousePlant} alt="Leafs" />
        </div>
      </div>
    </section>
  );
};
