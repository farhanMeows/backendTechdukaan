const mongoose = require("mongoose");
const { Specification } = require("./model/Specification");

// MongoDB connection URI
const mongoURI =
  "mongodb+srv://techdukaan26:8pKp6inAaxL0qxWa@cluster0.l72zy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Category ID to associate with the Specifications
const categoryId = "67063d7fcb210608eb057f20"; // Replace with your actual category ID

// Dummy Specification Data with the specified category ID
const specifications = [
  { label: "4GB Ram", value: "4gb-ram", category: categoryId },
  { label: "8GB Ram", value: "8gb-ram", category: categoryId },
  { label: "16GB Ram", value: "16gb-ram", category: categoryId },
];

// Connect to MongoDB and insert the specifications
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    try {
      // Insert dummy specification data into the database
      await Specification.insertMany(specifications);
      console.log("Specifications inserted successfully");
    } catch (error) {
      console.error("Error inserting Specifications:", error);
    } finally {
      // Close the MongoDB connection
      mongoose.connection.close();
    }
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });
