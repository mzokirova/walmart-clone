import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

function Header() {
    return (
        <header>
            <Link href="/">
                <Image />
            </Link>
    </header> );
}

export default Header;