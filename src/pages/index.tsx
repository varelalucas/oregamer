import type { NextPage } from 'next'
import Head from 'next/head'

import socialJson from '../static/social.json'

import { useRouter } from 'next/router'
import { v4 as uuid } from 'uuid'
import CountUp from 'react-countup'

import { FaYoutube, FaTiktok, FaTwitch, FaInstagram } from 'react-icons/fa'

import * as P from '../styles/indexStyle'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>
          HomePage
        </title>
      </Head>
      <P.HomeContainer>
        <P.Header>
          <P.Container>
            <div className="flex">
              <div className="item">
                <img src="/perfil.png" alt="Perfil" />
                <h4>🍪 OreGamer 🍪</h4>
                <p>Digital Influencer</p>
              </div>
            </div>
          </P.Container>
        </P.Header>
        <P.Main>
          <P.Container>
            <P.Cards>
              <div className="card">
                <div className="title">
                  <h1>
                    Minhas redes sociais
                  </h1>
                </div>
                <div className="top">
                  <div className="flex">
                    {socialJson.map(item => {
                      return (
                        <div className="item" key={uuid()}>
                          <div className="icon">
                            <span className={item.type === 1 ? 'active' : 'icon'}>
                              <i>
                                <FaYoutube />
                              </i>
                            </span>
                            <span className={item.type === 2 ? 'active' : 'icon'}>
                              <i>
                                <FaTiktok />
                              </i>
                            </span>
                            <span className={item.type === 3 ? 'active' : 'icon'}>
                              <i>
                                <FaTwitch />
                              </i>
                            </span>
                            <span className={item.type === 4 ? 'active' : 'icon'}>
                              <i>
                                <FaInstagram />
                              </i>
                            </span>
                          </div>
                          <h1>
                            {item.name}
                          </h1>
                          <div className="counter">
                            <span>
                              <CountUp end={item.followers} />k
                            </span>
                          </div>
                          <button onClick={() => window.open(item.url, '_blank')}>
                            Acessar
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="title">
                  <h1>
                    Minhas redes sociais
                  </h1>
                </div>
                <div className="top">
                  <div className="flex">
                    {socialJson.map(item => {
                      return (
                        <div className="item" key={uuid()}>
                          <div className="icon">
                            <span className={item.type === 1 ? 'active' : 'icon'}>
                              <i>
                                <FaYoutube />
                              </i>
                            </span>
                            <span className={item.type === 2 ? 'active' : 'icon'}>
                              <i>
                                <FaTiktok />
                              </i>
                            </span>
                            <span className={item.type === 3 ? 'active' : 'icon'}>
                              <i>
                                <FaTwitch />
                              </i>
                            </span>
                            <span className={item.type === 4 ? 'active' : 'icon'}>
                              <i>
                                <FaInstagram />
                              </i>
                            </span>
                          </div>
                          <h1>
                            {item.name}
                          </h1>
                          <div className="counter">
                            <span>
                              <CountUp end={item.followers} />k
                            </span>
                          </div>
                          <button onClick={() => window.open(item.url, '_blank')}>
                            Acessar
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </P.Cards>
          </P.Container>
        </P.Main>
      </P.HomeContainer>
    </div>
  )
}

export default Home
