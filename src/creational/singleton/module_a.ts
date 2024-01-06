import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Leo', age: 28 });
myDatabaseClassic.add({ name: 'Rafa', age: 28 });
myDatabaseClassic.add({ name: 'Bah', age: 32 });
// myDatabaseClassic.show();
