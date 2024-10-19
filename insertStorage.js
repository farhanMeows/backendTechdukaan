const mongoose = require("mongoose");
const { Storage } = require("./model/Storage"); // Make sure this path is correct

// MongoDB connection URI
const mongoURI =
  "mongodb+srv://techdukaan26:8pKp6inAaxL0qxWa@cluster0.l72zy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Use env for security

// Category ID to associate with the Rams
const laptop = "67063d7fcb210608eb057f20";
const accessories = "67063d7fcb210608eb057f22";

// Dummy Ram Data with the specified category ID
const Storages = [
  { label: "Pendrive", value: "pendrive-accessories", category: accessories },
  { label: "Harddrive", value: "harddrive-accessories", category: accessories },
  { label: "SSD", value: "ssd-accessories", category: accessories },
  {
    label: "Memory Card",
    value: "memory-card-accessories",
    category: accessories,
  },
  { label: "EMMC", value: "emmc-accessories", category: accessories },
  { label: "SD Card", value: "sd-card-accessories", category: accessories },
  { label: "Pro Duo", value: "pro-duo-accessories", category: accessories },
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
      const inserted = await Storage.insertMany(Storages);
      console.log("Rams inserted successfully:", inserted);
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
