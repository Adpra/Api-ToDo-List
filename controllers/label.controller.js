const db = require("../models");
const Label = db.label;


exports.create = (req, res) => {
    const labels = {
        tag: req.body.tag,
    }

    Label.create(labels)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Label."
            });
        })
}

exports.findAll = (req, res) => {
    Label.findAll({ where: { deleted_at: null } })
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

exports.findOne = (req, res) => {
    const id = req.params.id;

    Label.findByPk(id)
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

exports.update = (req, res) => {
    const id = req.params.id;

    Label.update(req.body, { where: { id: id } })
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

exports.delete = (req, res) => {
    const id = req.params.id;

    const deleted = {
        deletedAt: Date.now()
    }

    Label.update(deleted, {
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