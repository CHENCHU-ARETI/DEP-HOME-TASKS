module.exports = app => {
    const users = require('../controllers/user.controller.js');
    let router = require("express").Router();
    router.post("/", users.create);
    router.get('/', users.getAllUsers);
    router.get('/:id', users.getUserById);
    router.get('/:substring/:limit', users.getUsersBySubstring);
    router.put('/:id', users.updateUser);
    router.delete('/:id', users.deleteById);
    app.use('/api/users', router);
};
