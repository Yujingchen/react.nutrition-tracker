// import React, { Component } from "react";
// import Entry from "./Entry";
// import Calories from "./Calories";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { firestoreConnect } from "react-redux-firebase";
// import { compose } from "redux";

// class Entries extends Component {
//   render() {
//     const { entries } = this.props;
//     if (entries) {
//       return (
//         <div>
//           <Calories />
//           <h1 className="display-4 mb-2 text-center">
//             Today's <span className="text-danger"> Entries</span>
//           </h1>
//           {entries.map(entry => {
//             return <Entry key={entry.id} entry={entry} />;
//           })}
//         </div>
//       );
//     } else {
//       return null;
//     }
//   }
// }

// Entries.propTypes = {
//   firestore: PropTypes.object.isRequired,
//   entries: PropTypes.array
// };

// export default compose(
//   firestoreConnect([{ collection: "entries" }]),
//   connect((state, props) => ({
//     entries: state.firestore.ordered.entries
//   }))
// )(Entries);
