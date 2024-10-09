const mongoose = require("mongoose");
const { Brand } = require("./model/Brand");

// MongoDB connection URI
const mongoURI =
  "mongodb+srv://techdukaan26:8pKp6inAaxL0qxWa@cluster0.l72zy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Category ID to associate with the brands
const categoryId = "67063d7fcb210608eb057f20"; // Replace with your actual category ID

// Dummy Brand Data with the specified category ID
const brands = [
  { label: "Apple", value: "apple", category: categoryId },
  { label: "Samsung", value: "samsung", category: categoryId },
  { label: "Sony", value: "sony", category: categoryId },
  { label: "Google", value: "google", category: categoryId },
  { label: "Microsoft", value: "microsoft", category: categoryId },
];

// Connect to MongoDB and insert the brands
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    try {
      // Insert dummy brand data into the database
      await Brand.insertMany(brands);
      console.log("Brands inserted successfully");
    } catch (error) {
      console.error("Error inserting brands:", error);
    } finally {
      // Close the MongoDB connection
      mongoose.connection.close();
    }
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });
