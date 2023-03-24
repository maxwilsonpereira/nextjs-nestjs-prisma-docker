export const setWeekendsToFriday = (date: Date) => {
  const prevFriday = new Date(date);
  prevFriday.setDate(date.getDate() - ((date.getDay() - 5 + 7) % 7));
  return prevFriday;
};
