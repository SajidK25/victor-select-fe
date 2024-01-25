import React from "react"
const GetDateAndTimeIntoIso = ({isoString})=>{
    // Create a new Date object from the database string
const date = new Date (isoString);

// Create an array of month names
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Format the date parts
const day = date.getDate ();
const month = months[date.getMonth ()];
const year = date.getFullYear ();
const hour = date.getHours ();
const minute = date.getMinutes ();

// Join the date parts with a delimiter
const formattedDate = `${month} ${day}, ${year} time: ${hour}:${minute}`;

// Display the formatted date
console.log (formattedDate); // date: Aug 3. 2021 time: 22:54
return <div>{formattedDate}</div>
}

export default GetDateAndTimeIntoIso;