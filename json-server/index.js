(async () => {
  require("dotenv").config();

  const jsonServer = require("json-server");
  const server = jsonServer.create();
  const path = require("path");

  const router = jsonServer.router(path.join(__dirname, "db.json"));
  const middlewares = jsonServer.defaults();

  server.use(middlewares);

  server.use(
    jsonServer.rewriter({
      "/league/list": "/leagues",
      "/article/list": "/articles",
      "/scores*": "/club",
    })
  );

  server.get("/match/:week/:leagueId", async (req, res) => {
    const { week, leagueId } = req.params;

    if (week.toLowerCase() == "last" || week.toLowerCase() == "current") {
      return res.jsonp({});
    }

    res.status(404).jsonp({
      error: "",
    });
  });

  server.use(router);

  server.listen(process.env.PORT, () => {
    console.log("JSON Server is running on port: " + process.env.PORT);
  });
})();
