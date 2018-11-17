import React from 'react';

export const Weine = (props) => (
    <section className="has-padding" id="weine">
        <h3>Unsere Lagen</h3>
        <div data-grid>
            <div data-col="auto" className="column">
                <div className="img-crop-golden">
                    <img alt="" className="img_full" src="http://www.weingut-moog.de/resources/_wsb_500x501_Unterburg.jpg" />
                </div>
                <p>Blick aus dem Weinberg auf die Mosel und den Nachbarort Enkirch</p>
            </div>
            <div data-col="auto" className="column">
                <div className="img-crop-golden">
                    <img alt="" className="img_full" src="http://www.weingut-moog.de/resources/_wsb_500x375_Kr$C3$A4uterhaus+gr$C3$BCn.JPG" />
                </div>
                <p>Nicht nur der Winzer erwartet die Reifung der Trauben, die Vögel aus Nachbars Garten, die Rehe, ja sogar Wildschweine mussten schon vertrieben werden.</p>
            </div>
            <div data-col="auto" className="column">
                <div className="img-crop-golden">
                    <img alt="" className="img_full" src="http://www.weingut-moog.de/resources/_wsb_500x281_Laach+Netze.JPG" />
                </div>
                <p>Ein letzter einsamer Weinberg in diesem Teil, dessen Trauben, aber auch die jungen Triebe vor ungebetenen Gästen (Vögel, Rehe, Wildschweine) geschützt werden müssen.</p>
            </div>
            <div data-col="auto" className="column">
                <div className="img-crop-golden">
                    <img alt="" className="img_full" src="http://www.weingut-moog.de/resources/_wsb_500x281_Netze+Traben.jpg" />
                </div>
                <p>Weinberg unterm Vogelschutz</p>
            </div>
        </div>
        <h3>Weine &amp; Brände</h3>
        <table className="table">
            {/* <thead>
                <tr>
                    <th colspan="2">Weine</th>
                </tr>
            </thead> */}
            <tbody>
                <tr>
                    <td>Trarbacher Schlossberg</td>
                    <td>Qualitätswein</td>
                    <td className="align-right">5,80€</td>
                </tr>
                <tr>
                    <td>Trabener Kräuterhaus</td>
                    <td>Riesling - Kabinett</td>
                    <td className="align-right">6,20€</td>
                </tr>
                <tr>
                    <td>Trabener Gaispfad</td>
                    <td>Riesling  - Spätlese </td>
                    <td className="align-right">9,20€</td>
                </tr>
                <tr>
                    <td>Trarbacher Gaispfad</td>
                    <td>Riesling - Auslese</td>
                    <td className="align-right">9,20€</td>
                </tr>
            </tbody>
            {/* <thead>
                <tr>
                    <th colspan="2">Brände</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>..</td>
                    <td>...</td>
                </tr>
            </tbody> */}
        </table>
        <p>Suchen Sie einen bestimmten Jahrgang? Fragen Sie nach. Leergut nehmen wir gerne wieder zurück.</p>
        <p>Kontakt: Weingut Moog - Im Faller 21 - 56841 Traben-Trarbach - Tel: 06541-701423</p>
    </section>
);
