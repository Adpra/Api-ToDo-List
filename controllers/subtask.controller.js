const db = require("../models");
const Subtask = db.subtask;


exports.create = (req, res) => {
    const subtasks = {
        title: req.body.title,
        description: req.body.description,
        due_date: req.body.due_date,
        priority_id: req.body.priority_id,
        label_id: req.body.label_id,
        parent_id: req.body.parent_id,
        task_id: req.body.task_id,
    }

    Subtask.create(subtasks)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Subtask."
            });
        })
};

exports.findAll = (req, res) => {

    Subtask.findAll({ where: { deleted_at: null } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Subtask."
            });
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id;

    Subtask.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Subtask with id=" + id
            });
        })
}

exports.update = (req, res) => {
    const id = req.params.id;

    Subtask.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Subtask was updated successfully."

                });
            } else {
                res.send({
                    message: `Cannot update Subtask with id=${id}. Maybe Subtask 
               was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error Updateing Subtask with id=" + id
            });
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    const deleted = {
        deletedAt: Date.now()
    }


    Subtask.update(deleted, { where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Subtask delete was succsessfully"
                });
            } else {
                res.send({
                    message: `Cannot delete Subtask with id=${id}. Maybe Subtask was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Subtask."
            })
        })
}