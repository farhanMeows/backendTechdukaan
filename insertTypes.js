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
    // Dummy Subcategory Data
    const types = [
      {
        label: "Ink Tank Printer",
        value: "InkTank-printer",
        category: printer,
      },
      {
        label: "Laser Printer",
        value: "laser-printer",
        category: printer,
      },
      {
        label: "Colour Printer",
        value: "colour-printer",
        category: printer,
      },
      {
        label: "Monochrome Printer",
        value: "monochrome-printer",
        category: printer,
      },
      {
        label: "Photo Printer",
        value: "photo-printer",
        category: printer,
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
