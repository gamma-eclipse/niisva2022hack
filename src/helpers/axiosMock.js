export function axiosMock(data, timeoutMs = 1500) {
  return new Promise((res) => {
    setTimeout(() => res(data), timeoutMs);
  });
}
