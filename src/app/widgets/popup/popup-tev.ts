
export class PopupTeV {

  private source;
  // private catalogName;

  getDesc() {

    // This function returns the whole template to be displayed in the
    // MapComponent's popups.

    return `

      <style>
      .aladin-popup {
        width: 280px;
        text-align: left;
      }

      table, table tbody {
        width: 270px;
        text-align: left;
      }

      table th {
        height: 30px;
      }

      </style>

      <div>

        <h4 style='text-align:center'>` + this.source.name + `</h4>

          <table>
            <tbody>
              <tr>
                <td>RA:</td>
                <th>` + this.source.ra + `</th>
                <td>DEC:</td>
                <th>` + this.source.dec + `</th>
              </tr>
              <tr>
                <td>GLON:</td>
                <th>` + this.source.glon + `</th>
                <td>GLAT:</td>
                <th>` + this.source.glat + `</th>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td>Gamma names:</td>
                <th style='width:170px'>` + this.source.gammaNames + `</th>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td>Other names:</td>
                <th style='width:170px'>` + this.source.otherNames + `</th>
              </tr>
            </tbody>
          </table>

        </div>

    `;
  }

  constructor(source) {
    this.source = source;
    // this.catalogName = catalogName;
  }

}
