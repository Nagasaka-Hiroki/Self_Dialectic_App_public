import { Component } from 'react';
import styles from '../styles/Socrates.module.css';

class Comment extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Comment : "まずは検証する内容を書き込んでみよう。",
        };
    }
    
    setNumComment(InputLog,Num){
        if(Num === undefined){
            //配列が空の時
            this.setState((state)=>({
                Comment : "まずは検証する内容を書き込んでみよう。",
            }));
        }else{
            //配列に値があるとき
            this.setState((state)=>({
                Comment : "君は「" + InputLog + "」というが、なぜ？",
            }));
        }
    }
    //前回の入力をもとにコメントを出力する。
    render(){
        return (
            <div className={styles.comments}>
                <div>{this.state.Comment}</div>
            </div>
        );
    }
}

export default Comment;