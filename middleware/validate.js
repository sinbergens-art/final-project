const emailRegex = /^\S+@\S+\.\S+$/;
const nameRegex = /^[A-Za-zА-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүІі\s'-]+$/;

function normalizeEmail(email) {
  return String(email || "").toLowerCase().trim();
}

function validateRegister(req, res, next) {
  const errors = [];
  const { name, email, password } = req.body;

  const cleanName = String(name || "").trim();
  const cleanEmail = normalizeEmail(email);

  if (!cleanName) errors.push("name is required");
  else {
    if (cleanName.length < 2) errors.push("name must be at least 2 characters");
    if (!nameRegex.test(cleanName)) errors.push("name must contain only letters and spaces");
  }

  if (!cleanEmail) errors.push("email is required");
  else if (!emailRegex.test(cleanEmail)) errors.push("invalid email format");

  if (!password) errors.push("password is required");
  else if (String(password).length < 6) errors.push("password must be at least 6 characters");

  if (errors.length) return res.status(400).json({ errors });

  req.body.name = cleanName;
  req.body.email = cleanEmail;
  next();
}

function validateLogin(req, res, next) {
  const errors = [];
  const { email, password } = req.body;

  const cleanEmail = normalizeEmail(email);

  if (!cleanEmail) errors.push("email is required");
  else if (!emailRegex.test(cleanEmail)) errors.push("invalid email format");

  if (!password) errors.push("password is required");

  if (errors.length) return res.status(400).json({ errors });

  req.body.email = cleanEmail;
  next();
}

function validateProfileUpdate(req, res, next) {
  const errors = [];
  const { name } = req.body;

  const cleanName = String(name || "").trim();

  if (!cleanName) errors.push("name is required");
  else {
    if (cleanName.length < 2) errors.push("name must be at least 2 characters");
    if (!nameRegex.test(cleanName)) errors.push("name must contain only letters and spaces");
  }

  if (errors.length) return res.status(400).json({ errors });

  req.body.name = cleanName;
  next();
}

function validateResource(req, res, next) {
  const errors = [];
  const { title, description, destination, price, days, startDate } = req.body;

  const t = String(title || "").trim();
  const d = String(description || "").trim();
  const dest = String(destination || "").trim();

  if (!t) errors.push("title is required");
  else if (t.length < 3) errors.push("title must be at least 3 characters");

  if (!d) errors.push("description is required");
  else if (d.length < 10) errors.push("description must be at least 10 characters");

  if (!dest) errors.push("destination is required");

  if (price === undefined || price === null || price === "") errors.push("price is required");
  else if (Number(price) < 0) errors.push("price must be >= 0");

  if (days === undefined || days === null || days === "") errors.push("days is required");
  else if (Number(days) < 1) errors.push("days must be >= 1");

  if (!startDate) errors.push("startDate is required");
  else if (isNaN(new Date(startDate).getTime())) errors.push("startDate must be a valid date");

  if (errors.length) return res.status(400).json({ errors });

  req.body.title = t;
  req.body.description = d;
  req.body.destination = dest;
  req.body.price = Number(price);
  req.body.days = Number(days);
  req.body.startDate = new Date(startDate);

  next();
}

module.exports = {
  validateRegister,
  validateLogin,
  validateProfileUpdate,
  validateResource
};