import userTransformer from 'modules/Users/userTransformer';

export const usersListTransformer = (users) => users
  .reduce((accum, item) => (
    { ...accum, [item.userId]: userTransformer(item) }
  ),
  {});
