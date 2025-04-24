import React, { useContext, useEffect } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  useEffect(() => {
    console.log("This is the food_list: ", food_list);
  }, [food_list]);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list && food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
          //  {
          //   if(item.name==="testing2") 
          //   {
          //     console.log("This is the testing 2 item : ",item.image[0]);
          //     return (
          //       <FoodItem
          //         key={index}
          //         id={item._id}
          //         name={item.name}
          //         description={item.description}
          //         price={item.price}
          //         image={item.image[0]}
          //       />
          //     );

          //   }
          //  }
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image[0]}
              />
            );
          }
          return null; // Don't forget to return null when condition doesn't match
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
