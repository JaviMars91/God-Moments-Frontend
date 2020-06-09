import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'


export default function Login() {
  return (
    <Layout>    
    <Head>
        <title>God Moments: Log In</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
    
      <h2>The Kairos Coders welcome you to God Moments</h2>
      <h4>Log In:</h4>
      <section className={utilStyles.border}>
      <form>
      <br/>
      <section className={utilStyles.form}>
      <label id="userName">User Name:</label><br/>
      <input type="text" id="userName" placeholder="Username"/><br/>
      <label id="passWord">Password:</label><br/>
      <input type="text" id="passWord" placeholder="Password"/><br/>
      <br/>
      <button name="submit" type="submit">Submit!</button>
      </section>
      <br/>
      </form>
      </section>
      <br/>
      <br/>

          <div>
          <Link href="/posts/signup">
          <a>No account? Register here</a>
          </Link>
        </div>

     </Layout>
  )
  }