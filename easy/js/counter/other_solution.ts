function createCounterOther(n: number): () => number {
  return function () {
    return n++;
  };
}
