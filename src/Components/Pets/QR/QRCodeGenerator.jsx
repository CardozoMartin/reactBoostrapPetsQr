import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import { QRCode } from 'react-qr-code';
import { Link } from 'react-router-dom'; // Importa Link de React Router
import { toPng } from 'html-to-image'; // Importa html-to-image

const MIN_SIZE = 48;
const MAX_SIZE = 300;

const QRCodeGenerator = ({ petId }) => {
  const [size, setSize] = useState(160);

  const baseUrl = 'http://localhost:5173/pet-details';

  if (!petId) {
    return <div>El ID de la mascota es inválido.</div>;
  }

  const generateUrlWithId = () => {
    return `${baseUrl}/${petId}`;
  };

  const increase = () => {
    setSize((prevSize) => {
      const newSize = prevSize + 10;
      if (newSize >= MAX_SIZE) {
        return MAX_SIZE;
      }
      return newSize;
    });
  };

  const decline = () => {
    setSize((prevSize) => {
      const newSize = prevSize - 10;
      if (newSize <= MIN_SIZE) {
        return MIN_SIZE;
      }
      return newSize;
    });
  };

  const downloadQRCode = () => {
    const qrCodeElement = document.getElementById('qr-code');
    toPng(qrCodeElement)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `QRCode-${petId}.png`;
        link.click();
        message.success('Código QR descargado exitosamente.');
      })
      .catch((error) => {
        message.error('Error al descargar el código QR.');
       
      });
  };

  return (
    <div>
      
      <Button.Group style={{ marginBottom: 10 }}>
        
      </Button.Group>
      <div style={{ marginTop: '20px' }} id="qr-code">
        <Link to={`/pet-details/${petId}`}>
          <QRCode value={generateUrlWithId()} size={size} />
        </Link>
      </div>
      <Button type="primary" onClick={downloadQRCode} style={{ marginTop: '20px' }}>
        Descargar Código QR
      </Button>
    </div>
  );
};

export default QRCodeGenerator;