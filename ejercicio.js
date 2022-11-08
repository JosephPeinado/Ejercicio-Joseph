var array;


function arraymulti(){
    var array = [
        {username:"Joseph", cod:"192124", doc:"1193046741", tipouser:"estudiante"},
        {username:"Steven", cod:"192125", doc:"1193046741", tipouser:"profesor"},
        {username:"Peinado", cod:"192126", doc:"1193046741", tipouser:"empleado"}
    ]
}
    function compara(){
    var nombre = $("#nombre").val();
    for (let i=0;i<array.length;i++){
        if(nombre==array[i].username){
            console.log("El nombre si existe");
        }else {
            console.log("el nombre no existe");
        }
    }
}