module.exports = (app) => {
    const colors = require('../controllers/color.controller');

    let router = require("express").Router();

    router.post("/", colors.create);

    router.get("/", colors.findAll);

    router.get("/:id", colors.findOne);

    router.put("/:id", colors.update);

    router.delete("/:id", colors.delete);

    app.use("/api/colors", router);

}