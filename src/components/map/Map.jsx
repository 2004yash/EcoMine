import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Polygon, Marker, InfoWindow } from '@react-google-maps/api';

const mapStyles = {
  height: "100vh",
  width: "100%",
};

const center = {
  lat: 20.5937, // Center of India
  lng: 78.9629,
};

const Map = () => {
  const [trees, setTrees] = useState(0);
  const [areaRequired, setAreaRequired] = useState(0);
  const [selectedArea, setSelectedArea] = useState([]);
  const [infoOpen, setInfoOpen] = useState(false);
  const [infoPosition, setInfoPosition] = useState(null);

  // Mock data for potential afforestation areas
  const potentialAreas = [
    { id: 1, name: "Area 1", center: { lat: 19.5937, lng: 78.9629 }, area: 100000 }, // in square meters
    { id: 2, name: "Area 2", center: { lat: 21.5937, lng: 78.9629 }, area: 50000 },
    { id: 3, name: "Area 3", center: { lat: 22.5937, lng: 79.9629 }, area: 200000 },
  ];

  useEffect(() => {
    setAreaRequired(trees * 10); // Assume 10 square meters per tree
  }, [trees]);

  const handleTreeInput = (event) => {
    setTrees(event.target.value);
  };

  const findSuitableAreas = () => {
    const suitableAreas = potentialAreas.filter(area => area.area >= areaRequired);
    setSelectedArea(suitableAreas);
  };

  const handleMarkerClick = (area) => {
    setInfoPosition(area.center);
    setInfoOpen(true);
  };

  const handleDirectionsClick = (center) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="map-container">
      <h1>EcoMines: Afforestation Area Finder</h1>
      <input 
        type="number" 
        placeholder="Enter number of trees" 
        value={trees} 
        onChange={handleTreeInput} 
      />
      <button onClick={findSuitableAreas}>Find Areas</button>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={5}
          center={center}
        >
          {selectedArea.map(area => (
            <Marker 
              key={area.id} 
              position={area.center} 
              onClick={() => handleMarkerClick(area)} 
            />
          ))}
          {infoOpen && infoPosition && (
            <InfoWindow
              position={infoPosition}
              onCloseClick={() => setInfoOpen(false)}
            >
              <div>
                <h3>{selectedArea.find(a => a.center === infoPosition)?.name || "Suitable Area"}</h3>
                <p>Click for directions</p>
                <button onClick={() => handleDirectionsClick(infoPosition)}>Get Directions</button>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
