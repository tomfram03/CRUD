function enviar() {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value

    document.getElementById('list').innerHTML += `
        <p>Nome: ${nome}</p>
        <p>Email: ${email}</p>
    `
}