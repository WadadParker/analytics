export const getShortDate = (dateString) => {

    const dateParts = dateString.split('/');
  
    const [day, monthIndex, year] = dateParts;
    const monthNamesShort = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const month = monthNamesShort[parseInt(monthIndex) - 1]?.substring(0, 3);
  
    if (!day || !month) {
      return 'Invalid Date';
    }
  
    return `${day} ${month}`;
  };