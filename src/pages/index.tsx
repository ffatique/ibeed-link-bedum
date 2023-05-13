/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import styles from '../styles/home.module.scss'
import Image from 'next/image'
import ens from '../../public/images/ens.png'
import logo from '../../public/images/logo.png'
import lens from '../../public/images/lens.png'
import Link from 'next/link'
import { CiTwitter, CiYoutube, CiInstagram, CiLinkedin, CiMail } from 'react-icons/ci'
import { BsShare } from 'react-icons/bs'
import { RWebShare } from "react-web-share"
import { VscGithub } from 'react-icons/vsc'


export default function Home(){

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Linkeh | {"bname"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta content="#515AFF" name="theme-color"></meta>
      </Head>

      <div className={styles.shareContainer}>
        
        <RWebShare
          data={{
            text: `Linkeh | ${"bname"}`,
            url: "",
            title: `Linkeh | ${"bsecondName"}`,
          }}
          onClick={() => console.log("Shared Successfully!")}
        >
      
          <button>
            <BsShare size={20} color="#515AFF" />
          </button>

        </RWebShare>       
      
      </div>

      <main className={styles.mainContainer}>

        <Image src={"bavatarUrl"} width={120} height={120} alt={`Foto ${"bname"}`} />

        <h2>{"bname"}</h2>
        <h3>{"bsecondName"}</h3>
        <div className={styles.ensContainer}>
          <Image src={ens} alt="Logo ENS" />
          <p>{"bens"}</p>
        </div>
        
        {"blinkOne" == null?
          <></>
        : 
          <div className={styles.buttons}>
            <Link target="_blank" href={"blinkOne"}>
              <button><Image src={"bavatarOne"} width={40} height={40} alt={'Logo Linkeh One'}/>
                <p>{"btitleOne"}</p>
              </button>
            </Link>
          </div>
        }
        
        {"blinkTwo" == null?
          <></>
        : 
          <div className={styles.buttons}>
            <Link target="_blank" href={"blinkTwo"}>
              <button><Image src={"bavatarTwo"} width={40} height={40} alt={'Logo Linkeh Two'}/>
                <p>{"btitleTwo"}</p>
              </button>
            </Link>
          </div>
        }

        {"blinkThree" == null?
          <></>
        : 
          <div className={styles.buttons}>
            <Link target="_blank" href={"blinkThree"}>
              <button><Image src={"bavatarThree"} width={40} height={40} alt={'Logo Linkeh Three'}/>
                <p>{"btitleThree"}</p>
              </button>
            </Link>
          </div>
        }

        {"blinkFour" == null?
          <></>
        : 
          <div className={styles.buttons}>
            <Link target="_blank" href={"blinkFour"}>
              <button><Image src={"bavatarFour"} width={40} height={40} alt={'Logo Linkeh Four'}/>
                <p>{"btitleFour"}</p>
              </button>
            </Link>
          </div>
       }

        {"blinkFive" == null?
          <></>
        : 
          <div className={styles.buttons}>
            <Link target="_blank" href={"blinkFive"}>
              <button><Image src={"bavatarFive"} width={40} height={40} alt={'Logo Linkeh Five'}/>
                <p>{"btitleFive"}</p>
              </button>
            </Link>
          </div>
        }

      </main>

      <div className={styles.footerContainer}>
        
        {"btwitter" == null?
          <></>
        :
          <Link target="_blank" href={"btwitter"}>
            <CiTwitter size={35} color="#d1d1d1d1" />
          </Link>
        }

        {"byoutube" == null?
          <></>
        :
          <Link target="_blank" href={"byoutube"}>
            <CiYoutube size={35} color="#d1d1d1d1" />
          </Link>
        }

        {"binstagram" == null?
          <></>
        :
          <Link target="_blank" href={"binstagram"}>
            <CiInstagram size={32} color="#d1d1d1d1" />
          </Link>
        }

        {"blinkedin" == null?
          <></>
        :
          <Link target="_blank" href={"blinkedin"}>
            <CiLinkedin size={33} color="#d1d1d1d1" />
          </Link>
        }

        {"bgithub" == null?
          <></>
        :
          <Link target="_blank" href={"bgithub"}>
            <VscGithub size={33} color="#d1d1d1d1" />
          </Link>
        }
        
        {"bemail" == null?
          <></>
        :
          <Link target="_blank" href={"bemail"}>
            <CiMail size={35} color="#d1d1d1d1" />
          </Link>
        }
        
        {"blens" == null?
          <></>
        :
          <Link target="_blank" href={"blens"}>
            <Image src={lens} alt="Logo Lens" />
          </Link>
        }

      </div>

      <div className={styles.linkehContainer}>
        <Link target="_blank" href="https://www.linkeh.xyz/">
          <Image src={logo} alt="Logo Linkeh" />
        </Link>
      </div>    
    </div>
  )
}
