import faker from 'faker';
import { Mappable } from './CustomMap';

export default class User implements Mappable {
    constructor() {
        this.name = faker.name.findName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    getMarkerContent(): string {
        return `<h2>Full name: ${this.name}</h2>`;
    }
}
