import React from "react";

function Sushi({ sushiItem, onEatSushi }) {
  const { name, img_url, price, eaten } = sushiItem;

  function handleClick() {
    if (!eaten) {
      onEatSushi(sushiItem);
    } else {
      alert("Can't eat an empty plate, pal");
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
