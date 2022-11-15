const db = require("../models");
const Project = db.project;

exports.create = (req, res) => {
    const projects = {
        name: req.body.name,
        color_id: req.body.color_id
    }

    Project.create(projects)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Project."
            });
        })
}

exports.findAll = (req, res) => {
    Project.findAll({ where: { deleted_at: null } })
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

    Project.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Project with id=" + id
            });
        })
}

exports.update = (req, res) => {
    const id = req.params.id;

    Project.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Project was updated successfully."

                });
            } else {
                res.send({
                    message: `Cannot update Project with id=${id}. Maybe Project 
           was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error Updateing Project with id=" + id
            });
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    const deleted = {
        deletedAt: Date.now()
    }

    Project.update(deleted, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Project delete was succsessfully"
                });
            } else {
                res.send({
                    message: `Cannot delete Project with id=${id}. Maybe Project was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Project."
            })
        })
}