import Link from 'next/link';
export default function Sidebar() {
  return (
    <nav className="w-64 bg-white border-r">
      <div className="p-6">
        <img src="/logo.svg" alt="Logo" className="h-10 mx-auto" />
      </div>
      <ul>
        <li className="px-6 py-3 hover:bg-gray-100">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        {/* outras rotas */}
      </ul>
    </nav>
  );
}