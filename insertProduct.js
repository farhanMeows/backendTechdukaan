const mongoose = require("mongoose");
const { Product } = require("./model/Product");

const categories = [
  { label: "PC", value: "pc" },
  { label: "Laptop", value: "laptop" },
  { label: "Printers", value: "printers" },
  { label: "Accessories", value: "accessories" },
];

// Dummy data generator
const generateDummyProducts = () => {
  const products = [];
  for (let i = 1; i <= 20; i++) {
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const randomBrand = ["BrandA", "BrandB", "BrandC", "BrandD"][
      Math.floor(Math.random() * 4)
    ];

    const product = {
      title: `Product ${i}`,
      description: `Description for product ${i}`,
      price: Math.floor(Math.random() * (10000 - 100 + 1)) + 100, // Price between 100 and 10000
      discountPercentage: Math.floor(Math.random() * 99) + 1, // Discount between 1 and 99
      rating: Math.random() * 5, // Rating between 0 and 5
      stock: Math.floor(Math.random() * 100), // Stock between 0 and 100
      brand: randomBrand,
      category: randomCategory.value,
      thumbnail: `https://dummyimage.com/200x200/000/fff&text=Product+${i}`,
      images: [
        `https://dummyimage.com/200x200/000/fff&text=Product+${i}-1`,
        `https://dummyimage.com/200x200/000/fff&text=Product+${i}-2`,
      ],
      colors: ["Red", "Blue", "Green"],
      sizes: ["S", "M", "L"],
      highlights: [
        `Highlight 1 for Product ${i}`,
        `Highlight 2 for Product ${i}`,
      ],
      discountPrice: Math.round(Math.random() * 1000 + 50),
      deleted: false,
    };

    products.push(product);
  }
  return products;
};

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

    const dummyProducts = generateDummyProducts();

    try {
      await Product.insertMany(dummyProducts);
      console.log("20 dummy products inserted successfully");
    } catch (error) {
      console.error("Error inserting dummy products:", error);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch((err) => console.error("Connection error:", err));
