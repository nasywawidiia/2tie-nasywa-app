export default function VisitorLayout({ children }) {
  return (
    <div className="bg-[#fffaf5] text-gray-800 overflow-x-hidden min-h-screen">
      {children}
    </div>
  );
}