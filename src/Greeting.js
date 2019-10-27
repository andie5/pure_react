import React from "react";

function Greeting() {
  //   let username = null;
  //   let username = undefined;
  //   let username = "root";
  let username = false;

  return username === null || username === undefined ? (
    <div>Not logged in</div>
  ) : (
    <div>Hello {username}</div>
  );
}

export default Greeting;
