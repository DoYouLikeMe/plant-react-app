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
              Our team of gardeners has over 4 years of professional experience
              in the industry 1 . We have a comprehensive understanding of the
              duties and responsibilities that come with the job, such as
              planting, weeding, pruning, and maintaining flower beds, gardens,
              and other landscaping areas.
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
