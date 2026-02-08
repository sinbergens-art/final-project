function errorHandler(err, req, res, next) {
  console.error("GLOBAL ERROR:", err);

  if (err && err.code === 11000) {
    return res.status(409).json({ error: "duplicate key", details: err.keyValue });
  }

  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  return res.status(status).json({ error: message });
}

module.exports = errorHandler;