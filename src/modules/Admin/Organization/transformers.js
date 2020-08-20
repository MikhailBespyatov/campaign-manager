export const organizationsListTransformer = (list) => list
  .reduce(
    (accum, item) => (
      { ...accum, [item.organizationId]: item }
    ),
    {},
  );
