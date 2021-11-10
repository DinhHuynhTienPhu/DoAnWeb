//all get, set,... routing is here

const express = require("express");
const route = express.Router();

//home route
route.get("/", (req, res) => res.render("index"));
route.all("/about_us", (req, res) => res.render("about_us"));
route.get("/cart", (req, res) => res.render("cart"));
route.get("/compair", (req, res) => res.render("compair"));
route.get("/footer", (req, res) => res.render("footer")); //just on debug to get footer
route.get("/forget_password", (req, res) => res.render("forget_password"));
route.get("/four-col", (req, res) => res.render("four-col"));
route.get("/three-col", (req, res) => res.render("three-col"));
route.get("/grid-view", (req, res) => res.render("grid-view"));
route.get("/general", (req, res) => res.render("general"));
route.get("/header", (req, res) => res.render("header")); //just 4 debug
route.get("/index", (req, res) => res.render("index"));
route.get("/list-view", (req, res) => res.render("list-view"));
route.get("/login", (req, res) => res.render("login"));
route.get("/product_details", (req, res) => res.render("product_details"));
route.get("/products", (req, res) => res.render("products"));
route.get("/register", (req, res) => res.render("register"));
route.get("/sidebar", (req, res) => res.render("sidebar"));
route.get("/contact", (req, res) => res.render("contact"));
route.get("/my_account", (req, res) => res.render("my_account"));
module.exports = route;
