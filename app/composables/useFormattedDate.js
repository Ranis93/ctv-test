export function useDateFormat(){
  const formattedDate = (date) => {
    const formatter = new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: 'long'
    });
    return formatter.format(new Date(date));
  }
  return {
    formattedDate
  }
}