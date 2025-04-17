export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const division = mathFunction();
    queue.push(division);
  } catch (error) {
    queue.push(error.toString());
  }

  queue.push('Guardrail was processed');

  return queue;
}
