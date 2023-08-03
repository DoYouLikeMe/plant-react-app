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
            <h2 className="section-heading">
              Our best gardeners are ready to help you
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
