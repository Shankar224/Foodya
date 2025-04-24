import fs from "fs";
const encodeToBase64 = (req, res, next) => {
    if (req.file) {
      const filePath = req.file.path;
      fs.readFile(filePath, (err, data) => {
        if (err) {
          return next(err);
        }
        req.encoded = data.toString("base64");
        next();
      });
    } else {
      next(); // No file, move on
    }
  };

export default encodeToBase64;