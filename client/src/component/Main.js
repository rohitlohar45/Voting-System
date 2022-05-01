import "./Home.css";


import React, { Component } from "react";

//import Navbar from "Navbar/Navigation";
//import NavbarAdmin from "Navbar/NavigationAdmin";

//import getWeb3 from "getWeb3";
//import Election from "../../../contracts/Election.json";

//import AdminOnly from "../../AdminOnly";

//import "./AddCandidate.css";

export default class Main extends Component {
  render() {
    if (!this.state.web3) {
      return (
        <>
          {/* {this.state.isAdmin ? <NavbarAdmin /> : <Navbar />} */}
          <center>Loading Web3, accounts, and contract...</center>
        </>
      );
    }
    if (!this.state.isAdmin) {
      return (
        <>
        </>
      );
    }
    return (
      <>
        <div className="container-main">
          <h2>Add a new candidate</h2>
          <small>Total candidates: {this.state.candidateCount}</small>
          <div className="container-item">
            <form className="form">
              <label className={"label-ac"}>
                Header
                <input
                  className={"input-ac"}
                  type="text"
                  placeholder="eg. Marcus"
                  value={this.state.header}
                  onChange={this.updateHeader}
                />
              </label>
              <label className={"label-ac"}>
                Qualification
                <input
                  className={"input-ac"}
                  type="text"
                  placeholder="eg. It is what it is"
                  value={this.state.slogan}
                  onChange={this.updateSlogan}
                />
              </label>
              <button
                className="btn-add"
                disabled={
                  this.state.header.length < 3 || this.state.header.length > 21
                }
                onClick={this.addCandidate}
              >
                Add
              </button>
            </form>
          </div>
        </div>
        {loadAdded(this.state.candidates)}
      </>
    );
  }
}
export function loadAdded(candidates) {
  const renderAdded = (candidate) => {
    return (
      <>
        <div className="container-list success">
          <div
            style={{
              maxHeight: "21px",
              overflow: "auto",
            }}
          >
            {candidate.id}. <strong>{candidate.header}</strong>:{" "}
            {candidate.slogan}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="container-main" style={{ borderTop: "1px solid" }}>
      <div className="container-item info">
        <center>Candidates List</center>
      </div>
      {candidates.length < 1 ? (
        <div className="container-item alert">
          <center>No candidates added.</center>
        </div>
      ) : (
        <div
          className="container-item"
          style={{
            display: "block",
            backgroundColor: "#DDFFFF",
          }}
        >
          {candidates.map(renderAdded)}
        </div>
      )}
    </div>
  );
}




// var Main = React.Component({
//     render: function() {
//       return (
//         <div>
//           <section className="header">
//             <div className="row">
//               <div className="tabs">
//                 <button className="voting_portal"><img src="../img/A.png" height={70} width={600} /><p /></button>
//                 <div className="layer">
//                   <a href="voting_portal.html"><h3>Login to vote</h3></a>
//                 </div>
//               </div>
//               <div className="tabs">
//                 <button className="faqs"><img src="../img/B.png" height={70} width={600} /></button>
//                 <div className="layer">
//                   <a href="faqs.html"><h3>FAQs about Electors<br />Political parties,<br />Parliament,etc</h3></a>
//                 </div>
//               </div>
//               <div className="tabs">
//                 <button className="elections"><img src="../img/C.png" height={70} width={600} /></button>
//                 <div className="layer">
//                   <a href="upcoming_elections.html"><h3>Details of current,<br />previous and<br />upcoming elections</h3></a>
//                 </div>
//               </div>
//               <div className="tabs">
//                 <button className="result"><img src="../img/D.png" height={70} width={600} /></button>
//                 <div className="layer">
//                   <a href="result.html"><h3>General Election<br />Results and Statics</h3></a>
//                 </div>
//               </div>
//             </div>
//           </section>
//           <br />
//           <section className="home">
//           </section>
//         </div>
//       );
//     }
//   });

//  export default Main;

// var Main = React.createClass({
//     render: function() {
//       return (
//         <div>
//           <link rel="stylesheet" type="text/css" href="css/style.css" />
//           <link rel="preconnect" href="https://fonts.googleapis.com" />
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
//           <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Slabo+27px&family=Tajawal:wght@300&display=swap" rel="stylesheet" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <section className="header">
//             <nav>
//               <a href="pbl.html"><img src="../img/evote.png" width="50%" height="50%" /></a>
//               <div className="nav-links">
//                 <ul>
//                   <li><a href="home.html">HOME</a></li>
//                   <li><a href="login2.html">LOGIN</a></li>
//                   <li><a href="login2.html">REGISTER</a></li>
//                 </ul>
//               </div>
//             </nav>
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//             <div className="row">
//               <div className="tabs">
//                 <button className="voting_portal"><img src="../img/A.png" height={70} width={600} /><p /></button>
//                 <div className="layer">
//                   <a href="voting_portal.html"><h3>Login to vote</h3></a>
//                 </div>
//               </div>
//               <div className="tabs">
//                 <button className="faqs"><img src="../img/B.png" height={70} width={600} /></button>
//                 <div className="layer">
//                   <a href="faqs.html"><h3>FAQs about Electors<br />Political parties,<br />Parliament,etc</h3></a>
//                 </div>
//               </div>
//               <div className="tabs">
//                 <button className="elections"><img src="../img/C.png" height={70} width={600} /></button>
//                 <div className="layer">
//                   <a href="upcoming_elections.html"><h3>Details of current,<br />previous and<br />upcoming elections</h3></a>
//                 </div>
//               </div>
//               <div className="tabs">
//                 <button className="result"><img src="../img/D.png" height={70} width={600} /></button>
//                 <div className="layer">
//                   <a href="result.html"><h3>General Election<br />Results and Statics</h3></a>
//                 </div>
//               </div>
//             </div>
//           </section>
//           <br />
//           <section className="home">
//           </section>
//         </div>
//       );
//     }
//   });

//   export default Main;