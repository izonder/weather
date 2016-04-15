import WebAPI from 'core/webapi';
import Container from 'core/container';

/**
 * Abstract Vendor Class
 */
export default class AbstractVendor
{
    constructor(search) {
        this.config = Container.get('config');
        this.url = this.getUrl();
        this.search = this.resolve(search);
        this.api = WebAPI.connect(this.search, this.url);
    }

    /**
     * Getting url
     * @returns {*|string}
     */
    getUrl() {
        return this.config.api.endpoints[this.config.api.default].url;
    }

    /**
     * Resolve text in URL
     * @param search
     * @returns {*}
     */
    resolve(search) {
        return this.url.replace('##PLACEHOLDER##', encodeURIComponent(search));
    }

    /**
     * Fetch data
     * @returns {*}
     */
    async fetch() {
        let result = await this.api.exec();
        return this.preformat(result);
    }

    /**
     * Preformat data
     * @param data
     * @returns {*}
     */
    preformat(data) {
        return data;
    }
}