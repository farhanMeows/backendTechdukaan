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
    const laptop = "67063d7fcb210608eb057f20";
    const printer = "67063d7fcb210608eb057f21";
    const accessories = "67063d7fcb210608eb057f22";
    const pc = "67063d7fcb210608eb057f1f";
    // Dummy Subcategory Data
    const subcategories = [
      {
        label: "Pre Built",
        value: "Pre Built",
        category: pc,
      }, // Replace with actual category ID
      {
        label: "Coustom Built",
        value: "Coustom Built",
        category: pc,
      },
      // {
      //   label: "Gaming",
      //   value: "Gaming",
      //   category: laptop,
      // },
      // {
      //   label: "KeyBoard",
      //   value: "KeyBoard",
      //   category: accessories,
      // },
      // {
      //   label: "Mouse",
      //   value: "Mouse",
      //   category: accessories,
      // },
      // {
      //   label: "HeadPhones",
      //   value: "HeadPhones",
      //   category: accessories,
      // },
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
