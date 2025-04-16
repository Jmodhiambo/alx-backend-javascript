export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const status = 200;
      const body = 'Success';
      const obj = { status, body };

      resolve(obj);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
