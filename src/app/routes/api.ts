import { Elysia } from "elysia";
import authRoute from "./authRoute";

const initialRoutes = (app: Elysia) => {
    authRoute(app)
}

export default initialRoutes