import Link from "next/link";
import { GetAllCategories } from "@/services/BlogService";
import HeaderAuthSection from "./HeaderAuthSection";

export const revalidate = 0;

const Header = async () => {
  const categories = await GetAllCategories().then((res) => res.data);

  return (
    <header className="flex items-center justify-between h-16 shadow px-4">

      <HeaderAuthSection />
      <section>
        <ul className="flex space-x-reverse space-x-4">
          {categories?.data?.map((category) => (
            <li key={category.id}>
              <Link href={`/category/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </header>
  );
};

export default Header;
