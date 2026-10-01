import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  light?: boolean;
  className?: string;
}

export default function BrandLogo({
  light = false,
  className = "",
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="Well IT & Consultancy Ltd home"
    >
      <div className="relative h-9 sm:h-11 w-40 sm:w-52 shrink-0 transition-transform duration-300 group-hover:scale-[1.02]">
        <Image
          src={light ? "/images/logo-full-light.png" : "/images/logo-full.png"}
          alt="Well IT & Consultancy Ltd. - Connecting people and technology"
          fill
          priority
          sizes="(max-width: 640px) 160px, 208px"
          className="object-contain object-left"
        />
      </div>
    </Link>
  );
}
