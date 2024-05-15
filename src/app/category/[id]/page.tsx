import CategoryList from "@/components/category";

async function getAllListsByCategory(getId: string) {
  try {
    const res = await fetch(`${process.env.URL}/api/category?categoryID=${getId}`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    if (data.success) return data.data;
  }
  catch (e) {
    console.log(e);
  }
}

export default async function Category({ params }: { params: any }) {
  const { id } = params;

  const getAllList = await getAllListsByCategory(id);

  return <CategoryList list={getAllList} />;
}
