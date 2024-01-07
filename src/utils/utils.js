import Cookies from 'js-cookie';

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

export const sanitizeData=(data)=>
{
    // Aggregate total time spent for each category across the selected date range
    const aggregateData = data.reduce((acc, entry) => {
      Object.keys(entry).forEach((key) => {
        if (key !== 'Day' && key!=='_id' && key!=='Gender' && key!=='Age') {
          acc[key] = (acc[key] || 0) + entry[key];
        }
      });
      return acc;
    }, {});
  
    // Convert aggregated data into an array format required for Recharts
    const chartData = Object.keys(aggregateData).map((key) => ({
      category: key,
      totalTime: aggregateData[key],
    })).reverse();

    return chartData;
}

// Function to set a cookie with user preferences
export const setPreferencesCookie = (filters) => {

  document.cookie = 'userPreferences=' + JSON.stringify(filters) 
  
};

// Function to get user preferences from the cookie
export const getPreferencesFromCookie = () => {
  const preferencesCookie = Cookies.get('userPreferences');
  if (preferencesCookie) {
    // const decodedPreferences = decodeURIComponent(preferencesCookie);
    // return JSON.parse(decodedPreferences);
    const nameValueArray = document.cookie.split('=');
    return JSON.parse(nameValueArray[1]);
  }
  return {age:"",gender:"",fromDate:"",toDate:""};
};

// Function to clear user preferences stored in the cookie
export const clearPreferencesCookie = () => {
  Cookies.remove('userPreferences');
};
