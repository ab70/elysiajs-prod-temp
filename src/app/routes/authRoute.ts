import { Elysia, t } from "elysia";
import authController from "../controllers/authControllers/authController";
import { checkUser } from "../middlewares/authMiddleware";

const authRoute = (app: Elysia) => {
    app.group("/user", app => app
        .post("/signup", authController().UserSignUp, {
            beforeHandle: [checkUser],
            body: t.Object({
                firstName: t.String(),
                lastName: t.String(),
                email: t.String(),
                password: t.String(),
                phoneNo: t.String(),
                role: t.String()
            })
        }))
}



export default authRoute;