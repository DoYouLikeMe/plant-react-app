export const ServiceItem = (props) => {
  const {title, description, category, imageURL, allInactive, isActive} = props;
  return (
    <div
      dataset={category}
      className={
        allInactive || isActive
          ? "service-item"
          : "service-item service-item_inactive "
      }
    >
      <div
        className="service-item__image"
        style={{backgroundImage: `url(${imageURL})`}}
      ></div>
      <div className="service-item__content">
        <div className="service-item__heading">{title}</div>
        <div className="service-item__description">{description}</div>
      </div>
    </div>
  );
};
