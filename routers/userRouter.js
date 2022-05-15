const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const AddressController = require("../controllers/AddressController");

/* User Routers */

router.get("/", UserController.createUserHome);
router.post("/add", UserController.createUserPost);

router.get("/users", UserController.getAllUsers);

router.post("/user/delete", UserController.deleteUser);

router.get("/user/edit/:id", UserController.editUser)
router.post("/user/update", UserController.editUserPost)

/* Address Routers */

router.post("/address/create", AddressController.newAddress);
router.post("/address/delete", AddressController.deleteAddress);

module.exports = router;