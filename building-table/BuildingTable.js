import Building from "../artifact/Building.js";

import TableColumns from "./TableColumns.js";

const tableRows = Object.values(Building);

const frt = new FilteredReactTable(TableColumns, tableRows);

const filter = frt.filterElement();
ReactDOM.render(filter, document.getElementById("filter"));

const table = frt.tableElement();
ReactDOM.render(table, document.getElementById("table"));
