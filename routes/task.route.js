module.exports = app => {
    const tasks = require("../controllers/task.controller");

    let router = require("express").Router();

    router.get("/", tasks.findAll)

    app.use("/api/tasks", router);
}