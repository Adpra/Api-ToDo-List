const db = require("../models");
const Priority = db.priority;


exports.create = async (req, res) => {
    const priorities = {
        tag: req.body.tag,
        sort_level: req.body.sort_level,
        color_id: req.body.color_id
    }

    await Priority.create(priorities)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Priority."
            });
        })
}

exports.findAll = async (req, res) => {
    await Priority.findAll({
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

exports.findOne = async (req, res) => {
    const id = req.params.id;

    await Priority.findOne({
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

exports.update = async (req, res) => {
    const id = req.params.id;

    await Priority.update(req.body, {
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

exports.delete = async (req, res) => {
    const id = req.params.id;

    const deleted = {
        deletedAt: Date.now()
    }

    await Priority.update(deleted, {
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