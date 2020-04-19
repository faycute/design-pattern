import Iterator from './Iterator';
import TodoList from './TodoList';

export default class TodoListReverseIterator implements Iterator<string> {
  private index: number;

  constructor(private todoList: TodoList) {
    this.index = todoList.length - 1;
  }

  hasNext(): boolean {
    return this.index >= 0;
  }

  next(): string {
    return this.todoList.getTodoAt(this.index--);
  }
}