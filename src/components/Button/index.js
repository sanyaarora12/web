import React, { useState } from "react";

export default function CustomeButton() {
  const [cartButton, setCartButton] = useState(0);

  const buttonClick = () => {
    setCartButton(cartButton + 1);
  };

  const decButton = () => {
    setCartButton(cartButton - 1);
  };
  return (
    <div>
      {cartButton === 0 ? (
        <div>
          <button onClick={buttonClick}>cart</button>
        </div>
      ) : (
        <div>
          <button onClick={decButton}>-</button>
          <p>{cartButton}</p>
          <button onClick={buttonClick}>+</button>
        </div>
      )}
    </div>
  );
}
