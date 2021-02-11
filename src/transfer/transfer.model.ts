import * as mongoose from 'mongoose';
export const TransferSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  balance: { type: String, required: true },
  amount: { type: String, required: true },
  pay: { type: String, required: true },
});

export interface Transfer {
  user: string;
  balance: string;
  amout: string;
  pay: string;
}
