const mongoose = require("mongoose");
const { Processor } = require("./model/Processor"); // Correctly reference the Processor model

// MongoDB connection URI
const mongoURI =
  "mongodb+srv://techdukaan26:8pKp6inAaxL0qxWa@cluster0.l72zy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Category ID to associate with the Processors
const categoryId = "67063d7fcb210608eb057f1f"; // Replace with your actual category ID

// Dummy Processor Data with the specified category ID
const processors = [
  { label: "Intel Core i3", value: "core-i3", category: categoryId },
  { label: "Intel Core i5", value: "core-i5", category: categoryId },
  { label: "Intel Core i7", value: "core-i7", category: categoryId },
  { label: "Intel Core i9", value: "core-i9", category: categoryId },
  { label: "AMD Ryzen 3", value: "ryzen-3", category: categoryId },
  { label: "AMD Ryzen 5", value: "ryzen-5", category: categoryId },
  { label: "AMD Ryzen 7", value: "ryzen-7", category: categoryId },
  { label: "AMD Ryzen 9", value: "ryzen-9", category: categoryId },
  { label: "Apple M1", value: "apple-m1", category: categoryId },
  { label: "Apple M2", value: "apple-m2", category: categoryId },
];

// Connect to MongoDB and insert the Processors
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    try {
      // Insert dummy Processor data into the database
      await Processor.insertMany(processors);
      console.log("Processors inserted successfully");
    } catch (error) {
      console.error("Error inserting processors:", error);
    } finally {
      // Close the MongoDB connection
      mongoose.connection.close();
    }
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });
