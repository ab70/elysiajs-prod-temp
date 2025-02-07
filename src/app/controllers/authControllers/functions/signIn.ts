import bcrypt from "bcryptjs";
import { createSession } from "../../../middlewares/sessionStore";
import { IUser, User } from "../../../models/User";
import mongoose from "mongoose";
export async function signinUser_func(data: Partial<IUser>) {
    try {

        // Check if user exists
        const user = await User.findOne({ email: data.email });

        if (!user) {
            return { success: false, message: "User does not exist." };
        }

        // Check if password matches
        const isPasswordCorrect = await bcrypt.compare(data.password as string, user.password);

        if (!isPasswordCorrect) {
            return { success: false, message: "Incorrect password." };
        }
        const { password, ...others } = user
        return { success: true, message: "Password matched", data: others };
    } catch (error: any) {
        return { success: false, message: error.message };
    }
}