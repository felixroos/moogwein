import React from 'react';

export const Weine = (props) => (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th className="align-left" colSpan="2">Weinpreisliste 2018</th>
                    <th className="align-right"><small>0.75l</small></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Trabener Kräuterhaus 2016</td>
                    <td>Riesling - Qualitätswein - trocken</td>
                    <td className="align-right">6,80€</td>
                </tr>
                <tr>
                    <td>Trarbacher Schloßberg 2016</td>
                    <td>Riesling - Kabinett - feinherb</td>
                    <td className="align-right">7,80€</td>
                </tr>
                <tr>
                    <td>Trabener Gaispfad 2016</td>
                    <td>Riesling - Spätlese</td>
                    <td className="align-right">12,50€</td>
                </tr>
                <tr>
                    <td>Trabener Kräuterhaus 2017</td>
                    <td>Riesling - Kabinett - trocken</td>
                    <td className="align-right">7,50€</td>
                </tr>
                <tr>
                    <td>Trarbacher Schloßberg 2017</td>
                    <td>Riesling - Kabinett - feinherb</td>
                    <td className="align-right">8,00€</td>
                </tr>
                <tr>
                    <td>Trabener Gaispfad 2017</td>
                    <td>Riesling - Spätlese</td>
                    <td className="align-right">12,50€</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th className="align-left" colSpan="2">Edelbrände <small>aus eigenem Wein-und Obstbau</small></th>
                    <th className="align-right"><small>0,5l</small></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Rieslingtresterbrand</td>
                    <td>2 Jahre im Eichenholzfass gereift</td>
                    <td className="align-right">9,50€</td>
                </tr>
                <tr>
                    <td>Rieslingtresterbrand</td>
                    <td>5 Jahre im Eichenholzfass gereift</td>
                    <td className="align-right">14,50€</td>
                </tr>
                <tr>
                    <td>Apfelbrand</td>
                    <td>im Eichenholzfass gereift</td>
                    <td className="align-right">13,50€</td>
                </tr>
                <tr>
                    <td>Mirabelle</td>
                    <td></td>
                    <td className="align-right">14,50€</td>
                </tr>
                <tr>
                    <td>Weinbergspfirisch</td>
                    <td></td>
                    <td className="align-right">14,50€</td>
                </tr>
                <tr>
                    <td>Alter Zwetschgenbrand</td>
                    <td>im Eichenholzfass gereift</td>
                    <td className="align-right">14,50€</td>
                </tr>
                <tr>
                    <td>Riesling- Weinbrand</td>
                    <td>1991er Trarbacher Taubenhaus, im Eichenholzfass gereift</td>
                    <td className="align-right">15,00€</td>
                </tr>
            </tbody>
        </table>
        <div className="well align-center">
            Bestellungen per Email: <a href="mailto:moogis@arcor.de">moogis@arcor.de</a> oder per Telefon: 06541-701423
        </div>
    </div>
);
