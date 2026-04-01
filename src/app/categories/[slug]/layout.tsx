export function generateStaticParams() {
  return [
    { slug: 'electronics' },
    { slug: 'clothing' },
    { slug: 'books' },
    { slug: 'home-kitchen' },
    { slug: 'sports' },
    { slug: 'toys' },
  ];
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
