import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Determine final image source
  let imageSrc = '';
  const trimmedImage = image.trim();

  if (trimmedImage.startsWith('<svg')) {
    imageSrc = `data:image/svg+xml;utf8,${encodeURIComponent(trimmedImage)}`;
  } else if (trimmedImage.startsWith('data:image/')) {
    imageSrc = trimmedImage;
  } else {
    imageSrc = `data:image/png;base64,${trimmedImage}`;
  }

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={imageSrc}
          alt={name}
        />

        {!cartItems[id] ? (
          <img
            className='add'
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add to Cart"
          />
        ) : (
          <div className='food-item-counter'>
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating Stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
