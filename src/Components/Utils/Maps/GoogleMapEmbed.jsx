import React from 'react';

const GoogleMapEmbed = ({ address }) => {
  // Función para generar la URL de Google Maps basada en la dirección proporcionada
  const generateMapUrl = (address) => {
    const encodedAddress = encodeURIComponent(address);
    return `https://maps.google.com/maps?q=${encodedAddress}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '400px', height: '400px', borderRadius: '10px', overflow: 'hidden' }}>
        <iframe
          title="Google Maps"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={generateMapUrl(address)}
          allowFullScreen
          style={{ border: 0 }}
        />
      </div>
    </div>
  );
};

export default GoogleMapEmbed;