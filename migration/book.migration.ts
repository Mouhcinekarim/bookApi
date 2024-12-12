import { bookDAO } from "../framework/models/book";

export const addDefaultBooks=async ()=> {
  try {
    // Check if books already exist in the collection
    const count = await bookDAO.countDocuments();

    if (count === 0) {
      console.log('No books found, adding default books...');

      // Default books to be added
      const defaultBooks = [
        { title: '1984', author: 'George Orwell', publishedYear: 1949, genre: 'Dystopian' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960, genre: 'Fiction' },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925, genre: 'Classic' },
        { title: 'Moby-Dick', author: 'Herman Melville', publishedYear: 1851, genre: 'Adventure' }
      ];

      // Insert the default books
      await bookDAO.insertMany(defaultBooks);

      console.log('Default books have been added!');
    } else {
      console.log('Books already exist, no need to add default books.');
    }
  } catch (error) {
    console.error('Error during migration:', error);
  }
}
