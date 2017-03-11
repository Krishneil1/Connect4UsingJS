var d = window.document,
    elm = d.getElementById('test'),
    html = '<table>',
    classes = d.documentElement.classNames.split(' '),
    i = 0;

for(; classes[i]; i++) {
    html += '<tr><td>' + classes[i] + '</td></tr>';
}

elm.innerHTML = html + '</table>';