import AbstractReducer from 'core/reducer';

class DashboardReducer extends AbstractReducer
{
    getKeyName() {
        return 'app';
    }

    getReducersMap() {
        return {
            'app/vendor': this.vendor,
            'app/fetch': this.fetch
        };
    }

    vendor(state, action) {
        return {
            ...state,
            vendor: action.payload
        };
    }

    fetch(state, action) {
        if(!action.error) return {
            ...state,
            forecast: action.payload
        };
        else return state;
    }
}

export default new DashboardReducer;