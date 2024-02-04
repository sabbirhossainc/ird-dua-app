export default async function getAllCatalist(params) {
  const result = await fetch("http://localhost:5000/duas", {
    next: {
      revalidate: 10,
    },
  });

  return result.json();
}
