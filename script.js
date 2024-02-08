let fields = [
  null, null, null,
  null, null, null,
  null, null, null
];

let currentPlayer = 'cross';

function init() {
    render();
}

function render() {
  let contentDiv = document.getElementById("content");
  let table = "<table>";
  for (let i = 0; i < 3; i++) {
    table += "<tr>";
    for (let j = 0; j < 3; j++) {
      let index = i * 3 + j;
      let symbol = fields[index];
      let tdContent = symbol ? (symbol === "cross" ? generateCrossSVG() : generateCircleSVG()) : "";
      table += `<td id="cell-${index}" onclick="handleCellClick(${index})">${tdContent}</td>`;
    }
    table += "</tr>";
  }
  table += "</table>";
  contentDiv.innerHTML = table;
}

function handleCellClick(index) {
  if (!fields[index]) {
    fields[index] = currentPlayer;
    document.getElementById(`cell-${index}`).innerHTML = currentPlayer === 'cross' ? generateCrossSVG() : generateCircleSVG();
    document.getElementById(`cell-${index}`).onclick = null;
    currentPlayer = currentPlayer === 'cross' ? 'circle' : 'cross'; // Wechseln zum anderen Spieler
  }
}

  function generateCircleSVG() {
    const svgWidth = 70;
    const svgHeight = 70;
    const circleColor = "#00b0ef";
  
    const svgCode = `
      <svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${svgWidth / 2}" cy="${svgHeight / 2}" r="${svgWidth / 2 - 2}" fill="none" stroke="${circleColor}" stroke-width="4">
          <animate attributeName="r" from="0" to="${svgWidth / 2 - 2}" dur="0.5s" fill="freeze" />
        </circle>
      </svg>
    `;
  
    return svgCode;
  }
  
  function generateCrossSVG() {
    const svgWidth = 70;
    const svgHeight = 70;
    const crossColor = "#ffc000";
    const strokeWidth = 5;
  
    const svgCode = `
      <svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 L60 60" fill="none" stroke="${crossColor}" stroke-width="${strokeWidth}" stroke-dasharray="${Math.sqrt(Math.pow(svgWidth, 2) + Math.pow(svgHeight, 2))}" stroke-dashoffset="${Math.sqrt(Math.pow(svgWidth, 2) + Math.pow(svgHeight, 2))}">
          <animate attributeName="stroke-dashoffset" from="${Math.sqrt(Math.pow(svgWidth, 2) + Math.pow(svgHeight, 2))}" to="0" dur="0.5s" fill="freeze" />
        </path>
        <path d="M10 60 L60 10" fill="none" stroke="${crossColor}" stroke-width="${strokeWidth}" stroke-dasharray="${Math.sqrt(Math.pow(svgWidth, 2) + Math.pow(svgHeight, 2))}" stroke-dashoffset="${Math.sqrt(Math.pow(svgWidth, 2) + Math.pow(svgHeight, 2))}">
          <animate attributeName="stroke-dashoffset" from="${Math.sqrt(Math.pow(svgWidth, 2) + Math.pow(svgHeight, 2))}" to="0" dur="0.5s" fill="freeze" />
        </path>
      </svg>
    `;
  
    return svgCode;
  }
 
  
  
  
 
  
  