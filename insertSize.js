const mongoose = require("mongoose");
const { Size } = require("./model/Size"); // Adjust the path as necessary

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
    const Sizes = [
      {
        label: "13.3 Inch",
        value: "13.3-laptop",
        category: laptop,
      },
      {
        label: "14 Inch",
        value: "14-laptop",
        category: laptop,
      },
      {
        label: "15.6 Inch",
        value: "15.6-laptop",
        category: laptop,
      },
      {
        label: "16 Inch",
        value: "16-laptop",
        category: laptop,
      },
      {
        label: "18 Inch",
        value: "18-laptop",
        category: laptop,
      },
    ];

    // Insert Dummy Data
    try {
      await Size.insertMany(Sizes);
      console.log("Sizes inserted Sizes");
    } catch (error) {
      console.error("Error inserting Sizes:", error);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch((err) => console.error("Connection error:", err));
