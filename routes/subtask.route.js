module.exports = (app) => {
    const subtasks = require('../controllers/subtask.controller');

    let router = require("express").Router();

    router.post("/", subtasks.create);

    router.get("/", subtasks.findAll);

    router.get("/:id", subtasks.findOne);

    router.put("/:id", subtasks.update);

    router.delete("/:id", subtasks.delete);

    app.use("/api/subtasks", router);

}