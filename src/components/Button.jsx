const VARIANTS = {
  primary: "bg-purple-700 hover:bg-purple-800",
  secondary: "bg-blue-500 hover:bg-blue-600",
  danger: "bg-red-500 hover:bg-red-600",
};

export function Button({ children, onClick, variant = "primary", className = "" }) {
  return (
    <button
      className={`${VARIANTS[variant]} text-white font-semibold rounded-xl px-4 py-2 cursor-pointer transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
