import React, { Component } from 'react';
import './App.scss';
import { Lagen } from './components/Lagen';
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
          label: 'Lagen',
          href: '#lagen'
        },
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
          <Lagen />
          <Weine />
          <Bilder />
          <About />
        </div>
      </div>
    );
  }
}

export default App;
