import React, { useState, useEffect, useMemo } from "react";
import { APIProvider, Map, useMap, Marker } from "@vis.gl/react-google-maps";
import { GoogleMapsOverlay as DeckOverlay } from "@deck.gl/google-maps";
import { GeoJsonLayer } from "deck.gl";

function DeckGLOverlay({ layers }) {
    const map = useMap();
    const overlay = useMemo(() => new DeckOverlay({ layers }), [layers]);

    useEffect(() => {
        if (map) {
            overlay.setMap(map);
        }
        return () => overlay.setMap(null);
    }, [map, overlay]);

    return null;
}

export const MapWrapper = ({ stations, isAdmin }) => {
    const [pathData, setPathData] = useState(null);
    const [currPoint, setCurrPoint] = useState(null);

    useEffect(() => {
        if (!window.google) return;

        const directionsService = new window.google.maps.DirectionsService();

        let request = null;

        if (!isAdmin) {
            request = {
                origin: {
                    lat: Number(stations[0].station.latitude),
                    lng: Number(stations[0].station.longitude),
                },
                destination: {
                    lat: Number(stations[stations.length - 1].station.latitude),
                    lng: Number(
                        stations[stations.length - 1].station.longitude
                    ),
                },
                travelMode: window.google.maps.TravelMode.DRIVING,
            };
        }

        directionsService.route(request, (result) => {
            const route = result.routes[0].overview_path.map((p) => [
                p.lng(),
                p.lat(),
            ]);
            setPathData({
                type: "FeatureCollection",
                features: [
                    {
                        type: "Feature",
                        geometry: {
                            type: "LineString",
                            coordinates: route,
                        },
                        properties: {},
                    },
                ],
            });
        });
    }, []);

    const layers = useMemo(() => {
        if (!pathData) return [];
        return [
            new GeoJsonLayer({
                id: "geojson-layer",
                data: pathData,
                pickable: true,
                stroked: true,
                filled: true,
                lineWidthScale: 2,
                lineWidthMinPixels: 2,
                getLineColor: [255, 0, 0],
                getLineWidth: 2,
            }),
        ];
    }, [pathData]);

    const handleMapClick = (event) => {
        const lat = event.detail.latLng.lat;
        const lng = event.detail.latLng.lng;
        setCurrPoint({ lat, lng });
        console.log(lat, lng);
    };

    return (
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <Map
                style={{
                    width: !isAdmin ? "700px" : "400px",
                    height: !isAdmin ? "500px" : "250px",
                }}
                defaultCenter={{ lat: 42.7044223, lng: 19.3957785 }}
                defaultZoom={!isAdmin ? 8.3 : 7}
                gestureHandling={"greedy"}
                disableDefaultUI={true}
                mapId={"montenegro-bus-transportation"}
                onClick={(e) => handleMapClick(e)}
            >
                {stations.map((station) => (
                    <Marker
                        key={station.station.nazivStanice}
                        position={{
                            lat: Number(station.station.latitude),
                            lng: Number(station.station.longitude),
                        }}
                    />
                ))}
                {isAdmin && currPoint ? (
                    <Marker
                        position={{
                            lat: currPoint.lat,
                            lng: currPoint.lng,
                        }}
                    />
                ) : null}
                <DeckGLOverlay layers={layers} />
            </Map>
        </APIProvider>
    );
};
