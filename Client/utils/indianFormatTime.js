export const indianFormatTime = (isoDate) => {
    // Convert to a Date object
const date = new Date(isoDate);

// Format the output
const indianFormat = date.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata", // Set to IST
    year: "numeric",
    month: "2-digit", // Use 'long' or 'short' for full/abbreviated month names
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Use 12-hour clock
  });
return indianFormat;

}
