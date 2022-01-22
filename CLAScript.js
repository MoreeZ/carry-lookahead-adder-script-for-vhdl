fs = require('fs');
fs.writeFile('CLAOutput.txt', writeAll(32), function(err) {
    if (err) return console.log(err);
});

function writeAll(lines) {
    let result = "";
    for (let i = 1; i <= lines; i++) {
        result += writePart(i);
        result += "\n";
    }
    return result;
}

function writePart(gsize) {
    let result = `c${gsize} <= `;
    for (let j = 0; j <= (gsize - 1); j++) {
        result += printG(gsize, j);

        if (j != gsize - 1) {
            result += " OR "
        }
    }
    result += " OR "
    result += printLastStr(gsize);

    return result += ";";
}

function printLastStr(gsize) {
    str = "(";
    for (let i = gsize - 1; i >= 0; i--) {
        str += `P(${i})`

        str += " AND "
    }
    str += "Cin)"
    return str;
}

function printG(gsize, index) {
    let str = "(";
    str += `G(${gsize - (index+1)})`;
    if (index != 0) {
        str += " AND "
    }
    for (let i = gsize - 1; i > (gsize - 1 - index); i--) {
        str += `P(${i})`;
        if (i != (gsize - index)) {
            str += " AND "
        }
    }
    return str + ")";
}

// console.log(writeAll(32));