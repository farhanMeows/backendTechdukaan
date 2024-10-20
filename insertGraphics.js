const mongoose = require("mongoose");
const { Graphic } = require("./model/Graphic"); // Adjust the path as necessary

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
    const Graphics = [
      {
        label: "INTEL",
        value: "intel-pc",
        category: pc,
      },
      {
        label: "AMD",
        value: "amd-pc",
        category: pc,
      },
      {
        label: "NVIDIA",
        value: "nvidia-pc",
        category: pc,
      },
    ];

    // Insert Dummy Data
    try {
      await Graphic.insertMany(Graphics);
      console.log("Graphic inserted Graphic");
    } catch (error) {
      console.error("Error inserting Graphic:", error);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch((err) => console.error("Connection error:", err));
