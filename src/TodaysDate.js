import React from "react";

let formattedDate;

const getTodaysDate = () => {
  let dayString;
  let monthString;
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();

  if (month < 10) {
    monthString = "0" + month;
  } else {
    monthString = month.toString();
  }

  if (day < 10) {
    dayString = "0" + day;
  } else {
    dayString = day.toString();
  }

  formattedDate = `${dayString}-${monthString}-${year}`;
  return formattedDate;
};

const TodaysDate = () => {
  let currentDate = getTodaysDate();

  return (
    <div>
      <h2>Today's date is : {currentDate}</h2>
    </div>
  );
};

export default TodaysDate;
