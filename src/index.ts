import User from './User';
import Company from './Company';
import CustomMap from './CustomMap';

const user = new User();
const company = new Company();

const mapContainer: Element = document.getElementById('map');
const map = new CustomMap(mapContainer);

map.addMarker(user);
map.addMarker(company);
