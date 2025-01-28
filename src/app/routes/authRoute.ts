import { Elysia } from "elysia";
import authController from "../controllers/authController";
import { checkUser } from "../middlewares/authMiddleware";

const authRoute = (app: Elysia) => {
    app.group("/user", app => app
        .get("/a", authController().UserSignUp, {
            beforeHandle: [checkUser]
        }))
}



export default authRoute;