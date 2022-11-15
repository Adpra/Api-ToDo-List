const db = require("../models");
const ProjectSection = db.projectSection;


exports.create = (req, res) => {
    const projectSections = {
        title: req.body.title,
        project_id: req.project_id
    }

    ProjectSection.create(projectSections)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the ProjectSection."
            });
        })
}

exports.findAll = (req, res) => {

    ProjectSection.findAll({ where: { deleted_at: null } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Projects."
            });
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id;

    ProjectSection.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ProjectSection with id=" + id
            });
        })
}

exports.update = (req, res) => {
    const id = req.params.id;

    ProjectSection.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "ProjectSection was updated successfully."

                });
            } else {
                res.send({
                    message: `Cannot update ProjectSection with id=${id}. Maybe ProjectSection 
       was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error Updateing ProjectSection with id=" + id
            });
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    const deleted = {
        deletedAt: Date.now()
    }

    ProjectSection.update(deleted, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "ProjectSection delete was succsessfully"
                });
            } else {
                res.send({
                    message: `Cannot delete ProjectSection with id=${id}. Maybe ProjectSection was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ProjectSection."
            })
        })
}