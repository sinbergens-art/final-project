const out = document.getElementById("out");

function setOutput(obj) {
  out.textContent = JSON.stringify(obj, null, 2);
}

function getToken() {
  return localStorage.getItem("token");
}

function setToken(token) {
  if (!token) localStorage.removeItem("token");
  else localStorage.setItem("token", token);
}

async function api(path, { method = "GET", body } = {}) {
  const headers = { "Content-Type": "application/json" };
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`/api${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });

  let data = null;
  try { data = await res.json(); } catch { data = null; }

  return { status: res.status, ok: res.ok, data };
}

document.getElementById("btnRegister").onclick = async () => {
  const body = {
    name: document.getElementById("r_name").value,
    email: document.getElementById("r_email").value,
    password: document.getElementById("r_password").value
  };
  const r = await api("/auth/register", { method: "POST", body });
  if (r.ok && r.data && r.data.token) setToken(r.data.token);
  setOutput(r);
};

document.getElementById("btnLogin").onclick = async () => {
  const body = {
    email: document.getElementById("l_email").value,
    password: document.getElementById("l_password").value
  };
  const r = await api("/auth/login", { method: "POST", body });
  if (r.ok && r.data && r.data.token) setToken(r.data.token);
  setOutput(r);
};

document.getElementById("btnProfile").onclick = async () => {
  const r = await api("/users/profile");
  setOutput(r);
};

document.getElementById("btnUpdateProfile").onclick = async () => {
  const body = { name: document.getElementById("u_name").value };
  const r = await api("/users/profile", { method: "PUT", body });
  setOutput(r);
};

document.getElementById("btnLogout").onclick = async () => {
  setToken(null);
  setOutput({ status: 200, ok: true, data: { message: "logged out (token removed)" } });
};

document.getElementById("btnCreatePkg").onclick = async () => {
  const body = {
    title: document.getElementById("p_title").value,
    destination: document.getElementById("p_destination").value,
    description: document.getElementById("p_desc").value,
    price: document.getElementById("p_price").value,
    days: document.getElementById("p_days").value,
    startDate: document.getElementById("p_start").value
  };
  const r = await api("/resource", { method: "POST", body });
  setOutput(r);
};

document.getElementById("btnListPkgs").onclick = async () => {
  const r = await api("/resource");
  setOutput(r);
};