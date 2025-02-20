"use client";
import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";

const HeaderAuthSection = () => {
  const { user, isLoading } = useAuth();
  return (
    <section>
      {isLoading === false && user != null && <button>خروج</button>}

      {Boolean(user) == false && (
        <section className="space-x-4 space-x-reverse flex">
          <Link href={"/login"}>ورود</Link>
          <Link href={"/register"}>ثبت نام</Link>
        </section>
      )}
    </section>
  );
};

export default HeaderAuthSection;
