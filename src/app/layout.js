import "./globals.css";

export const metadata = {
  title: 'Job Finder',
  description: 'Find your dream job with our dynamic job finder app.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="text-gray-900">
        {children}
      </body>
    </html>
  );
}
