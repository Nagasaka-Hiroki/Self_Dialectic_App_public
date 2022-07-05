import styles from '../styles/Socrates.module.css'
import React from 'react';

export default function FormComponent(props) {
    //入力フォームを作る。
    return  (
        <div className={styles.left_area}>
            <form  onSubmit={props.onSubmit} onReset={props.onReset}>
                <p htmlFor="answer">助言をもとに思考を深めましょう。</p>
                <p htmlFor="answer">何か思いつくことはありますか？</p>
                <textarea className={styles.input_field} type="text" id="answer" name="answer" required />
                <div className={styles.grid}>
                    <button className={styles.prev} type="reset">戻る</button>
                    <button className={styles.next} type="submit">次へ</button>
                </div>
            </form>
        </div>)
}