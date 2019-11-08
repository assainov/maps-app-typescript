export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    getMarkerContent(): string;
}

export default class CustomMap {
    constructor(mapDiv: Element) {
        this.createNewMap(mapDiv);
    }

    addMarker(entity: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.map,
            position: entity.location
        });

        const infoWindow = new google.maps.InfoWindow({
            content: entity.getMarkerContent()
        });

        marker.addListener('click', () => {
            this.infoWindows.forEach(window => window.close());

            infoWindow.open(this.map, marker);
        });

        this.markers.push(marker);
        this.infoWindows.push(infoWindow);
    }

    private map: google.maps.Map;
    private markers: google.maps.Marker[] = [];
    private infoWindows: google.maps.InfoWindow[] = [];

    private createNewMap(mapDiv: Element): void {
        this.map = new google.maps.Map(mapDiv, {
            zoom: 2,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
}
