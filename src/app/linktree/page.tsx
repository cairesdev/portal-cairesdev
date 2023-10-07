import avatar from "@/assets/image/avatar.png";
import { links } from "@/assets/jsons/links";
import Image from "next/image";
import Link from "next/link";

export default async function LinkTree() {
  return (
    <div>
      <div className="avatar-container">
        <Image
          src={avatar}
          alt="avatar"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h1>João Caires</h1>
        <p>Abaixo os links das minhas redes sociais ativas no momento.</p>
      </div>
      <ul className="container-links">
        {links.map((link) => (
          <li key={link.nome}>
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.nome}
            >
              {link.nome}
              <span className="icone">
                <link.icone size={24} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
