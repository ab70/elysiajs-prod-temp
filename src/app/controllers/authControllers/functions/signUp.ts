import { IUser, User } from "../../../models/User";

export async function signupUser_func(data: IUser) {
    try {
        const { firstName, lastName, email, password, phoneNo, role } = data;

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return { success: false, message: "User already exists with this email." };
        }

        // Create a new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password, // Hash password
            phoneNo,
            role,
        });
        const savedUser = await newUser.save();
        await savedUser.save();
        return { success: true, data: savedUser };
    } catch (error: any) {
        return { success: false, message: error.message };
    }
}
