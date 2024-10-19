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

// Dummy Ram Data with the specified category ID
const brands = [
  {
    label: "ANT Esports",
    value: "antEsport-accessories",
    category: accessories,
  },
  {
    label: "HP",
    value: "hp-accessories",
    category: accessories,
  },
  {
    label: "ENTER",
    value: "enter-accessories",
    category: accessories,
  },
  {
    label: "Dell",
    value: "dell-accessories",
    category: accessories,
  },
  {
    label: "Lenovo",
    value: "lenovo-accessories",
    category: accessories,
  },
  {
    label: "Logitech",
    value: "logitech-accessories",
    category: accessories,
  },
  {
    label: "Razer",
    value: "razer-accessories",
    category: accessories,
  },
  {
    label: "TVS",
    value: "tvs-accessories",
    category: accessories,
  },
  {
    label: "Zebronic",
    value: "zebronic-accessories",
    category: accessories,
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
