// const mongoose = require("mongoose");
// const { Inkandcartridges } = require("./model/inkandcartridges"); // Adjust the path as necessary

// mongoose
//   .connect(
//     "mongodb+srv://techdukaan26:8pKp6inAaxL0qxWa@cluster0.l72zy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(async () => {
//     console.log("Connected to MongoDB");
//     const laptop = "67063d7fcb210608eb057f20";
//     const printer = "67063d7fcb210608eb057f21";
//     const accessories = "67063d7fcb210608eb057f22";
//     const pc = "67063d7fcb210608eb057f1f";
//     const Monitor = "67125db890bb373a1c9d2562";
//     // Dummy Subcategory Data
//     const Inkandcartridgesss = [
//       {
//         label: "PRODOT 12A",
//         value: "prodot12a-printer",
//         category: printer,
//       },
//       {
//         label: "PRODOT 88A",
//         value: "PRODOT88a-printer",
//         category: printer,
//       },
//     ];

//     // Insert Dummy Data
//     try {
//       await Inkandcartridges.insertMany(Inkandcartridgesss);
//       console.log("types inserted types");
//     } catch (error) {
//       console.error("Error inserting types:", error);
//     } finally {
//       mongoose.connection.close();
//     }
//   })
//   .catch((err) => console.error("Connection error:", err));

const mongoose = require("mongoose");
const { Inkandcartridges } = require("./model/inkandcartridges"); // Adjust the path as necessary

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
    const printer = "67063d7fcb210608eb057f21"; // Printer category ObjectId

    // Dummy Ink and Cartridge Data
    const Inkandcartridgesss = [
      //   {
      //     label: "PRODOT 12A",
      //     value: "prodot12a-printer",
      //     category: printer,
      //   },
      //   {
      //     label: "PRODOT 88A",
      //     value: "prodot88a-printer",
      //     category: printer,
      //   },
      {
        label: "PRODOT 110A",
        value: "prodot110a-printer",
        category: printer,
      },
      {
        label: "PRODOT 912/925",
        value: "prodot912-925-printer",
        category: printer,
      },
      {
        label: "EPSON 003",
        value: "epson003-printer",
        category: printer,
      },
      {
        label: "EPSON 008",
        value: "epson008-printer",
        category: printer,
      },
      {
        label: "EPSON 001",
        value: "epson001-printer",
        category: printer,
      },
      {
        label: "EPSON 664",
        value: "epson664-printer",
        category: printer,
      },
      {
        label: "EPSON 774",
        value: "epson774-printer",
        category: printer,
      },
      {
        label: "EPSON 673",
        value: "epson673-printer",
        category: printer,
      },
      {
        label: "CANON 70",
        value: "canon70-printer",
        category: printer,
      },
      {
        label: "CANON 71",
        value: "canon71-printer",
        category: printer,
      },
      {
        label: "CANON 790",
        value: "canon790-printer",
        category: printer,
      },
      {
        label: "HP GT53XL (ONLY BLACK)",
        value: "hpgt53xl-black-printer",
        category: printer,
      },
      {
        label: "HP GT52",
        value: "hpgt52-printer",
        category: printer,
      },
    ];

    // Insert Dummy Data
    try {
      await Inkandcartridges.insertMany(Inkandcartridgesss);
      console.log("Ink and cartridges data inserted successfully");
    } catch (error) {
      console.error("Error inserting data:", error);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch((err) => console.error("Connection error:", err));
