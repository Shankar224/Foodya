import foodModel  from "../models/foodModel.js";
import fs  from 'fs'


// const addFood = async (req, res) => {
//    let image_filename = `${req.file.filename}`;

//    const food = new foodModel({
//      name: req.body.name,
//      description: req.body.description,
//      price: req.body.price,
//      category: req.body.category,
//      image: image_filename
//    })
 
//    try {
//      await food.save();
//      res.json({ success: true, message: "Food Added" })
//    } catch (error) {
//      console.log(error)
//      res.json({ success: false, message: "Error" })
//    }
//  }

//  // all food list

// const listFood =async(req,res) =>{
//    try {
//       const foods = await foodModel.find({});
//       res.json({success:true,data})
//    } catch (error) {
//       console.log(error);
//       res.json({success:false,message :"Error"})
//    }
// }import Food from "../models/foodModel.js";



// export const addFood = async (req, res) => {
//   try {
//     // Sanitize field names (remove whitespace from keys and values)
//     const sanitizedBody = Object.fromEntries(
//       Object.entries(req.body).map(([key, value]) => [key.trim(), value.trim()])
//     );

//     const { name, description, price, category } = sanitizedBody;
//     const image = req.file?.filename;

//     // Debug logs
//     console.log("Sanitized Body:", sanitizedBody);
//     console.log("File info:", req.file);

//     // Validate required fields
//     if (!name || !image) {
//       return res.status(400).json({ success: false, message: "Name and image are required." });
//     }

//     const newFood = new Food({
//       name,
//       description,
//       price,
//       category,
//       image
//     });

//     await newFood.save();

//     res.status(201).json({ success: true, message: "Food added successfully", data: newFood });
//   } catch (error) {
//     console.error("Add Food Error:", error);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };

// // @desc    List all food items
// // @route   GET /api/food/list
// // @access  Public
// export const listFood = async (req, res) => {
//   try {
//     const foodItems = await Food.find();
//     res.status(200).json({ success: true, data: foodItems });
//   } catch (error) {
//     console.error("List Food Error:", error);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };
//  export{addFood, listFood}



export const addFood = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    console.log("This is the image : ",req.body);

    // Check if required fields are present
    // if (!name || !description || !price || !category || !image) {
    //   return res.status(400).json({ error: "All fields are required `{error}`" });
    // }
    const image=req.encodedImages;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    if (!description) {
      return res.status(400).json({ error: "Description is required" });
    }
    if (!price) {
      return res.status(400).json({ error: "Price is required" });
    }
    if (!category) {
      return res.status(400).json({ error: "Category is required" });
    }
    if (!image) {
      return res.status(400).json({ error: "Image URL is required" });
    }
    

    const newFood = new foodModel({
      name,
      description,
      price,
      category,
      image,
    });

    await newFood.save();
    console.log("Image has been uploaded : ",req.body)
    res.status(201).json(newFood);
  } catch (error) {
    console.error("Add Food Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// List all food items
export const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.status(200).json(foods);
  } catch (error) {
    console.error("List Food Error:", error);
    res.status(500).json({ error: "Failed to fetch food items" });
  }
};

export const removeFood =async(req,res)=>{
   try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{})

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success:true,meassage:"Food Removed"})
   } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
   }
}

