import React from "react";

export const Weine = (props) => (
  <div>
    <table className="table">
      <thead>
        <tr>
          <th className="align-left" colSpan="2">
            Preisliste{" "}
            {`${new Date().getFullYear() - 1}/${String(
              new Date().getFullYear()
            ).slice(2)}`}
          </th>
          <th className="align-right">
            <strong>0.75l</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Trabener Gaispfad 2020</td>
          <td>Riesling - Spätlese</td>
          <td className="align-right">
            12,50€ <br />
            <small>16,67€/l</small>
          </td>
        </tr>
        <tr>
          <td>Trabener Gaispfad 2021</td>
          <td>Riesling - Spätlese</td>
          <td className="align-right">
            9,00€ <br />
            <small>16,67€/l</small>
          </td>
        </tr>
        <tr>
          <td>Trarbacher Schlossberg 2022</td>
          <td>Riesling - Kabinett - feinherb</td>
          <td className="align-right">
            8,00€ <br />
            <small>10,67€/l</small>
          </td>
        </tr>
        <tr>
          <td>Trabener Gaispfad 2022</td>
          <td>Riesling - Spätlese</td>
          <td className="align-right">
            12,50€ <br />
            <small>16,67€/l</small>
          </td>
        </tr>
        <tr>
          <td>
            <i>reifere Jahrgänge auf Nachfrage</i>
          </td>
          <td></td>
          <td className="align-right" style={{ color: "transparent" }}>
            .<br />
            <small>.</small>
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
          <td>Riesling Tresterbrand</td>
          <td>2 Jahre im Eichenholzfass gereift</td>
          <td className="align-right">
            10,00€ <br />
            <small>19€/l</small>
          </td>
        </tr>
        <tr>
          <td>Riesling Tresterbrand</td>
          <td>5 Jahre im Eichenholzfass gereift</td>
          <td className="align-right">
            14,50€ <br />
            <small>29€/l</small>
          </td>
        </tr>
        <tr>
          <td>Riesling Tresterbrand</td>
          <td>10 Jahre im Eichenholzfass gereift</td>
          <td className="align-right">
            23,50€ <br />
            <small>47€/l</small>
          </td>
        </tr>
        <tr>
          <td>Alter Apfelbrand</td>
          <td>5 Jahre im Eichenholzfass gereift</td>
          <td className="align-right">
            15,00€ <br />
            <small>30€/l</small>
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
          <td>Kirsche</td>
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
          <td>Weinbergpfirsich</td>
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
            15,00€ <br />
            <small>30€/l</small>
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
      Bestellungen per Email:{" "}
      <a href="mailto:moogis@arcor.de">moogis@arcor.de</a> oder per Telefon:
      06541-701423
    </div>
  </div>
);
