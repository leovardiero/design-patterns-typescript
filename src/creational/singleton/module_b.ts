import { MyDatabaseModule } from './db/my-database-module';
import './module_a';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Pessoa 4', age: 28 });
myDatabaseClassic.add({ name: 'Pessoa 5', age: 28 });
myDatabaseClassic.add({ name: 'Pessoa 6', age: 32 });
myDatabaseClassic.show();
