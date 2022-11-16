module.exports = (app) => {
    const labels = require('../controllers/label.controller');

    let router = require("express").Router();

    router.post("/", labels.create);

    router.get("/", labels.findAll);

    router.get("/:id", labels.findOne);

    router.put("/:id", labels.update);

    router.delete("/:id", labels.delete);

    app.use("/api/categories", router);

}