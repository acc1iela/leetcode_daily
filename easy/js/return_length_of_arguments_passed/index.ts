type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}

// Runtime 40ms | Beats 76.41%
// Memory 54.25MB | Beats 83.03%
