import React from "react";

function About() {

  const groupMembers= [
    {name: 'Marianne Palmer', studentNumber: 301122149},
    {name: 'Ting Li', studentNumber: 301025864},
    {name: 'Hong Viet Nguyen', studentNumber: 301086374},
    {name: 'Jiye Yu', studentNumber: 301116244},
    {name: 'Yash Sanjaykumar Kachhiyapatel', studentNumber: 301171192},
  ]
  return (
    <div className="container width-500 mt-5 p-3 shadow rounded bg-white">
        <h1 className="text-center mb-3">About Us</h1>

        <div className="row">
          <h5 className="col-sm-3">Course:</h5>
          <p>COMP377-001</p>
        </div>
        <div className="row">
          <h5 className="col-sm-3">Group #:</h5>
          <p>2</p>
        </div>
        <div>
          <h5>Group Members:</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Student #</th>
              </tr>
            </thead>
            <tbody>
              {
                groupMembers.map((x) => 
                  <tr key={x.name}>
                    <td>{x.name}</td>
                    <td>{x.studentNumber}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default About;