const mongoose = require("mongoose");
const { Brand } = require("./model/Brand"); // Make sure this path is correct

// MongoDB connection URI
const mongoURI =
  "mongodb+srv://techdukaan26:8pKp6inAaxL0qxWa@cluster0.l72zy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Use env for security

// Category ID to associate with the Rams
const categoryId = "67063d7fcb210608eb057f21"; // Make sure this is correct

// Dummy Ram Data with the specified category ID
const brands = [
  { label: "Canon", value: "Canon", category: categoryId },
  { label: "Epson", value: "Epson", category: categoryId },
  //   { label: "16GB Ram", value: "16-gb", category: categoryId },
  //   { label: "32GB Ram", value: "32-gb", category: categoryId },
  //   { label: "64GB Ram", value: "64-gb", category: categoryId },
];

// Connect to MongoDB and insert the Rams
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    try {
      // Insert dummy Ram data into the database
      const insertedBrands = await Brand.insertMany(brands);
      console.log("Brands inserted successfully:", insertedBrands);
    } catch (error) {
      console.error("Error inserting rams:", error.message);
    } finally {
      // Close the MongoDB connection
      mongoose.connection.close();
    }
  })
  .catch((err) => {
    console.error("Connection error:", err.message);
  });
