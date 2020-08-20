export const videoListTransformer = (videos) => videos
  .reduce((accum, item) => (
    { ...accum, [item.womContentId]: item }
  ),
  {});
