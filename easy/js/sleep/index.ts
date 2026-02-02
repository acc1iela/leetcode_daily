async function sleep(millis: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, millis));
}
// Runtime 37ms | Beats 91.58%
// Memory 55.48MB | Beats 22.79%
