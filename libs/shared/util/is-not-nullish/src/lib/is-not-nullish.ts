export function isNotNullish<T>(arg: T | null | undefined): arg is T {
  return arg !== null && arg !== undefined;
}
