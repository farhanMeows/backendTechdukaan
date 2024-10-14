const mongoose = require("mongoose");
const { Ram } = require("./model/Ram"); // Make sure this path is correct

// MongoDB connection URI
const mongoURI =
  "mongodb+srv://techdukaan26:8pKp6inAaxL0qxWa@cluster0.l72zy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Use env for security

// Category ID to associate with the Rams
const categoryId = "67063d7fcb210608eb057f1f"; // Make sure this is correct

// Dummy Ram Data with the specified category ID
const ram = [
  { label: "4GB Ram", value: "4-gb", category: categoryId },
  { label: "8GB Ram", value: "8-gb", category: categoryId },
  { label: "16GB Ram", value: "16-gb", category: categoryId },
  { label: "32GB Ram", value: "32-gb", category: categoryId },
  { label: "64GB Ram", value: "64-gb", category: categoryId },
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
      const insertedRams = await Ram.insertMany(ram);
      console.log("Rams inserted successfully:", insertedRams);
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
