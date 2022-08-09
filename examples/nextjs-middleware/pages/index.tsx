import type { NextPage } from 'next'
import Head from 'next/head'
import {ChangeEventHandler, FormEventHandler, useCallback, useState} from "react";
import nookies from 'nookies'
const Home: NextPage = () => {
    const [user, setUser] = useState<string>(nookies.get().user ||"test1")
    // console.log(nookies.get().user)
    const onSelect: ChangeEventHandler<HTMLSelectElement> = useCallback((e)=>{
        setUser(e.currentTarget.value)
    },[])
    const submit:FormEventHandler = useCallback((e)=>{
        e.preventDefault()
        nookies.set(null, 'user', user)
        document.location.href = "/login"
    },[user])
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
          <h1>Next.js Middleware with Flagsmith</h1>
          <p>
              This project uses the multivariate feature flag as shown in our <a href={"https://flagsmith-realtime-example.vercel.app/"}>realtime multivariate example</a> to give a user a colour based on a abn percentage split.
          </p>
          <p>
              Based on the colour feature flag, the Next.js middleware will redirect he user to a url with that colour as a get parameter
          </p>
          <form onSubmit={submit} className="row">
              <div className="col-md-4">
                  <select className="form-select" onChange={onSelect}  value={user}>
                      {new Array(16).fill(0).map((_,v)=>(
                          <option key={v} value={`test${v+1}`}>
                              User {v+1}
                          </option>
                      ))}
                  </select>

              </div>
              <div  className="col-md-4">
                  <button className="btn btn-primary">Login</button>
              </div>
          </form>

      </main>

    </div>
  )
}

export default Home