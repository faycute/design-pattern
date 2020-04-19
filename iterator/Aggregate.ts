import Iterator from './Iterator';

export default interface Aggregate<T> {
  iterator(): Iterator<T>;
  reverseIterator(): Iterator<T>;
}