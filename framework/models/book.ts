import { model, Schema } from "mongoose";

export interface IBook {
    id?:string
	title: string;
	author: string;
	publishedYear: number;
	genre: string;
    
}
const bookSchema = new Schema<IBook>({
	title: {
        type: String,
        required: true,
      },
	author: {
        type: String,
        required: true,
      },
	publishedYear: {
        type: Number,
        required: true,
      },
	genre: {
        type: String,
        required: true,
      }
},{id: true,
   versionKey: false ,
    toJSON: {
      transform (doc, ret) {
        ret.id = ret._id
        delete ret._id
      }
    }}
);

export const bookDAO= model<IBook>('book', bookSchema);