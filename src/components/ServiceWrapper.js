import {ServiceItem} from "./ServiceItem";
import {Button} from "@/components/ui/Button";
import {useEffect, useState} from "react";
import {data as items} from "@/temp/serviceData";

export const ServiceWrapper = () => {
  const [data, setData] = useState([]);
  const [activeButtons, setActiveButtons] = useState([]);
  const [allInactive, setAllInactive] = useState(true);

  useEffect(() => {
    setData(items);

    if (activeButtons.length === 0) {
      setAllInactive(true);
    } else {
      setAllInactive(false);
    }
  }, [activeButtons]);

  const toggleButton = (category) => {
    const isActive = activeButtons.includes(category);
    if (isActive) {
      setActiveButtons(
        activeButtons.filter((categoryBtn) => categoryBtn !== category)
      );
    } else {
      setActiveButtons([...activeButtons, category]);
    }
  };

  return (
    <>
      <div className="buttons-tabs">
        {[...new Set(data.map((item) => item.category))].map(
          (category, key) => (
            <Button
              isActive={activeButtons.includes(category)}
              key={key}
              text={category}
              onClick={() => toggleButton(category)}
            />
          )
        )}
      </div>
      <div className="serviceWrapper">
        {data.map((item, key) => (
          <ServiceItem
            isActive={activeButtons.includes(item.category)}
            allInactive={allInactive}
            key={key}
            title={item.title}
            description={item.description}
            category={item.category}
            imageURL={item.imageURL}
          />
        ))}
      </div>
    </>
  );
};
