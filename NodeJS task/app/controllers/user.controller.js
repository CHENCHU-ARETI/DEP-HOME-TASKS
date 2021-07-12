const db = require('../models');
const User = db.users;
const Op = db.Sequelize.Op;

exports.defaultData = async () => {
    //const temp = { "id": "1", "login": "John Dea", "password": "JohnDea12@", "age": 23 };
    //const temp1 = { "id": "2", "login": "Riya Meera", "password": "Riya1234@", "age": 23 };
    const abc = [{ "id": "1", "login": "John Dea", "password": "JohnDea12@", "age": 23 },
    { "id": "2", "login": "Riya Meera", "password": "Riya1234@", "age": 22 },
    { "id": "3", "login": "Reehana", "password": "Reehana12@", "age": 25 },
    { "id": "4", "login": "Meherene", "password": "ABCd1234@", "age": 23 },
    { "id": "5", "login": "D.Yamnini", "password": "Yamu1234@", "age": 25 }]
    //await User.create(temp);
    //await User.create(temp1);
    for (let i = 0; i < abc.length; i++) {
        await User.create(abc[i]).then("DONE");
    }
}
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a User
    const user = {
        id: req.body.id,
        login: req.body.login,
        password: req.body.password,
        age: req.body.age,
        isDeleted: req.body.isDeleted
    };

    // Save User in the database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};

exports.getAllUsers = async (req, res) => {
    // const userList = { id: "1", login: "John Dea", password: "JohnDea12@", age: 23 };
    //User.create(userList).then(console.log("DONE"));
    // const temp = { "id": "1", "login": "John Dea", "password": "JohnDea12@", "age": 23 };
    // const temp1 = { "id": "2", "login": "Riya Meera", "password": "Riya1234@", "age": 23 };
    // await User.create(temp).then(console.log("asdfghjk"));
    // await User.create(temp1);
    User.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving users."
        });
    });
};

exports.getUserById = async (req, res) => {
    const id = req.params.id;
    // User.findByPk(id).then(data => {
    //     res.send(data);
    // }).catch(err => {
    //     res.status(500).send({
    //         message:
    //             "Error retrieving Tutorial with id=" + id
    //     });
    // })
    let userData = await User.findByPk(id);
    //console.log(userData);
    if (userData == null) {
        res.status(404).json({ message: `User with id ${req.params.id} not found` });
    } else {
        res.json(userData);
    }
};

exports.updateUser = (req, res) => {
    const id = req.params.id;
    User.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "User was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating User with id=" + id
        });
    });
};

exports.deleteById = (req, res) => {
    const id = req.params.id;
    User.update({ isDeleted: true }, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "User was soft deleted successfully."
            });
        } else {
            res.send({
                message: `Cannot delete User with id=${id} as User with corresponding id not found.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error deleting User with id=" + id
        });
    });
};

exports.getUsersBySubstring = async (req, res) => {
    // var sample_fruit_string = req.params.substring;
    let userData = await User.findAll({
        order: [
            ['login', 'ASC']
        ],
        limit: req.params.limit,
        where: {
            login: {
                [Op.substring]: req.params.substring // LIKE '%sample_fruit_string%'
            }
        }
        // }).then(data =>{
        //     res.send(data);
        // }).catch(err =>{
        //     res.status(500).send({
        //         message: "cannot find logins which match" + sample_fruit_string
        //     });
    });
    if (userData.length == 0) {
        res.status(500).send({
            message: "cannot find logins which match:  " + req.params.substring
        });
    } else {
        res.send(userData);
    }
    //console.log(userData.length);
}