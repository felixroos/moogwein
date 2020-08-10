import React from 'react';

export const Weine = props => (
  <div>
    <table className="table">
      <thead>
        <tr>
          <th className="align-left" colSpan="2">
            Preisliste {new Date().getFullYear()}
          </th>
          <th className="align-right">
            <strong>0.75l</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
                    <td>Trabener Kräutershaus 2017</td>
                    <td>Riesling - Qualitätswein - trocken</td>
                    <td className="align-right">7,50€ <br/><small>10€/l</small></td>
                </tr> */}
        <tr>
          <td>Trabener Gaispfad 2018</td>
          <td>Riesling - Spätlese</td>
          <td className="align-right">
            12,50€ <br />
            <small>16,67€/l</small>
          </td>
        </tr>
        {/* <tr>
                    <td>Trabener Kräuterhaus 2018</td>
                    <td>Riesling - Kabinett - trocken</td>
                    <td className="align-right">7,50€ <br/><small>10€/l</small></td>
                </tr> */}
        <tr>
          <td>Trarbacher Schlossberg 2019</td>
          <td>Riesling - Kabinett - feinherb</td>
          <td className="align-right">
            8,00€ <br />
            <small>10,67€/l</small>
          </td>
        </tr>
        <tr>
          <td>Trabener Gaispfad 2019</td>
          <td>Riesling - Spätlese - feinherb</td>
          <td className="align-right">
            12,50€ <br />
            <small>16,67€/l</small>
          </td>
        </tr>
        <tr>
          <td>reifere Jahrgänge, z.B. 1999er Trarbacher Schlossberg</td>
          <td>Riesling - Spätlese - halbtrocken</td>
          <td className="align-right">
            10,00€ <br />
            <small>13,33€/l</small>
          </td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th className="align-left" colSpan="2">
            Edelbrände <small>aus eigenem Wein-und Obstbau</small>
          </th>
          <th className="align-right">
            <strong>0,5l</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rieslingtresterbrand</td>
          <td>2 Jahre im Eichenholzfass gereift</td>
          <td className="align-right">
            9,50€ <br />
            <small>19€/l</small>
          </td>
        </tr>
        <tr>
          <td>Rieslingtresterbrand</td>
          <td>5 Jahre im Eichenholzfass gereift</td>
          <td className="align-right">
            14,50€ <br />
            <small>29€/l</small>
          </td>
        </tr>
        <tr>
          <td>Rieslingtresterbrand</td>
          <td>10 Jahre im Eichenholzfass gereift</td>
          <td className="align-right">
            23,50€ <br />
            <small>47€/l</small>
          </td>
        </tr>
        <tr>
          <td>Apfelbrand</td>
          <td>im Eichenholzfass gereift</td>
          <td className="align-right">
            14,00€ <br />
            <small>28€/l</small>
          </td>
        </tr>
        <tr>
          <td>Quitte</td>
          <td />
          <td className="align-right">
            14,50€ <br />
            <small>29€/l</small>
          </td>
        </tr>
        <tr>
          <td>Mirabelle</td>
          <td />
          <td className="align-right">
            14,50€ <br />
            <small>29€/l</small>
          </td>
        </tr>
        <tr>
          <td>Weinbergspfirsich</td>
          <td />
          <td className="align-right">
            14,50€ <br />
            <small>29€/l</small>
          </td>
        </tr>
        <tr>
          <td>Alter Zwetschgenbrand</td>
          <td>im Eichenholzfass gereift</td>
          <td className="align-right">
            14,50€ <br />
            <small>29€/l</small>
          </td>
        </tr>
        <tr>
          <td>Riesling- Weinbrand</td>
          <td>1991er Trarbacher Taubenhaus, im Eichenholzfass gereift</td>
          <td className="align-right">
            16,50€ <br />
            <small>33€/l</small>
          </td>
        </tr>
      </tbody>
    </table>
    <div className="well align-center">
      Bestellungen per Email:{' '}
      <a href="mailto:moogis@arcor.de">moogis@arcor.de</a> oder per Telefon:
      06541-701423
    </div>
  </div>
);
