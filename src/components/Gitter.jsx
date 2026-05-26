export default function Gitter({ children }) {
  return (
    <div className="h-[100vh] w-[100vw] p-8 relative">
      <div className="h-full w-full border-2 border-primary shadow-[inset_0_0_20px_var(--color-primary-bg),0_0_20px_var(--color-bg-shadow)] pattern-grid">
        {children}
      </div>
      <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/100 from-10% to-black/0 z-0" />
    </div>
  );
}
