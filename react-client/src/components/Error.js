import React from "react";

function Error() {
  return (
    <div className="container width-500 mt-5 p-3 shadow rounded bg-white d-flex align-items-center flex-column">
      <img width="100px" src="sad-face.png" alt="sad face"/>
      <h3 className="text-center mb-3">Oh no, something bad happened!</h3>
    </div>
  );
}

export default Error;
