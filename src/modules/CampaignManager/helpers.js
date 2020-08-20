const day = 24 * 60 * 60 * 1000;

export const convertMillisecondsToDays = (ms) => ms / day;

export const getTomorrow = () => {
  const now = new Date().getTime();
  const tomorrow = new Date(now + day);
  return tomorrow.toISOString().substring(0, 10);
};

export const getDateIntervalFromNow = (dayAmount) => {
  const now = new Date();
  const currentDateInMilliseconds = now.getTime();
  const startDate = new Date(currentDateInMilliseconds - (day * dayAmount));
  const dateFrom = startDate.toISOString();
  const dateTo = now.toISOString();
  return { dateFrom, dateTo };
};

export const getFormattedDateString = (date) => new Date(date).toISOString().substring(0, 10);

export const getEndDateISO = (date, dayAmount) => {
  const endDateInMilliseconds = new Date(date).getTime() + (day * dayAmount);
  return new Date(endDateInMilliseconds).toISOString();
};
