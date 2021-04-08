var c = 1
while (c < 2){
console.log("=================================") 
c++; }console.log ("| APP farmácia de alto custo/SP |")
console.log("=================================")

console.log("")
console.log("lista de remédios")
console.log("")
console.log("farmácia: cada tipo de remédio possui apenas algumas unidades no estoque!")
console.log("")
console.log("acetazolamida (código - 33)")
console.log("biotina (código - 69)")
console.log("ciclosporina (código - 74)")
console.log("danazol (código - 58) ")
console.log("")

console.log("Farmácia: como esse é um app de uma farmácia de alto custo nossos rémedios são limitados e específicos, só vendemos mediante a comprovação da receita médica e atualmente trabalhamos com esses 4 tipos de remédios citados acima!")

console.log("")

var a = prompt("farmácia: qual deles você precisa ?")

console.log("")

var y = prompt("farmácia: quantas unidades?")


console.log("")

if ( y > 7) {
  console.log("farmácia: infelizmente só temos apenas 7 unidades desse remédio no estoque "
  )
}else{
  (y <= 7)
  console.log("farmácia: temos essa quantidade em estoque, prossiga")
}

console.log("")

Produto = a;

switch (Produto) {
    case "acetazolamida":
        console.log("farmácia: o medicamento acetazolamida, custa R$ 10.371,00.");
        break;
    case "biotina":
        console.log("farmácia: o medicamento biotina custa R$ 4.655,00 a cartela com 12.");
        break;
    case "ciclosporina":
        console.log("farmácia: o medicamento ciclosporina custa R$ 7.299,00 e vem 14 comprimidos e não existe genérico para o mesmo no brasil");
        break;
    case "danazol":
        console.log("farmácia: o medicamento danazol custa R$ 6.499,00, o frasco contém 200ml ")
    }

console.log("")

var r1 = 10371
var r2 = 4655
var r3 = 7299
var r4 = 6499

var codigo = prompt("poderia me informar o código do remédio descrito na sua receita ?")

console.log("")

switch(codigo){
  case ("33"):
  console.log("o valor total ficou em R$ " + r1 * y + " reais")
  break;
    case ("69"):
  console.log("o valor total ficou em R$ " + r2 * y + " reais")
  break;
    case ("74"):
  console.log("o valor total ficou em R$ " + r3 * y + " reais")
  break;
    case ("58"):
  console.log("o valor total ficou em R$ " + r4 * y + " reais")
  break;
}

console.log("")

var b = prompt ("farmácia: gostaria de efetuar a compra ?")

console.log("")

  if(b == "sim") {
        console.log("farmácia: ok, primeiramente selecione o método de pagamento ");

        console.log("")

var c = prompt ("Farmácia: transferência bancária, pix ou cartão crédito/débito ??")

console.log("")

switch (c) {

  case "transferência bancária":
  console.log("sistema: opção -> transferência selecionada")
  break;
  case "pix":
  console.log("sistema: opção -> pix selecionada")
  break;
  case "cartão":
  console.log("sistema: opção -> cartão selecionada")
  break;
}

console.log("")

var e = prompt ("farmácia: gostaria de parcelar ?")
  
console.log("")

 switch (e) {
  
    case "não":
        console.log ("farmácia: ok, prossiga para o pagamento");
        break;
        
    case "sim":
        console.log ("farmácia: ok, prossiga para o pagamento ,lembrando que o parcelamento na nossa farmácia até 6x é sem juros!");
        break;
  }

  console.log("")

  /*senha do cartão é 6457*/

  var f = prompt ("digite a senha do cartão ****.****.****.*678");

console.log("")

if (f == 6457){
  console.log("compra efetuada com sucesso!! obrigado pela confiança, aguarde enquanto enviamos seu comprovante")

  console.log("")

do {
  console.log("obrigado pela preferência...")
} while (f === 6457)

console.log("")

var H = prompt ("confirme se o numero cadastrado no site corresponde ao seu(*****.5432)? ")

}else if ( f  != 6457) {
  console.log("senha incorreta, transação cancelada")
}

console.log("")

 switch ( H ){
     case "sim":
     console.log ("sistema: comprovante enviado com sucesso, obrigado pela compra!")
     break;
     case "corresponde":
     console.log("sistema: comprovante enviado com sucesso, obrigado pela compra!")
     break;
     case "não":
     console.log("ok, então enviaremos para o seu email, e por favor atualize seu cadastro para na proxima compra enviarmos seu compravante por sms , obrigado pela compra! ")
     break;
 }

console.log("")

for (var c = 3;c > 1;c--){
  console.log("")
}

 var i = prompt ("operação realizada...fechando o app");

        
  }else{ 
    (b != "não")
        console.log ("farmácia: tudo bem então, caso queira procurar uma outra farmacia, tem uma a 5km da sua localização atual, as informações ja foram enviadas para seu GPS!");
        }

console.log("")

for (var c = 3;c > 1;c--){
  console.log("")
}

console.log("")

var i = console.log ("operação realizada...fechando o app");
