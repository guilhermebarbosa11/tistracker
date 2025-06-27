import './styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'TIS Tracker',
  description: 'UI em Next.js'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
