

function Navbar() {
  return (
    <header className="p-3 bg-white border-b border-dashed">
        <div className="flex justify-between">
        <h1 className="text-base font-semibold">Bangalore Pet Hospital (Siddhapura)</h1>
        <div className="flex space-x-4">
            <img className="w-4 h-4" src="/shield-user.svg" alt="" />
            <img className="w-4 h-4" src="/settings.svg" alt="" />
        </div>
        </div>

      {/* Add additional navigation items or user profile dropdown */}
    </header>
  );
}

export default Navbar;
