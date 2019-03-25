import Technology from "../artifact/Technology.js";

import TableColumns from "./TableColumns.js";

const tableRows = Object.values(Technology);

const frt = new FilteredReactTable(TableColumns, tableRows);

const filter = frt.filterElement();
ReactDOM.render(filter, document.getElementById("filter"));

const table = frt.tableElement();
ReactDOM.render(table, document.getElementById("table"));
