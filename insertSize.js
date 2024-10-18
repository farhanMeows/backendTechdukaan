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
        label: "15 Inch",
        value: "15-monitor",
        category: Monitor,
      },
      {
        label: "18 Inch",
        value: "18-monitor",
        category: Monitor,
      },
      {
        label: "20 Inch",
        value: "20-monitor",
        category: Monitor,
      },
      {
        label: "22 Inch",
        value: "22-monitor",
        category: Monitor,
      },
      {
        label: "24 Inch",
        value: "24-monitor",
        category: Monitor,
      },
      {
        label: "27 Inch",
        value: "27-monitor",
        category: Monitor,
      },
      {
        label: "28 Inch",
        value: "28-monitor",
        category: Monitor,
      },
      {
        label: "15 Inch ",
        value: "32-monitor",
        category: Monitor,
      },
      {
        label: "32 Inch ",
        value: "32-monitor",
        category: Monitor,
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
