console.log("Iniciando llamado a la api")
var contents = document.querySelector ('#contents')
function get(){
fetch( 'https://randomuser.me/api' )
    .then(response => response.json())
    .then(data => {
            console.log(data.results[ '0' ])
            contents.innerHTML = `
            <img src="${data.results[ '0' ].picture.large}" width="200px" class="img-fluid mx-auto rounded-circle">
            <p><strong>Nombre:</strong> ${data.results[ '0' ].name.first} ${data.results[ '0' ].name.last}</p>
            <p><strong>Email:</strong> ${data.results[ '0' ].email}</p>
            <p><strong>Ciudad:</strong> ${data.results[ '0' ].location.city}, ${data.results[ '0' ].location.country} </p>
            <p><strong>Telefono:</strong> ${data.results[ '0' ].phone}</p>
            
            `
        
    });
}   