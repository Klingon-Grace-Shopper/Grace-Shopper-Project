import React from "react";

import Navbar from "./components/Navbar";
import Routes from "./Routes";

// const App = () => {
//   return (
//     <div className="container">
//       <Navbar />
//       <Routes />
//     </div>
//   );
// };

// export default App;

import React, { Component } from "react";

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  render() {
    const { children } = this.props;
    return <div className="container">{children}</div>;
  }
}
