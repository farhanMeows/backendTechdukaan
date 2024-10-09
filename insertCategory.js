const mongoose = require("mongoose");
const { Category } = require("./model/Category");

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

    // Dummy Brand Data
    const catorgy = [
      { label: "PC", value: "PC" },
      { label: "Laptop", value: "Laptop" },
      { label: "Printers", value: "Printers" },
      { label: "Accessories", value: "Accessories" },
    ];

    // Insert Dummy Data
    try {
      await Category.insertMany(catorgy);
      console.log("Category inserted successfully");
    } catch (error) {
      console.error("Error inserting brands:", error);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch((err) => console.error("Connection error:", err));
