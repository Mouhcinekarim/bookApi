import { IBook } from "../framework/models/book";
import { IBookRepository } from "../framework/repository/book.repo";

// Interface defining the methods for BookService
export interface IBookService {
  getAllBooks(): Promise<IBook[]>;
  createBook(bookPayload: IBook): Promise<IBook>;
  getBook(id: string): Promise<IBook | undefined>;
  updateBook(id: string, bookPayload: IBook): Promise<IBook | undefined>;
  deleteBook(id: string): Promise<void>;
}

// Implementation of the BookService class
export class BookService implements IBookService {
  private bookRepository: IBookRepository;

  // Constructor to inject the book repository
  constructor(bookRepository: IBookRepository) {
    this.bookRepository = bookRepository;
  }

  // Get all books
  async getAllBooks(): Promise<IBook[]> {
    return await this.bookRepository.getAllBooks();
  }

  // Create a new book
  async createBook(bookPayload: IBook): Promise<IBook> {
    return await this.bookRepository.createBook(bookPayload);
  }

  // Get a book by ID
  async getBook(id: string): Promise<IBook | undefined> {
    return await this.bookRepository.getBookById(id);
  }

  // Update a book by ID
  async updateBook(id: string, bookPayload: IBook): Promise<IBook | undefined> {
    return await this.bookRepository.updateBookById(id, bookPayload);
  }

  // Delete a book by ID
  async deleteBook(id: string): Promise<void> {
    return await this.bookRepository.deleteBook(id);
  }
}
