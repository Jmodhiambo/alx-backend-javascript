export default function handleResponseFromAPI(promise) {
  return promise.then(() => {
    const status = 200;
    const body = 'Success';

    return { status, body };
  })
    .catch(() => new Error())
    .finally(() => { console.log('Got a response from the API'); });
}
