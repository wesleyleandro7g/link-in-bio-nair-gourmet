import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { server } from "../config";

import logo from "../public/icons/nair-logo.svg";
import arrowBack from "../public/icons/arrow-back.svg";
import whatsappwhite from "../public/icons/logo-whatsapp-white.svg";

interface DataProps {
  data: string[];
}

const Galery: NextPage<DataProps> = (props) => {
  return (
    <>
      <Head>
        <title>Nair Gourmet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container-galery">
        <header className="header">
          <Link href="/">
            <Image src={arrowBack} alt="Icone para voltar à página anterior" />
          </Link>
          <Image src={logo} height={80} alt="Nair Gourmet Logo" />
          <div />
        </header>

        <div className="content">
          {props.data?.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={350}
              height={400}
              layout="intrinsic"
              objectFit="cover"
              className="image-galery"
              alt="Produto da Nair Gourmet"
            />
          ))}
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=5538991681423&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20fazer%20uma%20encomenda."
          target="_blank"
          rel="noreferrer"
          className="contact-btn float-btn"
        >
          <Image src={whatsappwhite} alt="WhatsApp Logo" />
          <span>Faça sua encomenda</span>
        </a>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${server}/api/readImages`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}

export default Galery;
