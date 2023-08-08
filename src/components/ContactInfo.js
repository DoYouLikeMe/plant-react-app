import {ContactDetails} from "@/components/ui/ContactsDetails";
import {Address} from "@/components/ui/Address";
import {data} from "@/temp/contactData";
import {useState, useEffect} from "react";

export const ContactInfo = () => {
  const [cities, setCities] = useState([]);
  const [activeCity, setActiveCity] = useState({});

  useEffect(() => {
    setCities(data);
  }, [activeCity]);

  const getActiveCity = (id) => {
    setActiveCity(cities.find((city) => city.id === id));
  };

  return (
    <>
      <ContactDetails
        handler={getActiveCity}
        activeCity={activeCity?.city}
        cities={cities}
      />
      <Address activeCity={activeCity} />
    </>
  );
};
