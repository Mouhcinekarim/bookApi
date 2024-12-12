import { Static, Type } from '@sinclair/typebox';
import { FastifySchema } from 'fastify';

// BookBodyType schema for validating the request body when creating or updating a book
export const BookBodySchema = Type.Object({
  title: Type.String(),
  author: Type.String(),
  publishedYear: Type.Integer(),
  genre: Type.String(),
});

// BookParamsType schema for validating the request params (such as the book ID)
export const BookParamsSchema = Type.Object({
  id: Type.String(),
});
export const createBookSchema: FastifySchema = {
    body: BookBodySchema, // Validation for the body of the request (for create book)
  };
  
  export const getBookSchema: FastifySchema = {
    params: BookParamsSchema, // Validation for the params (e.g., book ID)
  };
  export const updateBookSchema: FastifySchema = {
    params: BookParamsSchema,  // Validation for the book ID parameter
    body: BookBodySchema,      // Validation for the body when updating a book
  };
  
  export const deleteBookSchema: FastifySchema = {
    params: BookParamsSchema, // Validation for the book ID parameter
  }; 

  export type BookBodyType = Static<typeof BookBodySchema>;
export type BookParamsType = Static<typeof BookParamsSchema>;