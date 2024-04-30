import React, { useState } from "react";

const Test2_React = () => {
  const [show, toggle] = useState(false);

  return (
    <div>
      테스트2 - 리액트
      <button onClick={() => toggle((p) => !p)}>toggle</button>
      <p>{show ? "on" : "off"}</p>
    </div>
  );
};

export default Test2_React;
