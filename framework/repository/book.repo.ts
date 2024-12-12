import { bookDAO, IBook } from "../models/book";

export interface IBookRepository {
    getAllBooks:()=> Promise<IBook[]>
    createBook: (book: IBook) => Promise<IBook>;
    getBookById: (id: string) => Promise<IBook | undefined>;
    updateBookById: (id: string, book: IBook) => Promise<IBook | undefined>;
    deleteBook: (id: string) => Promise<void>;
  }

export class  BookRepo implements IBookRepository{
    
    async getAllBooks(): Promise<IBook[]> {
        
          return await bookDAO.find();  
      }
      async createBook(bookData: IBook): Promise<IBook> {
        
          
          const book=await bookDAO.create(bookData);
          return book;
        
      }
      async getBookById(bookId: string): Promise<IBook | undefined> {
        
          const book = await bookDAO.findById(bookId);  

          if(!book) return undefined;
          
          return book;
        
      } 
      async updateBookById(bookId: string, updatedData: IBook): Promise<IBook | undefined> {
        
          const book = await bookDAO.findByIdAndUpdate(bookId, updatedData, { new: true });  
          
          if(!book) return undefined;
          
          return book

        
      }
      async deleteBook(bookId: string): Promise<void> {

         
        await bookDAO.findByIdAndDelete(bookId)
        
          
          
      }     
}