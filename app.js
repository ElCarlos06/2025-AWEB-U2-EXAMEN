const inputNombreEmpresa = document.getElementById('inputNombreEmpresa');
const inputNombreEnlace = document.getElementById('inputNombreEnlace');
const inputTelefono = document.getElementById('inputTelefono');

const btnSave = document.getElementById('btnSave');
const btnDelete = document.getElementById('btnDelete');

btnSave.addEventListener('click',()=>{
    const nombreEmpresa = inputNombreEmpresa.value;
    const nombreEnlace = inputNombreEnlace.value;
    const telefono = inputTelefono.value;

    const empresa = {
        nombreEmpresa,
        nombreEnlace,
        telefono
    }

    console.log(empresa);
    const jsonString = JSON.stringify(empresa);
    sessionStorage.setItem('borradorEmpresa', jsonString);
});

btnDelete.addEventListener('click',()=>{
    sessionStorage.removeItem('borradorEmpresa');
});

document.addEventListener('DOMContentLoaded',()=>{
    const dataLocal = sessionStorage.getItem('borradorEmpresa');

    ///Al no estar tipado si no tiene nada es un boleano
    if(dataLocal){
        const parceado = JSON.parse(dataLocal);
        console.log(parceado);

        inputNombreEmpresa.value = parceado.nombreEmpresa;
        inputNombreEnlace.value = parceado.nombreEnlace;
        inputTelefono.value = parceado.telefono;
    }

});