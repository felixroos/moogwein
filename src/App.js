import React, { Component } from 'react';
import './App.scss';
import { Weine } from './components/Weine';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Toolbar } from './components/Toolbar';
import { Header } from './components/Header';
import bucket from './img/photos/DSC_0863.jpg';
import netz from './img/photos/netz.jpg';
import trauben from './img/photos/P1290172.JPG';
import grazien from './img/photos/grazien.jpg';
import keller from './img/photos/keller.png';
import faesser from './img/photos/faesser.jpg';
import fass from './img/photos/fass.jpg';
import haus from './img/photos/P1290118.jpg';
import berg from './img/photos/P1290128.jpg';
import pfad from './img/photos/TrabenerGaispfad.jpg';
import { Contact } from './components/Contact';

class App extends Component {

  constructor() {
    super();
    this.state = {
      menuItems: [
        {
          label: 'Über uns',
          href: '#about'
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
          label: 'Kontakt',
          href: '#contact'
        }
      ],
      einblicke: [
        {
          src: netz,
          caption: 'Moogi ist jetzt auch im Netz'
        },
        {
          src: grazien,
          caption: 'Die Helfer präsentieren Stolz die Ernte'
        },
        {
          src: bucket,
          caption: ''
        },
        {
          src: trauben,
          caption: ''
        },
      ],
      weine: [
        {
          src: keller
        },
        {
          src: faesser
        },
        {
          src: fass
        }
      ],
      lagen: [
        {
          src: haus,
          caption: 'Kräuterhaus'
        },
        {
          src: berg,
          caption: 'Schloßberg'
        },
        {
          src: pfad,
          caption: 'Gaispfad'
        },
      ]
    }
  }

  render() {
    return (
      <div className="container">
        <Toolbar items={this.state.menuItems} />
        <div className="content" data-container>
          <Header />
          <div className="anchor" id="about"></div>
          <section className="has-padding">
            <h3>Über Uns</h3>
            <About />
          </section>
          <section className="has-padding">
            <Gallery images={this.state.lagen} columns="3" crop="1-1" />
            <div className="anchor" id="weine"></div>
            <h3>Weine &amp; Brände</h3>
            <Weine />
          </section>
          <div className="anchor" id="bilder"></div>
          <section className="has-padding">
            <h3>Einblicke in die Weinernte</h3>
            <Gallery images={this.state.einblicke} />
            <div className="well align-center">
              Noch mehr Bilder gibt es auf Instagram!
            </div>
          </section>
          <div className="anchor" id="contact"></div>
          <section className="has-padding">
            <h3>Kontakt</h3>
            <Contact />
          </section>
          <footer className="footer">
            &copy; moogwein 2018
        </footer>
        </div>
      </div>
    );
  }
}

export default App;
