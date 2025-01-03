import React, { useState } from "react";

const ImageUpload = ({ onImageSelect }) => {
  const [hasFile, setHasFile] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isRequired, setIsRequired] = useState(false);

  const handleImageChange = (e) => {
    setIsRequired(false); // Clear "required" error when the field changes
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        onImageSelect(file);
        setHasFile(true);
        setIsInvalid(false);
      } else {
        setIsInvalid(true);
        setHasFile(false);
        onImageSelect(null); // Clear selected image
      }
    } else {
      setHasFile(false);
      setIsInvalid(false);
      onImageSelect(null);
    }
  };

  const handleBlur = () => {
    // Show "required" error if no file is selected
    if (!hasFile) {
      setIsRequired(true);
    }
  };

  return (
    <div className="form-group">
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        onChange={handleImageChange}
        onBlur={handleBlur}
        className={`form-control ${hasFile ? "is-valid" : ""} ${
          isInvalid || isRequired ? "is-invalid" : ""
        }`}
      />
      {hasFile && !isInvalid && (
        <div className="valid-feedback">Imagen seleccionada correctamente.</div>
      )}
      {isInvalid && (
        <div className="invalid-feedback">
          Por favor, selecciona un archivo de imagen válido.
        </div>
      )}
      {isRequired && !hasFile && (
        <div className="invalid-feedback">
          Este campo es obligatorio. Por favor, selecciona una imagen.
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
