import * as mongoose from 'mongoose';
export const BetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  game: { type: String, required: true },
  team: { type: String, required: true },
  stake: { type: String, required: true },
  odds: { type: Number, required: true },
  amount: { type: Number, required: true },
  result: { type: String, required: true },
  sport: { type: String, required: true },
});

export interface Bet {
  user: string;
  game: string;
  team: string;
  stake: string;
  odds: Number;
  amount: Number;
  result: string;
  sport: string;
}
