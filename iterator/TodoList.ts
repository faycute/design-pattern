import Aggregate from './Aggregate';
import Iterator from './Iterator';
import TodoListIterator from './TodoListIterator';
import TodoListReverseIterator from './TodoListReverseIterator';

export default class TodoList implements Aggregate<string> {
  private todos: string[];

  constructor() {
    this.todos = [];
  }

  get length(): number {
    return this.todos.length;
  }

  push(todo: string): void {
    this.todos.push(todo);
  }

  getTodoAt(index: number): string {
    return this.todos[index];
  }

  iterator(): Iterator<string> {
    return new TodoListIterator(this);
  }
  
  reverseIterator(): Iterator<string> {
    return new TodoListReverseIterator(this);
  }
}


// // Mapに変更したケース
// export default class TodoList implements Aggregate<string> {
//   private todos: Map<number, string>;
//   private index: number;

//   constructor() {
//     this.todos = new Map();
//     this.index = 0;
//   }

//   get length(): number {
//     return this.todos.size;
//   }

//   push(todo: string): void {
//     this.todos.set(this.index++, todo);
//   }

//   getTodoAt(key: number): string {
//     return this.todos.get(key) ?? 'No Todo';
//   }

//   iterator(): Iterator<string> {
//     return new TodoListIterator(this);
//   }
  
//   reverseIterator(): Iterator<string> {
//     return new TodoListReverseIterator(this);
//   }
// }