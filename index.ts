import fastify from 'fastify';
import { connectToMongoDb } from './config/db.connection';
import { constants } from './utils/constants';
import { BookRepo } from './framework/repository/book.repo';
import { BookService } from './service/book.service';
import { BookController } from './controller/book.controller';
import { bookRoutes } from './route/book.route';
import { addDefaultBooks } from './migration/book.migration';
const app = fastify.default({ logger: true });






const start = async (): Promise<void> => {

    

    const bookController=new BookController(new BookService(new BookRepo()))
	if(!bookController) console.log("bookController",bookController)

    const routes = bookRoutes(bookController)
	if(!routes) console.log("routes",routes)

    routes.forEach(route=>app.route(route)) 
   
	try {
		 await app.ready();
		
		await app.listen({ port: constants.PORT });
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};
start()
.then(()=>connectToMongoDb())
   .then(()=>addDefaultBooks())


