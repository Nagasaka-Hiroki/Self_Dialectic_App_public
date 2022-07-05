import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Socrates.module.css';
import Form from '../component/FormComponent';
import Comment from '../component/Comment';
import LogViewer from '../component/LogViewer';

//ソクラテスと共に考えるツール
function Socrates() {
    const LogList = React.createRef();
    const Advice = React.createRef();
    /*-- 公式リファレンスを参考に作成 --*/
    //　フォームからの入力を処理するイベントハンドル
    const handleSubmit = async (event) =>{
        event.preventDefault()
        //連想配列にイベントからのデータを保存
        let data = {
            answer : event.target.answer.value,
        }
        // /api/form.jsを使ってデータを成形。
        // 内容は要学習
        let JSONdata = JSON.stringify(data)
        let response = await fetch('/api/form',{
            body:JSONdata,
            headers: {
                'Content-Type':'application/json',
            },
            method:'POST',
        })
        // await については要学習
        const result = await response.json()
        //console.log(`${result.data}`);
        //　親要素を経由して子要素のイベントを別の子要素に伝播させる。
        LogList.current.SendInputData(result);
        //　前回の入力はテキストエリアから削除する。
        event.target.answer.value = ''
        // 入力内容をコメントとして表示する。
        let Num = LogList.current.state.inputLog.length
        let Rsp = result.data
        Advice.current.setNumComment(Rsp,Num)
    }
    const handleReset = (event) =>{
        event.preventDefault()
        //子要素のstateを更新する。
        LogList.current.DelInputData()
        //長さを計算する。削除前の数字が出力される。
        let Num = LogList.current.state.inputLog.length
        //削除後の配列の末尾の要素を取り出す。Numは削除前の要素数なので-2とする。
        let Rsp = LogList.current.state.inputLog.slice(Num-2,-1)
        //文字変数の宣言、以下のif文で代入する。
        let prevInput
        if(Num === 1 || Num === 0) {
            //配列が空の時に戻るボタンを押せば現状を維持する必要がある。そのためNum===0も条件として追加する。
            //Num === 1の時、削除後の要素数は0。ゆえに要素数が0の時にlengthプロパティが返す値を代入する。
            Num = undefined
            //この時特に表示する内容を代入する必要はない。なのでundefinedを代入する。空の文字列""でも良いと思う。
            prevInput = undefined
        }else{
            //配列の末尾の要素が持つデータを取り出す。if文で囲むのは空の配列にプロパティはないのでエラーが出るため。
            prevInput = Rsp[0].response
        }
        //子要素の吹き出しのメッセージを更新する。
        Advice.current.setNumComment(prevInput,Num)
    }
    return (
        <div className={styles.container}>
            {/* ヘッダー情報を記述する。*/}
            <Head>
                <title>Self Dialectic with Socrates</title>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
            </Head>
            {/*表示内容を記述する。*/}
            <div className={styles.content}>
                {/*左側にほかのプログラムへ移動するためのリンクを集める。*/}
                <div className={styles.VerticalToolBar}>
                    <div>
                        <h1 className={styles.active_icon}>Socrates method</h1>
                    </div>
                    <div className={styles.card}>
                        <Link href='/'>
                            <div>
                                <a>Home</a>
                            </div>
                        </Link>
                        <Link href='/Descartes'>
                            <div>
                                <a>Descartes</a>
                            </div>
                        </Link>
                    </div>
                </div>
                {/*表示している画面の機能を記述する。*/}
                <div>
                    <div className={styles.MainContainer}>
                        {/*前回の入力内容をもとにソクラテスとの問答をする。*/}
                        <Comment ref={Advice}/>
                        <div className={styles.form_area}>
                            {/*テキストの入力エリアと次へボタンと戻るボタンを設置する。*/}
                            <Form onSubmit={handleSubmit} onReset={handleReset}/>
                            <div className={styles.nigaoe_socrates}>
                                {/*いらすとやさんのソクラテスを表示する。サイズは3分の1とする。*/}
                                <Image
                                    src="/nigaoe_socrates.png"
                                    alt='image file is not found'
                                    width ={714/3}
                                    height={800/3}
                                    className={styles.rearrange}
                                />
                            </div>
                        </div>
                    </div>
                    {/*入力内容のログを表示する。*/}
                    <LogViewer ref={LogList}/>
                </div>
            </div>
        </div>
    );
}
export default Socrates;