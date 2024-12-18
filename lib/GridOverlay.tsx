export default function GridOverlay() {
  // TODO: add a grid overlay

  return (
    <div className="fixed inset-0 z-50 pointer-events-none grid grid-cols-12 gap-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="bg-red-500 bg-opacity-10 h-full border-r border-red-300"
        />
      ))}
    </div>
  );
}
