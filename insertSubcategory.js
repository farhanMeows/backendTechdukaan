const mongoose = require("mongoose");
const { SubCategory } = require("./model/SubCategory"); // Adjust the path as necessary

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

    // Dummy Subcategory Data
    const subcategories = [
      {
        label: "Gaming PC",
        value: "gaming-pc",
        category: "67063d7fcb210608eb057f1f",
      }, // Replace with actual category ID
      {
        label: "Workstation",
        value: "workstation",
        category: "67063d7fcb210608eb057f1f",
      },
      {
        label: "Ultrabook",
        value: "ultrabook",
        category: "67063d7fcb210608eb057f20",
      },
      {
        label: "3D Printer",
        value: "3d-printer",
        category: "67063d7fcb210608eb057f20",
      },
    ];

    // Insert Dummy Data
    try {
      await SubCategory.insertMany(subcategories);
      console.log("Subcategories inserted successfully");
    } catch (error) {
      console.error("Error inserting subcategories:", error);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch((err) => console.error("Connection error:", err));
