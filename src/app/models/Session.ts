import mongoose, { Schema, Document } from 'mongoose';

interface SessionData {
    [key: string]: any; // Flexible data object
}

interface SessionDocument extends Document {
    user_Id: mongoose.Schema.Types.ObjectId;
    data: SessionData;
    expiresAt: Date;
}

const sessionSchema = new Schema<SessionDocument>({
    user_Id: { type: mongoose.Schema.Types.ObjectId, required: false },
    data: { type: Schema.Types.Mixed, default: {} },
    expiresAt: { type: Date, expires: "12h", default: Date.now },
}, { versionKey: false, timestamps: true });

sessionSchema.index({ user_Id: 1 }, { unique: true });


export const Session = mongoose.model<SessionDocument>('Session', sessionSchema);
