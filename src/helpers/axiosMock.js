export function axiosMock(data, timeoutMs = 1000) {
  return new Promise((res) => {
    setTimeout(() => res(data), timeoutMs);
  });
}
