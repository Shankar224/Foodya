import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log("This is the response:", response.data);

      if (response.data) {
        // Assuming your food items are in response.data.data
        setList(response.data || []); 
      } else {
        toast.error("Error fetching food list");
      }
    } catch (error) {
      console.error("Error fetching list:", error);
      toast.error("Failed to fetch list");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      await fetchList();

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("Error removing food");
      }
    } catch (error) {
      console.error("Error removing food:", error);
      toast.error("Failed to remove food");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item) => (
          <div key={item._id} className='list-table-format'>
            <img
              src={item.image?.[0] || `${url}/images/default.jpg`}
              alt="food"
            />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>₹{item.price}</p>
            <p onClick={() => removeFood(item._id)} className='cursor'>x</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
