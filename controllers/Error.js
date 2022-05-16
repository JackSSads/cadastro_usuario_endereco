module.exports = class Error {
    static errorNotFound (req, res) {
        res.render("pages/404");
    };
};