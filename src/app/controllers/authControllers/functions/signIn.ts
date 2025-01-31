import bcrypt from "bcryptjs";
import { createSession } from "../../../middlewares/sessionStore";
import { IUser, User } from "../../../models/User";
export async function signinUser_func(data: Partial<IUser>) {
    try {
        const { email, password } = data;

        // Check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            return { success: false, message: "User does not exist." };
        }

        // Check if password matches
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return { success: false, message: "Incorrect password." };
        }

        // Create a new session
        const session = await createSession(user._id.toString(), {});
        return { success: true, data: session };
    } catch (error: any) {
        return { success: false, message: error.message };
    }
}