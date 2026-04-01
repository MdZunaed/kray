export function generateStaticParams() {
  return [
    { slug: 'wireless-mouse' },
    { slug: 'mechanical-keyboard' },
    { slug: 't-shirt' },
  ];
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
