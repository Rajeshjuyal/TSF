import * as mongoose from 'mongoose';
export const AssignmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
  startdate: { type: String, required: true },
  enddate: { type: String, required: true },
  noofquestions: { type: Number, default:0 },
});

export interface Assignment {
  name: string;
  teacher: string;
  startdate: string;
  enddate: string;
  noofquestions: number;
}
