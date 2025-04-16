export default function getResponseFromAPI() {
  const addTwoPlusThree = new Promise((resolve) => {
    // Add 2 + 3
    const TwoPlusThree = 2 + 3;

    resolve(TwoPlusThree);
  });

  return addTwoPlusThree;
}
