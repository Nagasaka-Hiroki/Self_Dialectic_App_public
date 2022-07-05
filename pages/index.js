/*
本プログラムはNext.jsを用いて作成されています。
以下にNext.jsのライセンスを表記します。
Next.jsは MIT ライセンスとして公開されています。
そのため、(1) 著作権表記　と (2) ライセンスの全文 が示されたURLを示します。

Copyright (c) 2022 Vercel, Inc.
https://github.com/vercel/next.js/blob/canary/license.md
*/
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Self Dialectic</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Self Dialectic</h1>
        <p className={styles.description}>自己問答を視覚化し効率化を目指す。</p>
        <div className={styles.grid}>
          <Link href="/socrates">
            <a className={styles.card}>
              <h2>問答法</h2>
              <p>ソクラテスと考える</p>
              <p className={styles.build}>アルファ版</p>
            </a>
          </Link>
          <Link href="/Descartes">
            <a className={styles.card}>
              <h2>方法的懐疑</h2>
              <p>デカルトと考える</p>
              <p className={styles.prep}>準備中</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <ul>
          <li>
            <a href="https://nextjs.org/">
              本サイトはNext.js(Copyright (c) 2022 Vercel, Inc.)を使用して作成されています。
            </a>
          </li>
          <li>
            <a href="https://github.com/vercel/next.js/blob/canary/license.md">
              Next.jsのライセンス（MIT)条項はこちらになります。
            </a>
          </li>
          <li>
            <a href="https://www.irasutoya.com/2016/12/blog-post_939.html">
              アプリ、問答法のソクラテスさんのイラストは「いらすとや」さんから利用させていただきました。ここをクリックでリンク先に飛びます。
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}