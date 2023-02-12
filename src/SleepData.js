import React, { useEffect, useState } from 'react';


function SleepData() {
  const [sleepData, setSleepData] = useState(null);

  useEffect(() => {
    const fetchSleepData = async () => {
      const API_KEY = 'your_api_key';
      const response = await fetch(`https://api.fitbit.com/1/user/-/sleep/date/2022-07-07.json`, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`
        }
      });
      const sleepData = await response.json();
      setSleepData(sleepData);
    };
    fetchSleepData();
  }, []);

  return (
    <div>
      { sleepData ? (
        <div>
          {}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default SleepData;
