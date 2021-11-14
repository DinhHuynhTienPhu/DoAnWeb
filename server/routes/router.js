//all get, set,... routing is here

const express = require("express");
const route = express.Router();
//home route
route.get("/", (req, res) => res.render("index"));
route.all("/about_us", (req, res) => res.render("about_us"));
route.get("/compair", (req, res) => res.render("compair"));
route.get("/footer", (req, res) => res.render("footer")); //just on debug to get footer
route.get("/forget_password", (req, res) => res.render("forget_password"));
route.get("/three-col", (req, res) => res.render("three-col"));
route.get("/header", (req, res) => res.render("header")); //just 4 debug
route.get("/index", (req, res) => res.render("index"));
route.get("/login", (req, res) => res.render("login"));
route.get("/product_details", (req, res) => res.render("product_details"));
route.get("/products", (req, res) => res.render("products"));
route.get("/register", (req, res) => res.render("register"));
route.get("/sidebar", (req, res) => res.render("sidebar"));
route.get("/contact", (req, res) => res.render("contact"));
route.get("/my_account", (req, res) => res.render("my_account"));
route.get("/searching", (req, res) => res.render("searching"));

//Buyer route
route.get("/cart", (req, res) => res.render("./Buyer/cart"));

//Seller route
route.get("/product_list", (req, res) => res.render("./Seller/product_list"));
route.get("/product_edit", (req, res) => res.render("./Seller/product_edit"));
route.get("/product_add", (req, res) => res.render("./Seller/product_add"));
route.get("/product_details_Seller", (req, res) => res.render("./Seller/product_details_Seller"));

//admin route
route.get("/admin_layout",(req, res) => res.render("./Admin/admin-layout"))
route.get("/admin_list", (req, res) =>res.render('./Admin/list', { title: 'List', layout: './Admin/admin-layout' }));
route.get("/admin_user_details", (req, res) => res.render("./Admin/user-details", { title: 'user details', layout: './Admin/admin-layout' }));
route.get("/admin_product_details", (req, res) => res.render("./Admin/product-details", { title: 'product details', layout: './Admin/admin-layout' }));
route.get("/admin_product_list", (req, res) => res.render("./Admin/product-list", { title: 'product list', layout: './Admin/admin-layout' }));

module.exports = route;
