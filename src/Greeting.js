import React from "react";

function Greeting() {
  //   let username = null;
  //   let username = undefined;
  let username = "root";
  //   let username = false;
  let arraywith2Elements = ["Array1", "Array 2"];
  let x = 1;

  return username === null || username === undefined ? (
    <div>Not logged in</div>
  ) : (
    <div>Hello {username}</div>
    // c. Tryreturninganarraywith2elementsinside
    // <div>Can't return 2 elements</div>
    // <div>{arraywith2Elements}</div>
    // Canyouput2expressionsinsidesinglebraces,like{x&&5;x&&7}?
    // <div>{(x && 5, x && 7)}</div>
    // WhathappensifyouusereturninsideaJSexpression?
    // <div>Hello return {username}</div>
  );
}

export default Greeting;
