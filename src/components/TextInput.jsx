export function TextInput({ placeholder, onChange, value, inputRef, className = "", onKeyPress, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      ref={inputRef}
      onKeyPress={onKeyPress}
      className={`border border-gray-400 px-3 py-2 rounded focus:outline-none focus:border-blue-500 ${className}`}
    />
  );
}
