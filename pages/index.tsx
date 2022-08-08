import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import logo from "../public/icons/nair-logo.svg";
import whatsapp from "../public/icons/logo-whatsapp.svg";
import whatsappwhite from "../public/icons/logo-whatsapp-white.svg";
import instagram from "../public/icons/logo-instagram.svg";
import facebook from "../public/icons/logo-facebook.svg";

import { imagesHome } from "../utils/imagesImported";

interface HomeProps {
  images: string[];
}

const Home: NextPage<HomeProps> = () => {
  return (
    <>
      <Head>
        <title>Nair Gourmet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container">
        <Image src={logo} alt="Nair Gourmet Logo" />

        <div className="description">
          <h1>
            Bolos para aniversários, festas e eventos. Bolos no pote e taças.
          </h1>
        </div>

        <div className="social">
          <a
            href="https://api.whatsapp.com/send?phone=5538991681423&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20fazer%20uma%20encomenda."
            target="_blank"
            rel="noreferrer"
          >
            <Image src={whatsapp} alt="WhatsApp Logo" />
          </a>
          <a
            href="https://www.instagram.com/nairgourmet/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={instagram} alt="Instagram Logo" />
          </a>
          <a
            href="https://www.facebook.com/nairbolosgourmet-107904633941497/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={facebook} alt="Facebook Logo" />
          </a>
        </div>

        <div className="images">
          {imagesHome?.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={108}
              height={114}
              layout="intrinsic"
              objectFit="cover"
              className="image"
              alt="Produto da Nair Gourmet"
            />
          ))}
        </div>

        <div className="buttons-wrapper">
          <Link href="galery">
            <button className="see-more-btn">
              <span>Veja mais fotos</span>
            </button>
          </Link>

          <a
            className="contact-btn"
            href="https://api.whatsapp.com/send?phone=5538991681423&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20fazer%20uma%20encomenda."
            target="_blank"
            rel="noreferrer"
          >
            <Image src={whatsappwhite} alt="WhatsApp Logo" />
            <span>Faça sua encomenda</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
