import { type Context } from "elysia"
import { signupUser_func } from "./functions/signUp";
import { IUser } from "../../models/User";
function authController() {
    return {

        //userController
        async UserSignUp(context: Context) {
            try {
                const reqBody = context.body as IUser;

                console.log("user route reached", context.store);
                const result = await signupUser_func(reqBody);

                if (result.success) {
                    context.set.status = 200;
                    return { success: true, message: "Route cpmpleted", data: result.data };
                }

                context.set.status = 200;
                return { success: false, message: "Route cpmpleted" }
            } catch (error: any) {
                console.log(error);
                context.set.status = 500;
                return { success: false, message: error?.message }
            }
        },
        // signin
        async UserSignIn(context: Context) {
            try {
                const reqBody = context.body as Partial<IUser>;
                console.log("user route reached", context.store);
                const result = await signupUser_func(reqBody);

                if (result.success) {
                    context.set.status = 200;
                    return { success: true, message: "Route cpmpleted", data: result.data };
                }

                context.set.status = 200;
                return { success: false, message: "Route cpmpleted" }
            } catch (error: any) {
                console.log(error);
                context.set.status = 500;
                return { success: false, message: error?.message }
            }
        },
    }
}

export default authController;