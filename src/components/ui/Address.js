export const Address = (props) => {
  const {
    city = "City",
    phone = "sd hone",
    adress = "Address",
  } = props.activeCity;

  return (
    <div className={props?.activeCity?.city ? "address isVisible" : "address"}>
      <div className="address__row">
        <div className="address__heading">City:</div>
        <div className="address__info">{city}</div>
      </div>
      <div className="address__row">
        <div className="address__heading">Phone:</div>
        <div className="address__info">{phone}</div>
      </div>
      <div className="address__row">
        <div className="address__heading">Office address:</div>
        <div className="address__info">{adress}</div>
      </div>

      <a href={"tel:" + phone.replace(/\s/g, "")} className="btn address__btn">
        Call us
      </a>
    </div>
  );
};
