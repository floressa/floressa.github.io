function createTable() {
    var tbl = document.body,
        tbl = document.createElement('table');

    var paneElements = document.getElementsByClassName("td");

    for (var i = 0; i < paneElements.length/4; i++) {
        var tr = pane.insertRow();
        for(var i = 0; i < 4; i++){
            if (i * 4 + j > paneElements.length) {
                break;
            }
            var td = tr.insertCell(paneElements[i*4 + j]);
            td.appendChild(document.createTextNode('Cell'));
        }
    }
    pane.appendChild(tbl);
}