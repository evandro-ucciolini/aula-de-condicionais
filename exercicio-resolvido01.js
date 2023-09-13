const valorDaCompra = 2500;
const nDeParcelas = 1;

// Para pagamento à vista , o cliente terá 10% de desconto

if (nDeParcelas === 1) {

    const desconto = valorDaCompra * 10 / 100
    const totalDesconto = valorDaCompra - desconto

    console.log(`O total a pagar é R$ ${totalDesconto} reais.`)

    // Em caso de parcelamento, o cliente pagará o valor total dividido de acordo com as parcelas.
    // Não há juros inclusos nas parcelas!

} else {
    (nDeParcelas > 1)

    const compraParcelada = valorDaCompra / nDeParcelas

    console.log(`Você irá pagar ${nDeParcelas} parcelas no valor de R$ ${compraParcelada} reais.`)

} 