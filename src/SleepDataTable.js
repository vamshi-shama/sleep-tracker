import React from 'react';


const SleepDataTable = ({ sleepData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {sleepData.map(data => (
          <tr key={data.id}>
            <td>{data.startTime}</td>
            <td>{data.endTime}</td>
            <td>{data.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SleepDataTable;
