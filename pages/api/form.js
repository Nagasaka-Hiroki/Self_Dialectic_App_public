//テンプレート通り、JavaScriptで入力内容を処理する。
export default function handler(req,res) {
    const body = req.body
    if(!body.answer) {
        return res.json({data:'Your answer had not been entered.'})
    }
    res.json({data:`${body.answer}`})
}