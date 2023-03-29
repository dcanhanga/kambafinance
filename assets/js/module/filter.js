export default function filter(){
  const inFilterTransactions = document.querySelector("#filter");
  const tbody = document.querySelector("[data-transactionTable='tbody']");
  inFilterTransactions.addEventListener("keyup", () =>{
    let expression = inFilterTransactions.value.toLowerCase()
    let tr = tbody.querySelectorAll("tr");
    for(let index in tr){
      if(true === isNaN(index)) continue;
      let trContent = tr[index].innerHTML.toLowerCase();
      if(true === trContent.includes(expression)) tr[index].style.display="";
      else tr[index].style.display = "none"
    }
  })
}