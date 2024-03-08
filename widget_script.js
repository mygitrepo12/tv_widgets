function getQueryParam(param) {
    let urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(param);
}
function readSymbolFromQueryString() {
    return getQueryParam('ticker');
}

const symbol = readSymbolFromQueryString() || 'NASDAQ:AAPL';
document.write("this is symbol:" + symbol);

