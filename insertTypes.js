const mongoose = require("mongoose");
const { Type } = require("./model/Type"); // Adjust the path as necessary

mongoose
  .connect(
    "mongodb+srv://techdukaan26:8pKp6inAaxL0qxWa@cluster0.l72zy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(async () => {
    console.log("Connected to MongoDB");
    const laptop = "67063d7fcb210608eb057f20";
    const printer = "67063d7fcb210608eb057f21";
    const accessories = "67063d7fcb210608eb057f22";
    const pc = "67063d7fcb210608eb057f1f";
    const Monitor = "67125db890bb373a1c9d2562";
    const cableConverters = "671547d6ca782f2879edd95e";
    const keyboardMouse = "67154bdb93d3c8f7e95d45c4";

    // Dummy Subcategory Data
    const types = [
      {
        label: "STUDENT/HOME",
        value: "student/home-pc",
        category: pc,
      },
    ];

    // Insert Dummy Data
    try {
      await Type.insertMany(types);
      console.log("types inserted types");
    } catch (error) {
      console.error("Error inserting types:", error);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch((err) => console.error("Connection error:", err));
