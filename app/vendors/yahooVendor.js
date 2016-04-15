import AbstractVendor from 'vendor/abstractVendor';
import {ForecastCollection} from 'model/forecast';

/**
 * Yahoo Vendor Class
 */
export default class YahooVendor extends AbstractVendor
{
    constructor(search) {
        super(search);
    }

    /**
     * Getting url
     * @returns {*|string}
     */
    getUrl() {
        return this.config.api.endpoints['yahoo'].url;
    }

    /**
     * Preformat data
     * @param data
     * @returns {*}
     */
    preformat(data) {
        let collection = new ForecastCollection();//console.log(data, data.result, data.result.channel, data.result.channel.item, data.result.channel.item.forecast, Array.isArray(data.result.channel.item.forecast));
        if(data && data.query && data.query.results && data.query.results.channel && data.query.results.channel.item && data.query.results.channel.item.forecast && Array.isArray(data.query.results.channel.item.forecast)) {
            let forecast = data.query.results.channel.item.forecast;

            for(let item of forecast) {
                collection.add({
                    date: item.date,
                    temperature: [item.low, item.high].join('...'),
                    weather: item.text
                })
            }
        }
        return collection.serialize();
    }
}