export function CenteredCard({ children, className = "" }) {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 px-4">
      <div className={`bg-slate-700 text-white font-sans w-full max-w-md p-6 rounded-lg shadow-lg ${className}`}>
        {children}
      </div>
    </div>
  );
}
