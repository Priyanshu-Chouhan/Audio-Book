import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: String,
      required: true,
      trim: true
    },
    genre: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    coverUrl: {
      type: String,
      required: true
    },
    audioUrl: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Book = mongoose.model('Book', bookSchema);
export default Book;
