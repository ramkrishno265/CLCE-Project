const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all stores
const getAllStores = async (req, res) => {
  try {
    const stores = await prisma.store.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.status(200).json({ success: true, data: stores });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single store by ID
const getStoreById = async (req, res) => {
  try {
    const { id } = req.params;
    const store = await prisma.store.findUnique({
      where: { id },
    });
    if (!store) {
      return res.status(404).json({ success: false, message: "Store paowa jayni" });
    }
    res.status(200).json({ success: true, data: store });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create new store
const createStore = async (req, res) => {
  try {
    const data = req.body;
    const newStore = await prisma.store.create({
      data: {
        name: data.name,
        category: data.category,
        rating: parseFloat(data.rating) || 5.0,
        reviewsCount: parseInt(data.reviewsCount) || 0,
        address: data.address,
        timing: data.timing || "10:00 AM - 08:00 PM",
        phone: data.phone,
        logo: data.logo || "",
        coverImage: data.coverImage || "", // যদি স্কিমাতে অপশনাল বা ডিফল্ট থাকে
        isFeatured: Boolean(data.isFeatured),
        isVerified: Boolean(data.isVerified),
      },
    });
    res.status(201).json({ success: true, message: "Store successfully created", data: newStore });
  } catch (error) {
    console.error("Backend Create Error:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// Update store
const updateStore = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedStore = await prisma.store.update({
      where: { id },
      data: {
        name: data.name,
        category: data.category,
        rating: parseFloat(data.rating),
        reviewsCount: parseInt(data.reviewsCount),
        address: data.address,
        timing: data.timing,
        phone: data.phone,
        logo: data.logo,
        coverImage: data.coverImage,
        isFeatured: Boolean(data.isFeatured),
        isVerified: Boolean(data.isVerified),
      },
    });
    res.status(200).json({ success: true, message: "Store updated successfully", data: updatedStore });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete store
const deleteStore = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.store.delete({
      where: { id },
    });
    res.status(200).json({ success: true, message: "Store deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllStores,
  getStoreById,
  createStore,
  updateStore,
  deleteStore,
};