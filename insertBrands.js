const mongoose = require("mongoose");
const { Brand } = require("./model/Brand");

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
    const brands = [
      { label: "Apple", value: "apple" },
      { label: "Samsung", value: "samsung" },
      { label: "Sony", value: "sony" },
      { label: "Google", value: "google" },
      { label: "Microsoft", value: "microsoft" },
    ];

    // Insert Dummy Data
    try {
      await Brand.insertMany(brands);
      console.log("brands inserted successfully");
    } catch (error) {
      console.error("Error inserting brands:", error);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch((err) => console.error("Connection error:", err));
