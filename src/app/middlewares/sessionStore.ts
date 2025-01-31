import mongoose from 'mongoose';
import { Session } from '../models/Session';

// Function to create a session
export const createSession = async (user_Id: string, sessionData: object) => {
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // Expires in 24 hours

  const session = await Session.findOneAndUpdate(
    { user_Id },
    { data: sessionData, expiresAt },
    { new: true, upsert: true }
  );
  return session;
};

// Function to retrieve a session
export const getSession = async (user_Id: string) => {
  try{
    const userId = mongoose.Types.ObjectId.createFromHexString(user_Id); 
    const sessionData = await Session.findOne({ user_Id: userId });

    return sessionData;
  }catch(err){
    return null
  }
};

// Function to update a session
export const updateSession = async (user_Id: string, sessionData: object) => {
  return await Session.findOneAndUpdate(
    { user_Id },
    { data: sessionData, expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) }, // Refresh expiry
    { new: true }
  );
};

// Function to destroy a session
export const destroySession = async (user_Id: string) => {
  return Session.deleteOne({ user_Id });
};