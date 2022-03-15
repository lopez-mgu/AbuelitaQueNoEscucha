var x=0;


function onClick($this) {
    let val = $this.previousElementSibling.value;
    let valMayus = val.toUpperCase();
    let button=document.getElementById('Button');
    
    if (val===valMayus && val!='ADIOS TQM'){
        console.log('NO, NO DESDE 1983')
    }else if(val==='ADIOS TQM'){
        x=x+1;
        console.log('Abuela offline',x);
    } else{
        console.log('¡¿EH?! ¡NO TE ESCUCHO, HIJO');
    }

    if(x===3){
        button.disabled=true;
        console.log('Para habilitar abuela vuelva  recargar la pagina');
    }
   // if(val == ''){
   //     console.log('no input');
   // }else{
   // console.log(valMayus);
   // }
  }