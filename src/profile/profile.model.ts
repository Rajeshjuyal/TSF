import * as mongoose from 'mongoose';
export const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  balance: { type: String, required: true },
  winnings: { type: String, required: true },
  credit: { type: String, required: true },
});
export interface Profile {
  user: string;
  balance: string;
  winnings: string;
  credit: string;
}
