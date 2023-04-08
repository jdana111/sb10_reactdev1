import React from "react";

export default function App() {
  return (
    <div>
      <Parent>
        <Child />
      </Parent>
    </div>
  );
}

function Parent({ children }) {
  return (
    <>
      <h1>{children}</h1>
    </>
  );
}

function Child() {
  return (
    "Hello from Child."
  )
}
