import { type Context } from "elysia"
function authController() {
    return {

        //userController
        async UserSignUp(context: Context) {
            try {
                // const reqBody = context.body;

                console.log("user route reached", context.store);


                context.set.status = 200;
                return { success: false, message: "Route cpmpleted" }
            } catch (error: any) {
                console.log(error);
                context.set.status = 500;
                return { success: false, message: error?.message }
            }
        }
    }
}

export default authController;