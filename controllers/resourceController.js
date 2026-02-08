const Resource = require("../models/Resource");

async function createResource(req, res, next) {
  try {
    const resource = await Resource.create({ ...req.body, owner: req.userId });
    return res.status(201).json({ message: "resource created", resource });
  } catch (err) {
    next(err);
  }
}

async function getAllResources(req, res, next) {
  try {
    const resources = await Resource.find({ owner: req.userId }).sort({ createdAt: -1 });
    return res.status(200).json({ resources });
  } catch (err) {
    next(err);
  }
}

async function getResourceById(req, res, next) {
  try {
    const resource = await Resource.findOne({ _id: req.params.id, owner: req.userId });
    if (!resource) return res.status(404).json({ error: "resource not found" });
    return res.status(200).json({ resource });
  } catch (err) {
    next(err);
  }
}

async function updateResource(req, res, next) {
  try {
    const resource = await Resource.findOneAndUpdate(
      { _id: req.params.id, owner: req.userId },
      { ...req.body },
      { new: true, runValidators: true }
    );

    if (!resource) return res.status(404).json({ error: "resource not found" });

    return res.status(200).json({ message: "resource updated", resource });
  } catch (err) {
    next(err);
  }
}

async function deleteResource(req, res, next) {
  try {
    const resource = await Resource.findOneAndDelete({ _id: req.params.id, owner: req.userId });
    if (!resource) return res.status(404).json({ error: "resource not found" });
    return res.status(200).json({ message: "resource deleted" });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource
};