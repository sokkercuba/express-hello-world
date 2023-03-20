const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

router.route("/login").post(async (req, res) => {
  const { login, password } = req?.body || null;

  if (!login || !password)
    return res
      .status(400)
      .send("There are missing auth fields login or password");

  const response = await axios.post("https://sokker.org/api/auth/login", {
    login,
    password,
    remember: true,
  });

  if (response.status === 200) {
    const responseCookies = response.headers["set-cookie"];
    const parsedCookies = responseCookies
      .split(";")
      .map((item) => item.split("="))
      .reduce((acc, [k, v]) => (acc[k.trim().replace('"', "")] = v) && acc, {});

    const item = await axios.post(`/api/v1/auth/${login}`, parsedCookies);
    console.log("🚀 ~ item:", item);
    res.cookie(parsedCookies);
  }

  res.send(response).end();
});

const handleLogOut = async (req, res) => {
  const { login } = req?.params || null;

  const cookies = await db.collection("auth").get(login);
  console.log("🚀 ~ cookies:", cookies);

  const response = await axios.get("https://sokker.org/index/action/start", {
    headers: {
      Cookie: cookies,
    },
  });

  if (response.status === 200) {
    const item = await db.collection("auth").delete(login);
    console.log("🚀 ~ response:", item);
  }

  const data = JSON.stringify({
    data: response.data,
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });

  res.send(data).end();
};
