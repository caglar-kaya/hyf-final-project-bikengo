import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import PropTypes from "prop-types";
import bikeMarker from "../../assets/logo/Logo.png";
import "./MapGl.css";
const MapGl = ({ bikes, boolean, viewport, setViewport }) => {
  const mapContainer = useRef();
  const settings = {
    scrollZoom: true,
    boxZoom: true,
    dragRotate: true,
    dragPan: true,
    keyboard: true,
    doubleClickZoom: true,
    touchZoomRotate: true,
    touchPitch: true,
    minZoom: 0,
    maxZoom: 20,
    minPitch: 0,
    maxPitch: 85,
  };

  const [popupInfo, setPopupInfo] = useState(null);
  const navigate = useNavigate();
  // trigger when click on marker
  const handlePopups = (popup) => {
    setPopupInfo({ ...popup });
    setViewport({ latitude: popup.latLong[1], longitude: popup.latLong[0] });
  };
  //trigger when click on popup
  const handlePopupsClick = (id) => {
    navigate(`/results/${id}`);
  };
  const bikesOnMap = bikes.map((bike) => (
    <Marker
      key={bike._id}
      latitude={bike.latLong[1]}
      longitude={bike.latLong[0]}
      offsetLeft={-20}
      offsetTop={-10}
      onClick={() => handlePopups(bike)}
    >
      <div className="cursor-pointer">
        <span className="box-decoration-slice bg-gradient-to-r from-orange-500 to-yellow-300 text-white font-bold p-1 ...">
          €{bike.price}
        </span>
        <img
          style={{
            width: "40px",
            height: "40px",
          }}
          src={bikeMarker}
          alt="bike"
        />
      </div>
    </Marker>
  ));

  const container = mapContainer.current
    ? mapContainer.current
    : "mapContainer";
  return (
    <div className="mapGl" ref={mapContainer}>
      <Map
        container={container}
        onMove={(nextViewport) => setViewport(nextViewport)}
        {...viewport}
        mapStyle="mapbox://styles/class34bikengo/cl11bn638000p15mribbdvnnp"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...settings}
      >
        {boolean && (
          <GeolocateControl trackUserLocation={true} showUserHeading={true} />
        )}
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        {bikesOnMap}

        {popupInfo && (
          <Popup
            maxWidth="200px"
            anchor="center"
            latitude={popupInfo.latLong[1]}
            longitude={popupInfo.latLong[0]}
            closeOnClick={false}
            onClose={() => setPopupInfo(null)}
          >
            <div onClick={() => handlePopupsClick(popupInfo._id)}>
              <h3 className="text-orange-500 font-bold">{popupInfo.title}</h3>
              <p className="text-text font-semibold">
                {popupInfo.address.city}
              </p>
              <p className="text-text font-semibold">
                {popupInfo.address.street}
              </p>
              <img
                width="100%"
                src={popupInfo.photos[0]}
                alt={popupInfo.title}
              />
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};
MapGl.propTypes = {
  bikes: PropTypes.array.isRequired,
  boolean: PropTypes.bool.isRequired,
  viewport: PropTypes.object.isRequired,
  setViewport: PropTypes.func.isRequired,
};
export default MapGl;
