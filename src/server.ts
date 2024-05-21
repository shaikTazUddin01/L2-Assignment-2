// import mongoose from "mongoose";
import app from "./app";

// try {
    
//     async function main() {
//       await mongoose.connect('mongodb://127.0.0.1:27017/test');
//     }
// } catch (error) {
//     console.log(error);
// }

const port=5000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  