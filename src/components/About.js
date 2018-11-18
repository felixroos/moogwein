import React from 'react';
import messer from '../img/messer.png';

export const About = (props) => (
    <div data-col="12">
        <p>
            Unser Weingut Moog ist aus einem kleinen Mischbetrieb mit Viehhaltung, Acker- und Weinbau entstanden, so wie es früher an der Mosel üblich war.
        </p>
        <p>
            Anfang der sechziger Jahre konzentrierte sich mein Vater auf den Weinbau und führte den Betrieb, bis er aus gesundheitlichen Gründen die Arbeit nicht mehr leisten konnte. Ich stand nun vor der Frage: „Was geschieht mit den Weinbergen?“ Das Weingut ist zu klein, um im Vollerwerb weitergeführt zu werden, aber aufgeben wollte ich die Weinberge nicht. Da mir die Arbeit mit den Reben und den Trauben im Keller viel Freude bereitet, bearbeite ich nun noch einen kleinen Teil der ursprünglichen Fläche in ökologischer Wirtschaftsweise.
        </p>
        <p>
        Durch die Mithilfe und Unterstützung aus dem Freundeskreis ist es mir möglich, drei Parzellen in den Lagen Trarbacher Schlossberg,Trabener Kräuterhaus und Trabener Gaispfad zu bewirtschaften und zu erhalten. In diesem Zusammenhang steht auch die Mitarbeit im <a href="http://www.klitzekleinerring.de/" target="_blank">„klitzekleinen Ring“</a>. Diese Vereinigung von Winzern hat es sich zur Aufgabe gemacht, wertvolle Steillagen an der Mosel weiter zu bearbeiten, die ansonsten aufgegeben würden.
        </p>
        <p>
            Im Herbst treffen sich Bekannte und Freunde bei uns zur Weinlese und immer wieder bringt jemand noch einen Freund mit, der im nächsten Jahr wiederum jemanden mitbringt, der wiederum...
        </p>
        <div className="align-center">
            <img src={messer} alt="messer" className="img_responsive"></img>
        </div>
    </div>
);
