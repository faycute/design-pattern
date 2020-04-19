import Iterator from './Iterator';
import TodoList from './TodoList';

export default class TodoListIterator implements Iterator<string> {
  private index: number;

  constructor(private todoList: TodoList) {
    this.index = 0;
  }

  hasNext(): boolean {
    return this.index < this.todoList.length;
  }

  next(): string {
    return this.todoList.getTodoAt(this.index++);
  }
}