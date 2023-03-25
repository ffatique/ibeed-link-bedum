/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import styles from '../styles/home.module.scss'
import Image from 'next/image'
import foto from '../../public/images/foto.png'
import imagem1 from '../../public/images/imagem1.png'
import imagem2 from '../../public/images/imagem2.png'
import imagem3 from '../../public/images/imagem3.png'
import imagem4 from '../../public/images/imagem4.png'
import imagem5 from '../../public/images/imagem5.png'
import Link from 'next/link'
import { RiTwitterLine, RiYoutubeLine, RiInstagramLine, RiLinkedinBoxLine } from 'react-icons/ri'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsShare } from 'react-icons/bs'
import { RWebShare } from "react-web-share"
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'


export default function Home(){

  return (
    <div className={styles.container}>
      <Head>
        <title>Link | Vinícius Bedum</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta content="#000000" name="theme-color"></meta>
      </Head>

      <div className={styles.shareContainer}>
        
        <RWebShare
          data={{
            text: "Link | Vinicíus Bedum",
            url: "",
            title: "Link | Vinicíus Bedum",
          }}
          onClick={() => console.log("Shared Successfully!")}
        >
      
          <button>
            <BsShare size={20} color="#b400cc" />
          </button>

        </RWebShare>       
      
      </div>

      <main className={styles.mainContainer}>

        <Image src={foto} alt="Foto Vinícius Bedum" />

        <h2>Vinícius Bedum</h2>
        <h3>Explico Web3 e NFTs em sua essência.</h3>
        
        <h4>iBEED</h4>

        <div className={styles.buttons}>
          <Link target="_blank" href="https://ibeed.xyz/">
            <button><Image src={imagem1} alt="link imagem 1"/>
              <p>Site</p>
            </button>
          </Link>
        </div>
        
        <div className={styles.buttons}>
          <Link target="_blank" href="https://ibeed.xyz/galeria/">
            <button><Image src={imagem2} alt="link imagem 2"/>
              <p>Aprenda Sobre Web3 e NFTs</p>
            </button>
          </Link>
        </div>

        <div className={styles.buttons}>
           <Link target="_blank" href="https://ibeed.xyz/mint-ibeed-identidade/">
            <button><Image src={imagem3} alt="link imagem 3"/>
              <p>Resgate seu iBEED Identidade (NFT)</p>
            </button>
          </Link>
        </div>


        <div className={styles.buttons}>
          <Link target="_blank" href="https://discord.com/invite/2jhsuJvqPd">
            <button><Image src={imagem4} alt="link imagem 4"/>
              <p>Seja membro da nossa comunidade</p>
            </button>
          </Link>
        </div>

        <p>iBEED Studios</p>

        <div className={styles.buttons}>
          <Link target="_blank" href="https://ibeed.xyz/studios">
            <button><Image src={imagem5} alt="link imagem 5" />
              <p>Ajudamos sua marca entrar na Web3</p>
            </button>
          </Link>
        </div>

      </main>

      <div className={styles.footerContainer}>
        <Link target="_blank" href="https://twitter.com/viniciusbedum">
          <RiTwitterLine size={35} color="#d1d1d1d1" />
        </Link>
        <Link target="_blank" href="https://www.youtube.com/channel/UCKzh65h2cAt9PO68UeGznJQ">
          <RiYoutubeLine size={35} color="#d1d1d1d1" />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/viniciusbedum/">
          <RiInstagramLine size={32} color="#d1d1d1d1" />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/vin%C3%ADcius-bedum-060336186/">
          <RiLinkedinBoxLine size={33} color="#d1d1d1d1" />
        </Link>
        <Link target="_blank" href="mailto:viniciusbedum@ibeed.xyz">
          <MdOutlineMailOutline size={35} color="#d1d1d1d1" />
        </Link>
      </div>
    
    </div>
  )
}

