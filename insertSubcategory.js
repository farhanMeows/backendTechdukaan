const mongoose = require("mongoose");
const { SubCategory } = require("./model/SubCategory"); // Adjust the path as necessary

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
    const laptop = "67063d7fcb210608eb057f20";
    const printer = "67063d7fcb210608eb057f21";
    const accessories = "67063d7fcb210608eb057f22";
    const pc = "67063d7fcb210608eb057f1f";
    const Monitor = "67125db890bb373a1c9d2562";
    // Dummy Subcategory Data
    const subcategories = [
      {
        label: "DP Port - HDMI",
        value: "dpPortHdmi-accessories",
        category: accessories,
      },
      {
        label: "HDMI - HDMI",
        value: "hdmi-hdmi-accessories",
        category: accessories,
      },
      {
        label: "Type C - Type C",
        value: "typeC-typeC-accessories",
        category: accessories,
      },
      {
        label: "USB - Lightning",
        value: "usb-lightning-accessories",
        category: accessories,
      },
      {
        label: "USB - Printer Cable",
        value: "usb-printer-cable-accessories",
        category: accessories,
      },
      {
        label: "USB - Type C",
        value: "usb-typeC-accessories",
        category: accessories,
      },
      {
        label: "USB - USB",
        value: "usb-usb-accessories",
        category: accessories,
      },
    ];

    // Insert Dummy Data
    try {
      await SubCategory.insertMany(subcategories);
      console.log("Subcategories inserted successfully");
    } catch (error) {
      console.error("Error inserting subcategories:", error);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch((err) => console.error("Connection error:", err));
