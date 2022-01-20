export async function verifyLogin({ password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === 'meld123') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
