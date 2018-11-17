import React, { Component } from 'react';
import './App.scss';
import { Weine } from './components/Weine';
import { Bilder } from './components/Bilder';
import { About } from './components/About';
import { Toolbar } from './components/Toolbar';
import { Header } from './components/Header';

class App extends Component {

  constructor() {
    super();
    this.state = {
      showMenu: false,
      menuItems: [
        {
          label: 'Weine & Brände',
          href: '#weine'
        },
        {
          label: 'Bilder',
          href: '#bilder'
        },
        {
          label: 'Über uns',
          href: '#about'
        }
      ]
    }
  }

  render() {


    return (
      <div className="container">
        <Toolbar items={this.state.menuItems} />
        <div className="content" data-container>
          <Header />
          <Weine />
          <Bilder />
          <About />
          <footer className="footer">
            &copy; moogwein 2018
        </footer>
        </div>
      </div>
    );
  }
}

export default App;
