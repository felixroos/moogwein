import React from 'react';


export const Weine = (props) => (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th colSpan="3">Weine</th>
                </tr>
            </thead>
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
            <thead>
                <tr>
                    <th colSpan="3">Brände</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Rieslingtresterbrand</td>
                    <td>2 Jahre im Eichenholzfass gereift</td>
                    <td className="align-right">9,00€</td>
                </tr>
                <tr>
                    <td>Rieslingtresterbrand</td>
                    <td>5 Jahre im Eichenholzfass gereift</td>
                    <td className="align-right">13,50€</td>
                </tr>
                <tr>
                    <td>Apfelbrand</td>
                    <td>im Eichenholzfass gereift</td>
                    <td className="align-right">12,50€</td>
                </tr>
                <tr>
                    <td>Zwetschge</td>
                    <td></td>
                    <td className="align-right">12,50€</td>
                </tr>
                <tr>
                    <td>Mirabelle</td>
                    <td></td>
                    <td className="align-right">12,50€</td>
                </tr>
                <tr>
                    <td>Weinbergspfirisch</td>
                    <td>etwas Besonderes - gibt es nicht in jedem Jahr</td>
                    <td className="align-right">14,00€</td>
                </tr>
                <tr>
                    <td>Alter Zwetschgenbrand</td>
                    <td>im Eichenholzfass gereift</td>
                    <td className="align-right">14,50€</td>
                </tr>
                <tr>
                    <td>Riesling- Weinbrand</td>
                    <td>1991er Trarbacher Taubenhaus, im Eichenholzfass gereift</td>
                    <td className="align-right">15,50€</td>
                </tr>
            </tbody>
        </table>
        <div className="well align-center">
            Bestellungen per Email: <a href="mailto:moogis@arcor.de">moogis@arcor.de</a> oder per Telefon: 06541-701423
        </div>
        {/* <p>Suchen Sie einen bestimmten Jahrgang? Fragen Sie nach. Leergut nehmen wir gerne wieder zurück.</p> */}
    </div >
);
