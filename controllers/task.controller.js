const db = require("../models");
const Task = db.task;
// const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {

    const tasks = {
        title: req.body.title,
        description: req.body.description,
        due_date: req.body.due_date,
        user_id: req.body.user_id,
        priority_id: req.body.priority_id,
        label_id: req.body.label_id,
        project_id: req.body.project_id,
        project_section_id: req.body.project_section_id,

    }

    Task.create(tasks)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Task."
            });
        })

};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Task.findAll({ where: { deleted_at: null } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tasks."
            });
        });
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Task.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving task with id=" + id
            });
        })
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Task.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Task was updated successfully."

                });
            } else {
                res.send({
                    message: `Cannot update Task with id=${id}. Maybe Task 
                   was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error Updateing task with id=" + id
            })
        })

};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    const deleted = {
        deletedAt: Date.now()
    }

    Task.update(deleted, { where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Task delete was succsessfully"
                });
            } else {
                res.send({
                    message: `Cannot delete Task with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving task."
            })
        })
};

