import type { NextPage } from 'next'
import Head from 'next/head'

import socialJson from '../static/social.json'

import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { v4 as uuid } from 'uuid'
import CountUp from 'react-countup'
import axios from 'axios'

import { FaYoutube, FaTiktok, FaTwitch, FaInstagram } from 'react-icons/fa'

import * as P from '../styles/indexStyle'

const Home: NextPage = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()

  const handleSubmitForm = async ({ name, email, message }: any) => {
    try {
      const req = await axios.get('/api/contact', {
        data: {
          name: name,
          email: email,
          message: message
        }
      })
      const res = await req.data

      if (res.error === false) {
        toast.success('E-Mail enviado com sucesso')
        router.push('/obrigado')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Head>
        <title>HomePage</title>
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
                  <h1>Minhas redes sociais</h1>
                </div>
                <div className="top">
                  <div className="flex">
                    {socialJson.map(item => {
                      return (
                        <div className="item" key={uuid()}>
                          <div className="icon">
                            <span
                              className={item.type === 1 ? 'active' : 'icon'}
                            >
                              <i>
                                <FaYoutube />
                              </i>
                            </span>
                            <span
                              className={item.type === 2 ? 'active' : 'icon'}
                            >
                              <i>
                                <FaTiktok />
                              </i>
                            </span>
                            <span
                              className={item.type === 3 ? 'active' : 'icon'}
                            >
                              <i>
                                <FaTwitch />
                              </i>
                            </span>
                            <span
                              className={item.type === 4 ? 'active' : 'icon'}
                            >
                              <i>
                                <FaInstagram />
                              </i>
                            </span>
                          </div>
                          <h1>{item.name}</h1>
                          <div className="counter">
                            <span>
                              <CountUp end={item.followers} />k
                            </span>
                          </div>
                          <button
                            onClick={() => window.open(item.url, '_blank')}
                          >
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
                  <h1>Contato</h1>
                </div>
                <div className="top">
                  <form
                    className="form"
                    onSubmit={handleSubmit(handleSubmitForm)}
                  >
                    <div className="row">
                      <input
                        type="text"
                        placeholder="Seu nome completo"
                        {...register('name', { required: true })}
                      />
                    </div>
                    <div className="row">
                      <input
                        type="email"
                        placeholder="Seu e-mail"
                        {...register('email', { required: true })}
                      />
                    </div>
                    <div className="row">
                      <textarea
                        placeholder="Sua mensagem"
                        {...register('message', { required: true })}
                      />
                    </div>
                    <button type="submit">Enviar</button>
                  </form>
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
