import { useCallback, useState } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';

const Map = ({ searchResults }) => {
  const coordinates = searchResults.map((i) => ({
    latitude: i.lat,
    longitude: i.long,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  const [selected, setSelected] = useState({});

  const handleChange = useCallback((nextViewport) => {
    setViewport(nextViewport);
  }, []);

  return (
    <ReactMapGl
      mapStyle="mapbox://styles/neil-140301/cksoqu3kb8u0a17k0syxvep4b"
      mapboxApiAccessToken={process.env.mapboxKey}
      {...viewport}
      onViewportChange={handleChange}
    >
      {searchResults.map((i) => (
        <div key={i.long} className="">
          <Marker
            longitude={i.long}
            latitude={i.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelected(i)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {selected.long === i.long && (
            <Popup
              closeOnClick
              onClose={() => setSelected({})}
              latitude={i.lat}
              longitude={i.long}
            >
              {i.title}
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGl>
  );
};

export default Map;
