const generateMockData = function (keyword, noOfRows, noOfColumns) {
    keyword = keyword ?? 'user';
    noOfRows = noOfRows ?? 10;
    noOfColumns = noOfColumns ?? 3;

    const dataresponse = [];
    for (let i = 0; i < noOfRows; i++) {
        const data = {};
        for (let j = 0; j < noOfColumns; j++) {
            data[keyword + 'col' + j] = 'Data_col_' + j;
        }
        dataresponse.push(data);
    }
    return dataresponse;
}

const generateMockDataBasedOnInput = function (reqBody) {
    const keyword = reqBody.hasOwnProperty('keyword') ? reqBody.keyword : 'user';
    const rows = reqBody.hasOwnProperty('rows') ? reqBody.rows : 50;
    const cols = reqBody.hasOwnProperty('rows') ? reqBody.cols : 5;
    let columnNames = reqBody.hasOwnProperty('columnNames') ? reqBody.columnNames : [];

    generateColumns(cols, columnNames, keyword);
    const response = [];
    for (let i = 0; i < rows; i++) {
        const data = {};
        columnNames.forEach(el => {
            if (el.type === 'date') {
                data[el.columnName] = getDate();
            } else if (el.type === 'number') {
                data[el.columnName] = (Math.random() * 10000).toFixed(2);
            } else {
                data[el.columnName] = el.columnName+'_col' + i;
            }
        });
        response.push(data);
    }
    return response;
}

function generateColumns(columns, columnNames, keyword) {
    const colLen = columnNames.length;
    if (columns > colLen) {
        for (let r = colLen; r < columns; r++) {
            columnNames.push({ columnName: keyword + 'col' + r, type: 'string' });
        }
    } else if (colLen === 0) {
        for (let r = 0; r < columns; r++) {
            columnNames.push({ columnName: keyword + 'col' + r, type: 'string' });
        }
    }
}

function getDate() {
    const date = new Date();
    return date.getDate() + '-' + date.getMonth() + 1 + '-' + date.getFullYear();
}

module.exports = {
    generateMockData,
    generateMockDataBasedOnInput
}