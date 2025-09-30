import "./globals.css";
import ReduxProvider from "../providers/ReduxProvider";
import QueryProvider from "../providers/QueryProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <QueryProvider>{children}</QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
