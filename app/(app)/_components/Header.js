import Link from "next/link";

const Header = () => {
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
          <li>
            <Link href={"/category/"}>سیاسی</Link>
          </li>
          <li>
            <Link href={"/category/"}>سیاسی</Link>
          </li>
          <li>
            <Link href={"/category/"}>سیاسی</Link>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
