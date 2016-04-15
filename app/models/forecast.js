export class ForecastModel
{
    constructor(options) {
        this.date = options.date || null;
        this.temperature = options.temperature || null;
        this.weather = options.weather || null;
    }
}

export class ForecastCollection
{
    constructor() {
        this.collection = [];
    }

    add(options) {
        this.collection.push(new ForecastModel(options));
    }

    serialize() {
        return this.collection;
    }
}