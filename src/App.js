let guest = 0;

function Cup() {
  // NATHO => I deliberately created this component based on an "impure function". Take a look at the output.
  // What steps do I take to get <React.StrictMode> in index.js to catch this component?
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}