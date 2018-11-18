import React, { Component } from 'react';
import './App.scss';
import { Weine } from './components/Weine';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Toolbar } from './components/Toolbar';
import { Header } from './components/Header';
import bucket from './img/photos/DSC_0863.jpg';
import netz from './img/photos/netz.jpg';
import trauben from './img/photos/DSC_1721.jpg';
/* import wein from './img/photos/moogwein.jpg'; */
/* import gaispfad from './img/photos/gaispfad.jpg';
import kraeuterhaus from './img/photos/kraeuterhaus.jpg';
import schlossberg from './img/photos/schlossberg.jpg'; */
import grazien from './img/photos/grazien.jpg';
import keller from './img/photos/keller.png';
import faesser from './img/photos/faesser.jpg';
import fass from './img/photos/fass.jpg';
/* import huette from './img/photos/huette.jpg';
import messung from './img/photos/messung.jpg';
import tisch from './img/photos/tisch.jpg'; */

import lage1 from './img/photos/P1070630.JPG';
import lage2 from './img/photos/P1070880.JPG';
/* import lage3 from './img/photos/P1020229.JPG'; */
import lage4 from './img/photos/20152015.jpg';


class App extends Component {

  constructor() {
    super();
    this.state = {
      showMenu: false,
      showDialog: false,
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
        },/* 
        {
          src: wein,
        },
        {
          src: tisch
        }, */
      ],
      lagen: [
        {
          src: lage1,
          caption: 'Kräuterhaus'
        },
        {
          src: lage4,
          caption: 'Schlossberg'
        },
        {
          src: lage2,
          caption: 'Gaispfad'
        },/* 
        {
          src: lage3,
        }, */
      ]
    }
  }

  render() {


    return (
      <div className="container">
        <Toolbar items={this.state.menuItems} />
        <div className="content" data-container>
          <Header />
          <div className="anchor" id="weine"></div>
          <section className="has-padding">
            <h3>
              Unsere Weine &amp; Brände
              </h3>
            <Gallery images={this.state.lagen} columns="3" />
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
          <div className="anchor" id="about"></div>
          <section className="has-padding">
            <h3>Unsere Geschichte</h3>
            <About />
          </section>
          {/* <section className="has-padding" id="weine">
            <h3>Im Weinkeller</h3>
            <Gallery images={this.state.weine} columns="3" crop="4-3" />
          </section> */}
          <div className="anchor" id="contact"></div>
          <section className="has-padding">
            <h3>Kontakt</h3>
            <div className="well" data-grid>
              <div data-col="6">
                <p>
                  <strong>Impressum:</strong><br />
                  Weingut Moog<br />
                  (Jürgen Moog)<br />
                  Im Faller 21<br />
                  56841 Traben -Trarbach/ Mosel<br />
                  Tel: 06541 - 70 14 23<br />
                  <a href="mailto:moogis@arcor.de">moogis@arcor.de</a>
                </p>
              </div>
              <div data-col="6">
                <p>
                  <strong>Website:</strong><br />
                  Gestaltung und Programmierung: Felix Roos<br />
                  Fotos: Glenn Zimmer<br />
                  {/* Hosted on github<br /> */}
                  <a href="#contact" onClick={() => this.setState({ showDialog: !this.state.showDialog })}>
                    Datenschutzerklärung anzeigen
                  </a>
                </p>
              </div>
            </div>
            <div className={`dialog${this.state.showDialog ? ' is-active' : ''}`}>
              <div className="dialog-body">
                <strong>Allgemeine Datenschutzerklärung</strong>
                <p>Durch die Nutzung unserer Website erklären Sie sich mit der Erhebung, Verarbeitung und Nutzung von Daten gemäß der nachfolgenden Beschreibung einverstanden. Unsere Website kann grundsätzlich ohne Registrierung besucht werden. Dabei werden Daten wie beispielsweise aufgerufene Seiten bzw. Namen der abgerufenen Datei, Datum und Uhrzeit zu statistischen Zwecken auf dem Server gespeichert, ohne dass diese Daten unmittelbar auf Ihre Person bezogen werden. Personenbezogene Daten, insbesondere Name, Adresse oder E-Mail-Adresse werden soweit möglich auf freiwilliger Basis erhoben. Ohne Ihre Einwilligung erfolgt keine Weitergabe der Daten an Dritte.</p>
                <strong>Haftungsausschluss</strong>
                <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
                für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
              </div>
              <footer className="dialog-footer">
                <a href="#contact" onClick={() => this.setState({ showDialog: !this.state.showDialog })}>schließen</a>
              </footer>
            </div>
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
