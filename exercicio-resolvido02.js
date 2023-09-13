const valorDaCompra = 2500;
const nDeParcelas = 7;

// Para pagamento à vista , o cliente terá 10% de desconto

if (nDeParcelas === 1) {

    const desconto = valorDaCompra * 10 / 100
    const totalDesconto = valorDaCompra - desconto

    console.log(`O total a pagar é R$ ${totalDesconto} reais.`)

    // Em caso de parcelamento, o cliente pagará o valor total dividido de acordo com as parcelas.

} else if (nDeParcelas >= 2 && nDeParcelas <= 6) {

    // parcelado sem juros
    const compraParcelada = (valorDaCompra / nDeParcelas).toFixed(2)
    console.log(`Você irá pagar ${nDeParcelas} parcelas no valor de R$ ${compraParcelada} reais`)

} else if (nDeParcelas >= 7 && nDeParcelas <= 12) {

    //parcelado com juros

    const totalComJuros = (valorDaCompra * (1 + 1 / 100) / nDeParcelas).toFixed(2)

    console.log(`Você irá pagar ${nDeParcelas} parcelas no valor de R$ ${totalComJuros} reais, com juros de 1%.`)

} else {

    // número de parcelas inválido!
    console.log("Número de parcelas inválido")
}