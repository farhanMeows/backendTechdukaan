const mongoose = require("mongoose");
const Banner = require("./model/Banner"); // Adjust the path as necessary

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

    // Dummy Banner Data
    const bannerData = {
      image1:
        "https://img.freepik.com/free-vector/electronics-store-sale-banner-template_23-2151173125.jpg?t=st=1729197147~exp=1729200747~hmac=dff9372bd9d22fe1bac3420808b833d15e9e52ee457038900bc8f6be49f9cf9a&w=996",
      image2: "https://i.postimg.cc/JhVWChdX/banner.jpg",
      image3: "https://i.imgur.com/A6RqQPz.jpeg",
    };

    // Insert Banner Data
    try {
      const banner = new Banner(bannerData);
      await banner.save(); // Save the document to the database
      console.log("Banner inserted successfully");
    } catch (error) {
      console.error("Error inserting banner:", error);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch((err) => console.error("Connection error:", err));
