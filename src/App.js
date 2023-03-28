
// NATHO =>
// a) This component is wackadoodle. Here, we're returning the JSX and then we're trying to tweak it with gitElementById.
// b) Is it ever legit to modify the DOM uysing document.getElementById('a').className = 'b'? 
// c) It seems to me that I should always try to configure the JSX elements in the return expression using a variable or state variable. Your thoughts?
// d) The next commit shows fix. 
export default function Clock({ time }) {
  let hours = time.getHours();
  if (hours >= 0 && hours <= 6) {
    document.getElementById('time').className = 'night';
  } else {
    document.getElementById('time').className = 'day';
  }
  return (
    <h1 id="time">
      {time.toLocaleTimeString()}
    </h1>
  );
}
