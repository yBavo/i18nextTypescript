import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const router = useRouter();
  const { locale, locales, pathname, query } = router;
  const otherLocales = locales?.filter((ol) => ol !== locale);

  return (
    <header className="sticky top-0 text-2xl ">
      <nav>
        <div className="flex items-center justify-center text-[#414052] pt-12 gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className=" hover:text-[#AC6DDE] transition-colors">
              {link.label}
            </Link>
          ))}
          {/* Language */}
          <div className="relative">
            <div
              onClick={() => setisOpen((prev) => !prev)}
              className="ml-32 hover:text-[#AC6DDE] transition-colors cursor-pointer">
              {locale}
            </div>
            {isOpen && (
              <div className="absolute flex flex-col ml-32">
                {otherLocales?.map((l) => {
                  return (
                    <Link
                      key={l}
                      href={{ pathname, query }}
                      locale={l}
                      onClick={() => setisOpen((prev) => !prev)}
                      className="hover:text-[#AC6DDE] transition-colors cursor-pointer">
                      {l}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
