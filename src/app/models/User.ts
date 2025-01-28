import mongoose, { Document, Schema } from "mongoose";

export enum UserRole {
    SUPER_ADMIN = "SUPER_ADMIN",
    VENDOR_ADMIN = "VENDOR_ADMIN",
    MANAGER = "MANAGER",
    EMPLOYEE = "EMPLOYEE",
    USER = "USER"
}

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phoneNo?: string;
    password: string;
    mfaEnabled: boolean;
    vendor?: mongoose.Types.ObjectId; // Reference to Vendor schema
    mfaSecret?: string;
    role?: string;
}

const userSchema: Schema<IUser> = new Schema(
    {
        firstName: { type: String, trim: true, required: true },
        lastName: { type: String, trim: true, required: true },
        email: { type: String, trim: true, required: true, unique: true },
        phoneNo: { type: String, trim: true, default: "" },
        password: { type: String, required: true, trim: true, select: false },
        mfaEnabled: { type: Boolean, default: false },
        vendor: { type: Schema.Types.ObjectId, ref: "Vendor", required: false, default: null },
        mfaSecret: { type: String, select: false },
        role: {
            type: String,
            enum: Object.values(UserRole),
            default: "USER",
        },
    },
    {
        timestamps: true,
    }
);

// Hash the password before saving
userSchema.pre<IUser>("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await Bun.password.hash(this.password, {
            algorithm: "bcrypt",
            cost: 4,
          });
    }
    next();
});

export const User = mongoose.model<IUser>("User", userSchema);
