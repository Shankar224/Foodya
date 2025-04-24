import express from "express";
import { addFood, listFood ,removeFood} from "../controllers/foodController.js";
import multer from "multer";
import fs from "fs";

const foodRouter = express.Router();

// Storage config
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File filter for images only
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

const upload = multer({ storage, fileFilter });

// Middleware to encode multiple images as base64
const encodeMultipleToBase64 = (req, res, next) => {
  console.log("Encoding...\n");
  if (req.files && req.files.length > 0) {
    req.encodedImages = []; // array to store objects with base64 and mime

    let pending = req.files.length;

    req.files.forEach((file, index) => {
      fs.readFile(file.path, (err, data) => {
        if (err) return next(err);

        const mimeType = file.mimetype; // e.g., "image/png", "image/svg+xml"
        const base64 = data.toString("base64");

        req.encodedImages[index] = `data:${mimeType};base64,${base64}`;

        pending--;
        if (pending === 0) {
          next(); // All files processed
        }
      });
    });
  } else {
    next(); // No files
  }
};

const temp = async(req,res,next)=>{
  console.log("User has added the item with the files : ",req.files);
  next();
}

// Updated route to accept multiple images with field name "images"
foodRouter.post("/add", upload.array("image"), temp,encodeMultipleToBase64, addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove",removeFood);
export default foodRouter;
