import contactWoman from "@/assets/images/contactWoman.png";
import {ContactInfo} from "@/components/ContactInfo";

export const Contacts = () => {
  return (
    <section className="fullHeight contacts grey-bg">
      <div className="container container_bottom fullHeight ">
        <h2 className="section-heading section-heading_secondary section-heading_center">
          Contact us
        </h2>
        <div className="contacts__wrapper">
          <img
            className="contacts__image"
            src={contactWoman}
            alt="Woman in Garden"
          />
          <div className="contacts-information">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};
