document.addEventListener('DOMContentLoaded', function() {

    descargarUsuarios(30);


});




function descargarUsuarios(cantidad) {
    const api = `https://randomuser.me/api/?nat=US&results=${cantidad}`;

    fetch(api)

    .then(repuesta => repuesta.json())
        .then(datos => imprimirHTML(datos.results));

}

function imprimirHTML(datos) {
    datos.forEach(usuario => {

        const { name: { first }, name: { last }, email, cell, gender, id: { value } } = usuario;

        contenido.innerHTML += `
            <tr>
            <td class="celda">${value}</td>
            <td class="celda">${first}</td>
            <td class="celda">${last}</td>
            <td class="celda">${gender}</td>
            <td class="celda">${cell}</td>
            <td class="celda">${email}</td>
         </tr>
            `;

    });
}