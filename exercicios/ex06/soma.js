function somar() {
  var tn1 = document.getElementById('txtn1')
  var tn2 = document.getElementById('txtn2')
  var total = document.getElementById('total')
  var n1 = Number(tn1.value)
  var n2 = Number(tn2.value)
  var s = n1 + n2
  total.innerHTML =`A soma entre: ${n1} + ${n2} é igual a: ${s}`
  
}