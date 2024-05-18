import CategoryList from "@/components/category";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllListsByCategory(getId: string) {
  try {
    const lists = await prisma.post.findMany({
      where: {
        category: getId,
      },
    });
    console.log("Fetched lists:", lists); // Log fetched lists
    return lists;
  }
  catch (e) {
    console.log(e);
  }
}

export default async function Category({ params }: { params: any }) {
  const { id } = params;

  const getAllList = await getAllListsByCategory(id) as any;

  return <CategoryList list={getAllList} />;
}
