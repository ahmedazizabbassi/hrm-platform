import '../styles/globals.css';

export const metadata = {
  title: 'HRM Platform',
  description: 'Human Resources Management Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
