import React from 'react';
import { Button, message } from 'antd';
import QRCode from 'react-qr-code';

const QRCodeGenerator = ({ petId }) => {
  const baseUrl = 'http://localhost:5173/pet-details';

  if (!petId) {
    return <div>El ID de la mascota es inválido.</div>;
  }

  const generateUrlWithId = () => {
    return `${baseUrl}/${petId}`;
  };

  const downloadQRCode = () => {
    const svg = document.getElementById('qr-code').querySelector('svg');
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const svgBlob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `QRCode-${petId}.svg`;
    link.click();
    URL.revokeObjectURL(url); // Liberar la memoria

    message.success('Código QR descargado exitosamente.');
  };

  return (
    <div>
      <div style={{ marginTop: '20px' }} id="qr-code">
        <QRCode value={generateUrlWithId()} size={160} />
      </div>
      <Button type="primary" onClick={downloadQRCode} style={{ marginTop: '20px' }}>
        Descargar Código QR
      </Button>
    </div>
  );
};

export default QRCodeGenerator;
