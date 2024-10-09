const mongoose = require("mongoose");
const { Product } = require("./model/Product");

// Connect to your MongoDB database
mongoose
  .connect(
    "mongodb+srv://techdukaan26:8pKp6inAaxL0qxWa@cluster0.l72zy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Function to add dummy products
const addDummyProducts = async () => {
  const products = [
    {
      title: "Gaming PC Alpha",
      description:
        "High-end gaming PC with powerful GPU and CPU for ultra settings.",
      price: 1500,
      discountPercentage: 10,
      rating: 4.8,
      stock: 50,
      brand: "AlphaTech",
      category: "pc",
      subCategory: "gaming",
      thumbnail: "https://example.com/images/gaming-pc-alpha-thumbnail.jpg",
      images: [
        "https://example.com/images/gaming-pc-alpha-1.jpg",
        "https://example.com/images/gaming-pc-alpha-2.jpg",
      ],
      colors: ["Black", "Red"],
      sizes: ["Large"],
      highlights: ["RTX 3080", "Intel i9", "32GB RAM"],
      discountPrice: 1350,
    },
    {
      title: "Workstation PC Beta",
      description:
        "Professional workstation PC for heavy design and rendering tasks.",
      price: 2000,
      discountPercentage: 5,
      rating: 4.5,
      stock: 30,
      brand: "BetaWorks",
      category: "pc",
      subCategory: "workstation",
      thumbnail: "https://example.com/images/workstation-pc-beta-thumbnail.jpg",
      images: [
        "https://example.com/images/workstation-pc-beta-1.jpg",
        "https://example.com/images/workstation-pc-beta-2.jpg",
      ],
      colors: ["Gray", "Silver"],
      sizes: ["Medium"],
      highlights: ["Quadro RTX", "AMD Threadripper", "64GB RAM"],
      discountPrice: 1900,
    },
    {
      title: "Gaming Laptop Omega",
      description:
        "Portable gaming powerhouse with stunning display and fast performance.",
      price: 1800,
      discountPercentage: 7,
      rating: 4.7,
      stock: 40,
      brand: "OmegaGear",
      category: "pc",
      subCategory: "gaming",
      thumbnail: "https://example.com/images/gaming-laptop-omega-thumbnail.jpg",
      images: [
        "https://example.com/images/gaming-laptop-omega-1.jpg",
        "https://example.com/images/gaming-laptop-omega-2.jpg",
      ],
      colors: ["Black", "Blue"],
      sizes: ["15.6 inch"],
      highlights: ["RTX 3070", "Intel i7", "16GB RAM"],
      discountPrice: 1674,
    },
  ];

  try {
    const result = await Product.insertMany(products);
    console.log(`${result.length} products have been added successfully`);
  } catch (err) {
    console.log("Error adding products:", err);
  } finally {
    mongoose.connection.close();
  }
};

// Run the function
addDummyProducts();
