import "dotenv/config";
import connectDB from "./db/index.js";

connectDB()
  .then(
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server Is Running On PORT: ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log("MongoDB Connection Failed!", err);
  });
