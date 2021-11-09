export default function timeout(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}
