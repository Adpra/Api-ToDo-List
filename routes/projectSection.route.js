module.exports = (app) => {
    const projectSections = require('../controllers/projectSection.controller');

    let router = require("express").Router();

    router.post("/", projectSections.create);

    router.get("/", projectSections.findAll);

    router.get("/:id", projectSections.findOne);

    router.put("/:id", projectSections.update);

    router.delete("/:id", projectSections.delete);

    app.use("/api/projectsections", router);

}