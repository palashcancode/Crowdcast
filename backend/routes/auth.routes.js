import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
// import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

// router.get("/me", protectRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// router.post("/signup", (req, res) => {
//   res.json({
//     data: "you hit the signup endpoint",
//   });
// });

// router.post("/login", (req, res) => {
//   res.json({
//     data: "you hit the login endpoint",
//   });
// });

// router.post("/logout", (req, res) => {
//   res.json({
//     data: "you hit the logout endpoint",
//   });
// });

export default router;