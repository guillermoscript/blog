import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";

const links = [
    { href: "/", text: "Blog" },
    { href: "/about-me", text: "About Me" },
    // Add more link objects here as needed
];

export default function Header() {
    return (
        <header
            className="flex  items-center justify-between py-4 px-10"
        >
            <div
                className="flex items-center justify-center  md:justify-start gap-3"
            >
            <h5
                className="text-sm md:text-lg lg:text-xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left"
            >GuillermoScript Blog</h5>
            <Image
                src="/assets/blog/authors/hacker.jpg"
                alt="Picture of what a hacker looks like to general public"
                width={50}
                height={40}
                className="rounded-full"
            />
            </div>
            <ul
                className="flex gap-3 items-center "
            >
                <ThemeSwitch />
                {links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href} className="hover:underline">
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    )
}