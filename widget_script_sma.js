function getQueryParam(param) {
    let urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(param);
}
function readSymbolFromQueryString() {
    return getQueryParam('ticker');
}

const symbol = readSymbolFromQueryString() || 'NASDAQ:AAPL';

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
     "studies_overrides": {
      "MASimple.plot.color.0": "rgba(255, 0, 0, 1)", // Red color for the first MASimple
      "MASimple.plot.color.1": "rgba(0, 128, 0, 1)", // Green color for the second MASimple
      // Add more overrides for additional instances
    }
        container_id: 'tradingview_ae7da',
    }))
   
};

window.addEventListener("DOMContentLoaded", initOnReady, false);



