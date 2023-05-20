//Appコンポーネントは全てのページの共通部分を定義することができる。
import "../styles/globals.css";
import Layout from "../components/layout";

//font awesomeの設定
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
