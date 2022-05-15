const Address = require("../models/Address");

module.exports = class AddressController {

    static async newAddress(req, res) {
        const UserId = req.body.UserId;

        const query = {
            UserId,
            city: req.body.city,
            counties: req.body.counties,
            street: req.body.street,
            number: req.body.number,
        };

        await Address.create(query);

        res.redirect(`/user/edit/${UserId}`);
    };

    static async deleteAddress(req, res) {
        const UserId = req.body.UserId;
        const id = req.body.id;

        await Address.destroy({ where: { id: id } });

        res.redirect(`/user/edit/${UserId}`);
    };
};