const User = require("../models/Users");
const Address = require("../models/Address");

module.exports = class UserController {

    /* EDIT */
    static async editUser(req, res) {
        const id = req.params.id;

        const user = await User.findOne({ include: Address, where: { id: id } });

        res.render("pages/edituser", { user: user.get({ plain: true }) });
    };

    static async editUserPost(req, res) {
        const id = req.body.id;

        const query = {
            name: req.body.name,
            old: req.body.old,
        };

        await User.update(query, { where: { id: id } });

        res.redirect(`/edit/${id}`);
    };

    /* DELETE */
    static async deleteUser(req, res) {
        const id = req.body.id;

        try {
            await User.destroy({ where: { id: id } });
            res.redirect("/users");
        } catch (error) {
            console.log(error);
        };
    };

    /* READ ALL */
    static async getAllUsers(req, res) {

        const users = await User.findAll({ raw: true });

        res.render("pages/users", { users });
    };

    /* CREATE */
    static async createUserPost(req, res) {
        const query = {
            name: req.body.name,
            old: req.body.old,
            status: false,
        };

        if (query.name != null || query.old != null) {
            try {
                await User.create(query);
                res.redirect("/");
            } catch (error) {
                console.log(error);
            };
        } else {
            console.log("Campos não preenchidos!");
        };
    };

    static createUserHome(req, res) {
        res.render("pages/home");
    };
};
