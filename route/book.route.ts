import { type RouteOptions, type RouteHandlerMethod } from 'fastify';
import { IBookController } from '../controller/book.controller';
import { createBookSchema, deleteBookSchema, getBookSchema, updateBookSchema } from '../schemas/book.schemas';


export const bookRoutes = (bookController: IBookController): RouteOptions[] => {
  
  return([
  {
    method: 'POST',
    url: '/books',
    schema: createBookSchema,
    handler: (request, reply)=> bookController.createBook(request, reply)
  },
  {
    method: 'GET',
    url: '/books/:id',
    schema: getBookSchema,
    handler: (request, reply)=> bookController.getBook(request, reply)
  },
  {
    method: 'GET',
    url: '/books',
    handler: (request, reply)=>bookController.getAllBooks(request, reply)
  },
  {
    method: 'PUT',
    url: '/books/:id',
    schema: updateBookSchema,
    handler: (request, reply)=>bookController.updateBook(request, reply)
  },
  {
    method: 'DELETE',
    url: '/books/:id',
    schema: deleteBookSchema,
    handler: (request, reply)=>bookController.deleteBook(request, reply)
  }
])};
