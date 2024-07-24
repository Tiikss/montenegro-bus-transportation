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

const MapWrapper = () => {
    return (
        <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY}>
            <Map
                style={{ width: "700px", height: "500px" }}
                defaultCenter={{ lat: 42.7044223, lng: 19.3957785 }}
                defaultZoom={8.3}
                gestureHandling={"greedy"}
                disableDefaultUI={true}
                mapId={"montenegro-bus-transportation"}
            >
                <Marker position={{ lat: 42.44111, lng: 19.26361 }} />
                <AdvancedMarker position={{ lat: 42.099998, lng: 19.1 }}>
                    <Pin
                        background={"#FBBC04"}
                        glyphColor={"#000"}
                        borderColor={"#000"}
                    />
                </AdvancedMarker>
            </Map>
        </APIProvider>
    );
};

export default MapWrapper;
