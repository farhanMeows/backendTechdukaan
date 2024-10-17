const Banner = require("../model/Banner");

// Create or update the banner with 3 image URLs
exports.createOrUpdateBanner = async (req, res) => {
  const { image1, image2, image3 } = req.body;

  try {
    // Check if a banner already exists
    let banner = await Banner.findOne();

    if (banner) {
      // If it exists, update it
      banner.image1 = image1;
      banner.image2 = image2;
      banner.image3 = image3;

      // Log before saving
      console.log("Updating existing banner:", banner);

      const updatedBanner = await banner.save();
      return res.status(200).json(updatedBanner);
    } else {
      // If it does not exist, create a new one
      banner = new Banner({ image1, image2, image3 });

      // Log before saving
      console.log("Creating new banner:", banner);

      const newBanner = await banner.save();
      return res.status(201).json(newBanner);
    }
  } catch (error) {
    console.error("Error creating/updating banner:", error); // Log the error
    res.status(500).json({ message: "Server error", error });
  }
};

// Get the banner
exports.getBanner = async (req, res) => {
  try {
    const banner = await Banner.findOne();
    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }
    res.status(200).json(banner);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
