export const metadata = {
  title: "Zhuenix Supply",
  description: "China sourcing and supply chain partner",
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
