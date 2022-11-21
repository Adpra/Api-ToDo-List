const db = require("../models");
const User = db.user;

exports.create = (req, res) => {
    const users = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        confrim_password: req.body.confrim_password
    }

    User.create(users)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        })
}
exports.findAll = (req, res) => {
    User.findAll({ where: { deleted_at: null } })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving User."
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving User with id=" + id
            });
        })
}

exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."

                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe Priority 
was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error Updateing User with id=" + id
            });
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;


    const deleted = {
        deletedAt: Date.now()
    }

    User.update(deleted, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User delete was succsessfully"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving User."
            })
        })
}