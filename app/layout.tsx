export const metadata = {
  title: "Zhuenix Supply",
  description: "Global sourcing and logistics solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
