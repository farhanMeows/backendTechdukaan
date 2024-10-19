const mongoose = require("mongoose");
const { Colour } = require("./model/Colour"); // Adjust the path as necessary

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
    // Dummy Subcategory Data
    const Colours = [
      {
        label: "Black",
        value: "black-laptop",
        category: laptop,
      },
      {
        label: "White",
        value: "white-laptop",
        category: laptop,
      },
      {
        label: "Blue",
        value: "blue-laptop",
        category: laptop,
      },
      {
        label: "Silver",
        value: "silver-laptop",
        category: laptop,
      },
      {
        label: "Others",
        value: "others-laptop",
        category: laptop,
      },
    ];

    // Insert Dummy Data
    try {
      await Colour.insertMany(Colours);
      console.log("Colour inserted Coloures");
    } catch (error) {
      console.error("Error inserting Colour:", error);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch((err) => console.error("Connection error:", err));
