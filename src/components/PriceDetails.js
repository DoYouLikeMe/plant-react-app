import {PriceDetailsButton} from "@/components/ui/PriceDetail.Button";
import {data} from "@/temp/priceData";

export const PriceDetails = () => {
  return (
    <div class="price-details">
      {data.map((item) => (
        <PriceDetailsButton
          price={item.price}
          description={item.description}
          time={item.time}
          plan={item.plan}
        />
      ))}
    </div>
  );
};
