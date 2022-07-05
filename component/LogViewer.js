import React , {Component} from 'react';
import LogStyles from '../styles/LogViewer.module.css'

/*-- class component --*/
class LogViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputLog : [],
        };
    }
    //inputLog -> 入力内容を連想配列を要素として保存する配列。
    //親要素のイベントと連動してstateを更新し描画内容を変更する。
    SendInputData(result){
        //別要素のテキストエリアに入力した内容をinputLogに保存する。
        this.setState((state)=>({
            inputLog : state.inputLog.concat({response : `${result.data}`}),
        }));
    }
    //親要素からイベントを起動する。
    //戻るボタンで配列の末尾から1つ消す。
    DelInputData(){
        let n = this.state.inputLog.length
        if(n !== undefined){
            this.setState((state)=>({
            inputLog : state.inputLog.slice(0,n-1),
            }));
        }
    }
    //入力データをもとにログを並べる。
    //入力があった場合、始まりの位置を表示するためにstart boxを配置する。
    SetLogList(value,response){        
        return(
            <div className={LogStyles.response} key={response}>
                {
                    value === this.state.inputLog[0]
                    ? <div className={LogStyles.init_box}>start</div>
                    : <div></div>
                }
                <div className={LogStyles.vec}></div>
                <div className={LogStyles.response_box}>{value.response}</div>
            </div>
        );
    }
    //入力情報を保存した配列が空かどうかで表示内容を変更する。
    //配列が空の時、フォームから入力をするように進める文章を表示する。
    //配列に値があるとき、配列の内容を順番に表示する。
    render() {
        return  (
            <div className={LogStyles.container} id='LogObj'>
                {
                    this.state.inputLog.length === 0 ?
                        <div className={LogStyles.init_box}>
                            上のボックスから入力してください。
                        </div>
                    :
                    this.state.inputLog.map(
                        (value,response) => this.SetLogList(value,response)
                    )
                }
            </div>
        );
    }
}
export default LogViewer;