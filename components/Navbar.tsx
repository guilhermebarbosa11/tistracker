interface NavbarProps {
    onLogout: () => void;
  }
  export default function Navbar({ onLogout }: NavbarProps) {
    return (
      <header className="flex items-center justify-between p-4 bg-white border-b">
        <h1 className="text-xl font-bold">Painel</h1>
        <button onClick={onLogout} className="text-red-500">Sair</button>
      </header>
    );
  }