import React from 'react';

const TextAreaInput = ({ placeholder, name, options = {}, register, className = "", id, error, errorMessage }) => {
  return (
    <>
    
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        {...register(id, options)}
        className={`form-control form-control-user ${error ? 'is-invalid' : ''}`}
        rows="4" // Ajusta el número de filas según sea necesario
      ></textarea>
      {error && (
        <div className="invalid-feedback">
          {errorMessage}
        </div>
      )}
    </>
  );
};

export default TextAreaInput;
