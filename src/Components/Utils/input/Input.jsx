const Input = (props) => {
  const {
    placeholder,
    label,
    type = 'text',
    name,
    options = {},
    register,
    className = '',
    error = false,
  } = props;

  return (
    <fieldset className={`form-floating ${className}`}>
    <input
      className={`form-control ${error ? 'is-invalid' : ''}`}
      id={`${name}-input`}
      placeholder={placeholder}
      type={type}
      {...register(name, options)}
    />
    <label htmlFor={`${name}-input`}>{label}</label>
    <div className='invalid-feedback'>
      <span className=' ms-2 text-danger'>{error?.message}</span>
    </div>
  </fieldset>
  );
};
export default Input;