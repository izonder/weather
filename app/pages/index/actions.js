import AbstractActions from 'core/actions';
import VendorsFactory from 'vendor/vendorsFactory';

class AppActions extends AbstractActions
{
    constructor() {
        super();

        this.vendors = new VendorsFactory();

        this.fetchAction = this.createAction('app/fetch', this.fetch.bind(this));
        this.vendorAction = this.createAction('app/vendor', this.vendor.bind(this));
    }

    fetch(code, text) {
        let Vendor = this.vendors.produce(code),
            handler = new Vendor(text);

        return handler.fetch();
    }

    vendor(code) {
        return code;
    }
}

export default new AppActions;