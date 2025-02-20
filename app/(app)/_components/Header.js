import Link from "next/link";
import { GetAllCategories } from "@/services/BlogService";


export const revalidate = 0;

const Header = async () => {
  const categories = await GetAllCategories().then(res => res.data)

  return (
    <header className="flex items-center justify-between h-16 shadow px-4">
      <section>
        {/* Auth */}
        {/* <button>خروج</button> */}
        {/* End Auth */}

        {/* Guast */}
        <section className="space-x-4 space-x-reverse flex">
          <Link href={"/login"}>ورود</Link>
          <Link href={"/register"}>ثبت نام</Link>
        </section>
        {/* End Guast */}
      </section>
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
