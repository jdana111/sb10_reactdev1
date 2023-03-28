// NATHO =>
// a) Here's the fix. 
// b) I added an App() parent component to make it work. 
export default function App() {
  const dateTime = new Date();
  return (
    <>
     <Clock dateTime={dateTime} />
    </>
  )
}

function Clock({ dateTime }) {
  let hours = dateTime.getHours();
  let className;
  console.log('hours =', hours)
  if (hours >= 0 && hours <= 6) {
    className = 'night';
  } else {
    className = 'day';
  }
  return (
    <h1 className={className}>
      {dateTime.toLocaleTimeString()}
    </h1>
  );
}