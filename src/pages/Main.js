import Leafs from "@/assets/images/leafs.png";

export const Main = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="main__wrapper">
          <img className="main__image" src={Leafs} alt="Leafs" />
          <div className="main__content">
            <h1 className="section-heading main__heading">
              We grow <span class="green-emphasizing">plants</span> and give you
              oxygen
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
