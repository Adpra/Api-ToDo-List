const db = require("../models");
const Priority = db.priority;


exports.create = (req, res) => {
    const priorities = {
        tag: req.body.tag,
        sort_level: req.body.sort_level,
        color_id: req.body.color_id
    }

    Priority.create(priorities)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Priority."
            });
        })
}

exports.findAll = (req, res) => {
    Priority.findAll({
        order: [
            ['id', 'DESC'],
        ],
        where: {
            deleted_at: null
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Priority."
            });
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id;

    Priority.findOne({
        where: { id: id, deleted_at: null },
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Prioruty with id=" + id
            });
        })
}

exports.update = (req, res) => {
    const id = req.params.id;

    Priority.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Priority was updated successfully."

                });
            } else {
                res.send({
                    message: `Cannot update Priority with id=${id}. Maybe Priority 
       was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error Updateing Priority with id=" + id
            });
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    const deleted = {
        deletedAt: Date.now()
    }

    Priority.update(deleted, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Priority delete was succsessfully"
                });
            } else {
                res.send({
                    message: `Cannot delete Priority with id=${id}. Maybe Priority was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Priority."
            })
        })
}