import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: Number },
  description: { type: String },
  postingDate: { type: Date, default: Date.now },
});

// Create indexes for better performance on queries
JobSchema.index({ postingDate: -1 }); // Fast sorting by newest
JobSchema.index({ title: 'text', description: 'text' }); // Optimized search

export default mongoose.models.Job || mongoose.model('Job', JobSchema);
