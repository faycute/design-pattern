import TodoList from './TodoList';

console.log('----------------------------');
console.log('Iteratorパターンを利用するケース')
console.log('----------------------------');

const todoList = new TodoList();
todoList.push('JavaScriptを学習する');
todoList.push('TypeScriptを学習する');
todoList.push('TypeScriptでデザインパターンを学習する');

const iterator = todoList.iterator();
while(iterator.hasNext()) {
  const todo = iterator.next();
  console.log(todo);
}

const reverseIterator = todoList.reverseIterator();
while(reverseIterator.hasNext()) {
  const todo = reverseIterator.next();
  console.log(todo);
}

console.log('----------------------------');
console.log('Iteratorパターンを利用しないケース')
console.log('----------------------------');

const books: string[] = [];
books.push('JavaScript入門');
books.push('TypeScript入門');
books.push('デザインパターン入門');

books.forEach(book => {
  console.log(book);
});

books.reverse().forEach(book => {
  console.log(book);
});
