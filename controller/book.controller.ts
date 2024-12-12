import { FastifyRequest, FastifyReply } from 'fastify';
import { BookService, IBookService } from '../service/book.service';
import { BookParamsType, BookBodyType } from '../schemas/book.schemas';
import { BookRepo } from '../framework/repository/book.repo';
import { messages } from '../utils/messages';

// Interface defining the methods for BookController
export interface IBookController {
  getAllBooks(request: FastifyRequest, reply: FastifyReply): Promise<void>;
  createBook(request: FastifyRequest, reply: FastifyReply): Promise<void>;
  getBook(request: FastifyRequest, reply: FastifyReply): Promise<void>;
  updateBook(request: FastifyRequest, reply: FastifyReply): Promise<void>;
  deleteBook(request: FastifyRequest, reply: FastifyReply): Promise<void>;
}

// Implementation of the BookController class
export class BookController implements IBookController {
  private bookService: IBookService;

  // Constructor to inject the book service
  constructor(bookService: IBookService) {
    this.bookService = bookService;
  }

  // Get all books
  async getAllBooks(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const books = await this.bookService.getAllBooks();
      return reply.status(200).send(books);
    } catch (error) {
      return reply.status(500).send({
        statusCode: 500,
        error: messages.INTERNAL_SERVER_ERROR,
        message: messages.ERROR_FETCHING_BOOKS,
      });
    }
  }

  // Create a new book
  async createBook(
    request: FastifyRequest<{ Body: BookBodyType }>,
    reply: FastifyReply
  ) {
    try {
      const book = await this.bookService.createBook(request.body);
      return reply.status(201).send(book);
    } catch (error) {
      return reply.status(500).send({
        statusCode: 500,
        error: messages.INTERNAL_SERVER_ERROR,
        message: messages.ERROR_CREATING_BOOK,
      });
    }
  }

  // Get a book by ID
  async getBook(
    request: FastifyRequest<{ Params: BookParamsType }>,
    reply: FastifyReply
  ) {
    try {
      const id = request.params.id;
      const book = await this.bookService.getBook(id);

      if (book) {
        return reply.status(200).send(book);
      }

      return reply.status(404).send({
        statusCode: 404,
        error: messages.BOOK_NOT_FOUND,
        message: messages.BOOK_NOT_FOUND,
      });
    } catch (error) {
      return reply.status(500).send({
        statusCode: 500,
        error: messages.INTERNAL_SERVER_ERROR,
        message: messages.ERROR_FETCHING_BOOK,
      });
    }
  }

  // Update a book by ID
  async updateBook(
    request: FastifyRequest<{ Params: BookParamsType; Body: BookBodyType }>,
    reply: FastifyReply
  ) {
    try {
      const { id } = request.params;
      const updatedBook = await this.bookService.updateBook(id, request.body);

      if (updatedBook) {
        return reply.status(200).send(updatedBook);
      }

      return reply.status(404).send({
        statusCode: 404,
        error: messages.BOOK_NOT_FOUND,
        message: messages.BOOK_NOT_FOUND,
      });
    } catch (error) {
      return reply.status(500).send({
        statusCode: 500,
        error: messages.INTERNAL_SERVER_ERROR,
        message: messages.ERROR_UPDATING_BOOK,
      });
    }
  }

  // Delete a book by ID
  async deleteBook(
    request: FastifyRequest<{ Params: BookParamsType }>,
    reply: FastifyReply
  ) {
    try {
      const { id } = request.params;
      await this.bookService.deleteBook(id);
      reply.status(204).send(); // No content
    } catch (error) {
      reply.status(404).send({
        statusCode: 404,
        error: messages.BOOK_NOT_FOUND,
        message: messages.BOOK_NOT_FOUND,
      });
    }
  }
}
