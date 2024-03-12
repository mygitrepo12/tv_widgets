function getQueryParam(param) {
    let urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(param);
}
function readSymbolFromQueryString() {
    return getQueryParam('ticker');
}


var widget
function initOnReady() {
    widget = (window.tvWidget = new TradingView.widget({
        debug: true,
        fullscreen: true,
        autosize: true,
        symbol: symbol,
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'en',
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
          "studies": [
    {
        id: "MASimple@tv-basicstudies",
        inputs: {
            length: 10
            },
    },
    {
        id: "MASimple@tv-basicstudies",
        inputs: {
            length: 20
            }
    },
    {
        id: "MASimple@tv-basicstudies",
        inputs: {
            length: 50
            }
    },
    {
        id: "MASimple@tv-basicstudies",
        inputs: {
            length: 150,
            }
    },
  ],
        container_id: 'tradingview_ae7da',
    }))
   
};

window.addEventListener("DOMContentLoaded", initOnReady, false);

const symbol = readSymbolFromQueryString() || 'NASDAQ:AAPL';

