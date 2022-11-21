const db = require("../models");
const Color = db.color;

exports.create = (req, res) => {
    const colors = {
        tag: req.body.tag,
        hex_color: req.body.hex_color
    }

    Color.create(colors)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Colors."
            });
        })
}

exports.findAll = (req, res) => {
    Color.findAll({ where: { deleted_at: null } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Colors."
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id;

    Color.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Colors with id=" + id
            });
        })
}

exports.update = (req, res) => {
    const id = req.params.id;

    Color.update(req.body, {
        where: {
            id: id
        }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Colors was updated successfully."

                });
            } else {
                res.send({
                    message: `Cannot update Colors with id=${id}. Maybe Priority 
   was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error Updateing Colors with id=" + id
            });
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    const deleted = {
        deletedAt: Date.now()
    }

    Color.update(deleted, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Colors delete was succsessfully"
                });
            } else {
                res.send({
                    message: `Cannot delete Colors with id=${id}. Maybe Colors was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Colors."
            })
        })
}