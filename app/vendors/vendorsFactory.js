import YahooVendor from 'vendor/yahooVendor';
import OwmVendor from 'vendor/owmVendor';

import Container from 'core/container';

export default class VendorsFactory
{
    constructor() {
        this.config = Container.get('config');
        this.vendors = {
            yahoo: YahooVendor,
            owm: OwmVendor
        }
    }

    produce(code) {
        return this.vendors[code] || this.vendors[this.config.api.default];
    }
}