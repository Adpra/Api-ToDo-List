module.exports = (app) => {
    const priorities = require('../controllers/priority.controller');

    let router = require("express").Router();

    router.post("/", priorities.create);

    router.get("/", priorities.findAll);

    router.get("/:id", priorities.findOne);

    router.put("/:id", priorities.update);

    router.delete("/:id", priorities.delete);

    app.use("/api/priorities", router);

}