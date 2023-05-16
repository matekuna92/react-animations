import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    isModalOpen: false
  };

  showModal = () => {
    this.setState({isModalOpen: true});
  }

 closeModal = () => {
    this.setState({isModalOpen: false});
  }

  // render modal and backdrop in DOM only if it's needed to display instead of rendering every time with opacity: 0 - cleaner DOM
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {this.state.isModalOpen ? <Modal closed={this.closeModal} show={this.state.isModalOpen} /> : null}
        {this.state.isModalOpen ? <Backdrop show={this.state.isModalOpen} /> : null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
