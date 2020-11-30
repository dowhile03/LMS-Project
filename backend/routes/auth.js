var express = require("express");
var router = express.Router();
const { check , validationResult } = require("express-validator");
const {signout, signup , signin , isSignedIn} = require("../controllers/auth");
const {Usignout,Usignup,Usignin} = require("../controllers/auth");



router.post("/signup", [
    // check("name" , "name should be at least three chars").isLength({min : 3}),
    // check("email" , "email is required").isEmail(),
    check("password" , "Password Should be atleast 3 chars").isLength({min : 3})
], signup);



router.post("/signin", [
    // check("email" , "email is required").isEmail(),
    // check("name" , "name should be at least three chars").isLength({min : 3}),

    check("password" , "Password Field is required").isLength({min : 1})
], signin);


router.get("/signout", signout);

router.post("/Usignup", [
    check("name" , "name should be at least three chars").isLength({min : 3}),
    
    check("password" , "Password Should be atleast 3 chars").isLength({min : 3})
], Usignup);



router.post("/Usignin", [
    check("name" , "name should be at least three chars").isLength({min : 3}),
    
    check("password" , "Password Should be atleast 3 chars").isLength({min : 3})
], Usignin);


router.get("/Usignout", Usignout);




module.exports = router;
