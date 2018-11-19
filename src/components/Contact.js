import React, { Component } from 'react';
import messer from '../img/messer.png';

export class Contact extends Component {

    constructor() {
        super();
        this.state = {
            showDialog: false
        };
    }
    render() {
        return (
            <div>
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
                        <p>
                            <strong>Website:</strong><br />
                            Gestaltung und Programmierung: Felix Roos<br />
                            Fotos: Uschi Moog, Header: Glenn Zimmer<br />
                            <a href="#contact" onClick={() => this.setState({ showDialog: !this.state.showDialog })}>
                                Datenschutzerklärung anzeigen
                  </a>
                        </p>
                    </div>
                    <div data-col="6">
                        <img src={messer} alt="messer" className="img_responsive"></img>
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
            </div>);
    }
}