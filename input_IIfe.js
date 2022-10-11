

  const myFunction = (browser)  => {  
    document.getElementById("result").value = browser ;
}


const  selezionato = () =>{
    _nome();       
}


const  _nome = ( )=> {
let x1= document.getElementById("nome");
    
let uomo = document.getElementById("uomo");
let donna = document.getElementById("donna");
//    console.log(uomo.checked == true)    

if( x1.value !== '' &&  uomo.checked ){
_ses(  x1.value, uomo.value , "rgb(44, 44, 242)")

}  else if(x1.value !== '' &&   donna.checked){

    _ses(  x1.value, donna.value , "palevioletred")
  
} else{  alert(' immetti NOME o seleziona  UOMO/DONNA ')  }

}


const  _ses =   ( xvalue , sVal , col ) => {
  let p =  document.getElementById('p');
      p.innerHTML= ' Salve mi chiamo '+  xvalue + ' e sono  ' +  sVal ;
      p.style.color = col ;
      p.style.textTransform = ' capitalize';
      p.style.fontWeight = "bold";
      x1.value= '';
      return;
};


// ----------------------------------------------------------------
const a = document.getElementById("background" );

 const backgroundColor = (() =>{
   a.style.backgroundColor = 'rgba(239, 234, 234, 0.7)';
//    a.style.backgroundColor = 'red';
   })(); 

a.addEventListener("onload", backgroundColor );   
