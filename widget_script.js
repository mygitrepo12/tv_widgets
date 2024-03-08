    new TradingView.widget(
        {
            "container_id": "tv-chart",
            "width": "100%",
            "height": "100%",
            "autosize": true,
            "symbol": "CHKP",
            "interval": "D",
            "timezone": "exchange",
            "theme": "dark",
            "style": "1",
            "withdateranges": true,
            "hide_side_toolbar": false,
            "allow_symbol_change": true,
            "save_image": false,
            "studies": [
                "ROC@tv-basicstudies",
                "StochasticRSI@tv-basicstudies",
                "MASimple@tv-basicstudies"
            ],
            "show_popup_button": true,
            "popup_width": "1000",
            "popup_height": "650",
            "support_host": "https://www.tradingview.com"

        }
    )
