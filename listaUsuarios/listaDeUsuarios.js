window.addEventListener('load', () => {
    axios.get('http://localhost:3000/users')
        .then(resposta => {
            ImprimirDados(resposta.data.users);
        });
    });

 function ImprimirDados(data) {
     const dados = document.getElementById("corpo");
     let novoConteudo = "";
     let row = 1;
     data.forEach((user) => {
         novoConteudo += `
         <tr>
            <th>${row}</th>
            <td><a href='#' onclick='atualizar("${user.userId}");'>${user.name}</a></td>
            <td>${user.cpf}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
        </tr>
         `;
         row++;
     });
     dados.innerHTML = novoConteudo;
 }

 function atualizar(id) {
    localStorage.setItem("id", id);

    location.href='http://127.0.0.1:5500/aula-front-transacoes/atualizar/atualizar.html';
}

