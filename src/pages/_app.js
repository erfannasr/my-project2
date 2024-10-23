import Layout from "@/Components/Layout/Layout";
import "@/styles/globals.css";
import { yekan } from "@/utils/font";

export default function App({ Component, pageProps }) {

  return (
    
    <div className={yekan.className}>
    <Layout >
      <Component {...pageProps} />
    </Layout>
    </div>
  )
}
