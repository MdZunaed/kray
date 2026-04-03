/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient, ProductStatus } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const storeCode = process.env.STORE_CODE || "kray-default";
  const storeName = process.env.STORE_NAME || "Kray";
  const currencyCode = "USD";
  const currencySymbol = "$";
  const placeholderImage = "https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg";

  await prisma.storeSettings.upsert({
    where: { storeCode },
    update: {
      storeName,
      currencyCode,
      currencySymbol,
    },
    create: {
      storeCode,
      storeName,
      currencyCode,
      currencySymbol,
    },
  });

  const categories = [
    {
      slug: "electronics",
      name: "Electronics",
      description: "Essential tech for work and everyday life.",
    },
    {
      slug: "clothing",
      name: "Clothing",
      description: "Comfortable wardrobe staples and seasonal picks.",
    },
    {
      slug: "books",
      name: "Books",
      description: "Popular reads and practical learning resources.",
    },
  ];

  for (const [index, category] of categories.entries()) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {
        name: category.name,
        description: category.description,
        sortOrder: index,
      },
      create: {
        ...category,
        sortOrder: index,
      },
    });
  }

  const categoryMap = Object.fromEntries(
    (
      await prisma.category.findMany({
        where: { slug: { in: categories.map((category) => category.slug) } },
        select: { id: true, slug: true },
      })
    ).map((category) => [category.slug, category.id])
  );

  const products = [
    {
      slug: "wireless-mouse",
      name: "Wireless Mouse",
      price: "25.00",
      stock: 40,
      categoryId: categoryMap.electronics,
      status: ProductStatus.ACTIVE,
      isFeatured: true,
      thumbnail: placeholderImage,
      shortDescription: "A responsive wireless mouse for everyday work.",
      description: "A comfortable and responsive wireless mouse built for long sessions and smooth tracking.",
    },
    {
      slug: "mechanical-keyboard",
      name: "Mechanical Keyboard",
      price: "85.00",
      stock: 24,
      categoryId: categoryMap.electronics,
      status: ProductStatus.ACTIVE,
      isFeatured: true,
      thumbnail: placeholderImage,
      shortDescription: "A tactile keyboard with satisfying switches.",
      description: "A durable and tactile mechanical keyboard with responsive switches for work and gaming.",
    },
    {
      slug: "t-shirt",
      name: "T-Shirt",
      price: "15.00",
      stock: 60,
      categoryId: categoryMap.clothing,
      status: ProductStatus.ACTIVE,
      thumbnail: placeholderImage,
      shortDescription: "A breathable everyday cotton t-shirt.",
      description: "A soft and breathable cotton t-shirt designed for all-day comfort.",
    },
    {
      slug: "novel",
      name: "Novel",
      price: "12.00",
      stock: 30,
      categoryId: categoryMap.books,
      status: ProductStatus.ACTIVE,
      thumbnail: placeholderImage,
      shortDescription: "A popular fiction pick for relaxed reading.",
      description: "An engaging story selected for readers who enjoy immersive page-turners.",
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
