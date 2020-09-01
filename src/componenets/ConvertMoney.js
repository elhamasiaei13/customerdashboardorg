export default function  ConvertMoney(params) {
    let arrayMoney = JSON.stringify(params).split("")
    let convertMoney = []
    const length = arrayMoney.length
    let i = arrayMoney.length
    for (i; i > 0; i--) {
        if ((i % 3 == 0) && (i != length)) {
            convertMoney.push(",")
        }
        convertMoney.push(arrayMoney[length - i])

    }

    return (convertMoney)

}
