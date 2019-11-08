import faker from 'faker';
import { Mappable } from './CustomMap';

export default class Company implements Mappable {
    constructor() {
        this.name = faker.company.companyName();
        this.slogan = faker.company.catchPhrase();

        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
    name: string;
    slogan: string;
    location: {
        lat: number;
        lng: number;
    };
    getMarkerContent(): string {
        return `
            <h2>Company: ${this.name}</h2>
            <p>${this.slogan}</p>
        `;
    }
}
