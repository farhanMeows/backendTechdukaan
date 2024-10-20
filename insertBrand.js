const mongoose = require("mongoose");
const { Brand } = require("./model/Brand"); // Make sure this path is correct

// MongoDB connection URI
const mongoURI =
  "mongodb+srv://techdukaan26:8pKp6inAaxL0qxWa@cluster0.l72zy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Use env for security

// Category ID to associate with the Rams
const categoryId = "67063d7fcb210608eb057f21"; // Make sure this is correct
const printer = "67063d7fcb210608eb057f21";
const Monitor = "67125db890bb373a1c9d2562";
const laptop = "67063d7fcb210608eb057f20";
const accessories = "67063d7fcb210608eb057f22";
const pc = "67063d7fcb210608eb057f1f";
const keyboardMouse = "67154bdb93d3c8f7e95d45c4";
// Dummy Ram Data with the specified category ID
const brands = [
  {
    label: "Acer",
    value: "acer-pc",
    category: pc,
  },
  {
    label: "Apple",
    value: "apple-pc",
    category: pc,
  },
  {
    label: "Asus",
    value: "asus-pc",
    category: pc,
  },
  {
    label: "Dell",
    value: "dell-pc",
    category: pc,
  },
  {
    label: "HP",
    value: "hp-pc",
    category: pc,
  },
  {
    label: "Foxin",
    value: "foxin-pc",
    category: pc,
  },
  {
    label: "Lenovo",
    value: "lenovo-pc",
    category: pc,
  },
  {
    label: "MSI",
    value: "msi-pc",
    category: pc,
  },
  {
    label: "Zebronic",
    value: "zebronic-pc",
    category: pc,
  },
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
