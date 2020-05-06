function clic(){
    let who = ['The dog','My granma','His turtle','My bird'];
    let what = [' eat',' pissed',' crushed',' broked'];
    let when = [' before the class',' right in time',' when I finished',' during my lunch',' while I was praying'];

    
    
    var prueba = Math.floor(Math.random() * who.length);

    var prueba2 = Math.floor(Math.random() * what.length);

    var prueba3 = Math.floor(Math.random() * when.length);
    
    var resultado = who[prueba] + what[prueba2] + when[prueba3]
    
    document.getElementsByClassName("excuse")[0].innerHTML = resultado;
    

    /*document.getElementById("excuse").innerHTML = resultado;*/
    /*console.log(who[prueba] + what[prueba2] + when[prueba3]);*/

  }
  
