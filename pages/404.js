import styles from '../styles/Home.module.css'

export default function Custom_404_errPage(){
    return (
        <div className={styles.grid}>
            <h1 className={styles.main}>404</h1>
            <div>
                <p>大変申し訳ありませんが、</p>
                <p>現在ページは準備中となっております。</p>
            </div>
        </div>
    )
}