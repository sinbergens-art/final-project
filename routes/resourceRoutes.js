const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource
} = require("../controllers/resourceController");
const { validateResource } = require("../middleware/validate");

const router = express.Router();

router.post("/", authMiddleware, validateResource, createResource);
router.get("/", authMiddleware, getAllResources);
router.get("/:id", authMiddleware, getResourceById);
router.put("/:id", authMiddleware, validateResource, updateResource);
router.delete("/:id", authMiddleware, deleteResource);

module.exports = router;
