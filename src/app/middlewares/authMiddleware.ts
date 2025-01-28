import { type Context } from "elysia"

export const checkUser = (context: Context) => {
    // set.user = { L: "hello" }
    console.log("its in  checkUser");
    const a = "ab"
    console.log(a);
    if (a === "ab") {
        console.log("executed");
        context.store = {
            user: {
                name: "ab"
            }
        }
        return;
    }
    console.log("I was not wven executed like next()");
    

}