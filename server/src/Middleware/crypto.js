/* Lib imports */
const axios = require('axios');

const getCryptos = async function (cmids) {
    const data = {
        ids: cmids
    };
    const parameters = new URLSearchParams(data).toString();
    return await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&" + parameters + "&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h")
        .then(async function (res) {
            var result = [];

            for (var i in res.data) {
                result.push(res.data[i]);
            }
            var newResult = [];
            result.forEach(async function (item) {
                newResult.push({
                    "id": item.id,
                    "symbol": item.symbol,
                    "name": item.name,
                    "logo": item.image,
                    "price_data": {
                        "price_current": item.current_price,
                        "price_low": item.low_24h,
                        "price_high": item.high_24h,
                        // "price_open": parseFloat(item.current_price),
                        "price_change_percentage_24h": item.price_change_percentage_24h,
                        "price_change_24h": item.price_change_24h
                    }
                })
            });
            return newResult;
        }).catch((err) => {
            console.error(err);
        });
}

const getAllCryptos = async function () {
    const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=15&page=1&sparkline=false&price_change_percentage=24h"
    return await axios.get(URL)
        .then(async function (res) {
            var result = [];

            for (var i in res.data) {
                result.push(res.data[i]);
            }
            var newResult = [];
            result.forEach(async function (item) {
                newResult.push({
                    "id": item.id,
                    "symbol": item.symbol,
                    "name": item.name,
                    "logo": item.image,
                    "price_data": {
                        "price_current": item.current_price,
                        "price_low": item.low_24h,
                        "price_high": item.high_24h,
                        // "price_open": parseFloat(item.current_price),
                    }
                })
            });
            return newResult;
        }).catch((err) => {
            console.error(err);
        });
}

const getCryptoByPeriod = async function (cmid, period) {
    var from = 0;
    var to = Math.round(new Date().getTime() / 1000);
    var showDate = true;

    if (period == "minute") {
        from = to - 7200 // 2 hours;
        showDate = false;
    }
    if (period == "hourly") {
        from = to - 172800 // 48 hours;
    }
    if (period == "daily") {
        from = to - 5184000 // 60 days;
    }

    const URL = `https://api.coingecko.com/api/v3/coins/${cmid}/market_chart/range?vs_currency=eur&from=${from}&to=${to}`
    return await axios.get(URL)
        .then(async function (res) {
            var result = [];

            for (var i = 0; i < res.data.prices.length; i += 1) {
                result.push({
                    time: timeConverter(res.data.prices[i][0], showDate),
                    price: res.data.prices[i][1]
                })
            }
            return result;
        }).catch((err) => {
            console.error(err);
        });
}

function timeConverter(UNIX_timestamp, showDate){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours() < 10 ? '0' + a.getHours() : a.getHours();
    var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
    var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();

    var time = ((showDate) ? date + ' ' + month + ' ' + year + ' ' : '' ) + hour + ':' + min + ':' + sec ;
    return time;
  }
  
module.exports = { getCryptos, getAllCryptos, getCryptoByPeriod };