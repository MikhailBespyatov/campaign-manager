export const campaignsListTransformer = (list) => list
  .reduce(
    (accum, item) => (
      { ...accum, [item.id]: item }
    ),
    {},
  );

export const campaignsStatInfoTransformer = (info) => {
  const infoCopy = { ...info };
  Object.keys(infoCopy).forEach((key) => {
    const valueToNumber = Number.parseInt(infoCopy[key], 10);
    infoCopy[key] = key === 'remainingDuration'
      ? `${(valueToNumber / (60 * 24)).toFixed()}d`
      : valueToNumber.toLocaleString();
  });
  return infoCopy;
};
