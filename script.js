// function insert_Row() {
//     //Write your code here
// 	const table = document.querySelector("#sampleTable");
// 	const tabr = document.createElement("tr");
// 	tabr.innerHTML = `<td>New Cell1</td>
// 	<td>New Cell2</td>`
// 	table.prepend(tabr);  
  
  
// }

function insert_Row() {

  const tbody = document
    .getElementById("sampleTable")
    .tBodies[0];

  const row = document.createElement("tr");

  row.innerHTML = "<td>New Cell1</td><td>New Cell2</td>";

  tbody.prepend(row);
}

