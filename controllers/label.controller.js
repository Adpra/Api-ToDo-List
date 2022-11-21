const db = require("../models");
const Label = db.label;


exports.create = async (req, res) => {
    const labels = {
        tag: req.body.tag,
    }

    await Label.create(labels)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Label."
            });
        })
}

exports.findAll = async (req, res) => {
    await Label.findAll({
        order: [
            ['id', 'DESC'],
        ],
        where:
            { deleted_at: null }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Label."
            });
        })
}

exports.findOne = async (req, res) => {
    const id = req.params.id;

    await Label.findOne({
        where: { id: id, deleted_at: null },
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Label with id=" + id
            });
        })
}

exports.update = async (req, res) => {
    const id = req.params.id;

    await Label.update(req.body, { where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Label was updated successfully."

                });
            } else {
                res.send({
                    message: `Cannot update Label with id=${id}. Maybe Label 
   was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error Updateing Label with id=" + id
            });
        })
}

exports.delete = async (req, res) => {
    const id = req.params.id;

    const deleted = {
        deletedAt: Date.now()
    }

    await Label.update(deleted, {
        where: {
            id: id
        }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Label delete was succsessfully"
                });
            } else {
                res.send({
                    message: `Cannot delete Label with id=${id}. Maybe Label was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Label."
            })
        })
}