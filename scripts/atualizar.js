window.addEventListener('load', () => {
   const id = localStorage.getItem("id");

   axios.get(`https://thiago-heroku-api-transacoes-b.herokuapp.com/users/${id}`)
       .then((resposta) => {
           const { name, email, cpf, age } = resposta.data;

           document.getElementById("inputName").value = name;
           document.getElementById("inputCpf").value = cpf;
           document.getElementById("inputCpf").setAttribute("disabled", "disabled");
           document.getElementById("inputEmail").value = email;
           document.getElementById("inputAge").value = age;
       }
    );
});

function atualizarUsuario() {

    const id = localStorage.getItem("id");
    const name = document.getElementById("inputName").value;
    const cpf = document.getElementById("inputCpf").value;
    const email = document.getElementById("inputEmail").value;
    const age = document.getElementById("inputAge").value;

    axios.put(`https://thiago-heroku-api-transacoes-b.herokuapp.com/users/${id}`, {
        name: name,
        cpf: cpf,
        email: email,
        age: age
    }).then((resposta) => {
            alert("Usuário alterado");
            location.href="../listaUsuarios/listaDeUsuarios.html"
    })
}

function apagarUsuario() {
    const id = localStorage.getItem("id");
    axios.delete(`https://thiago-heroku-api-transacoes-b.herokuapp.com/users/${id}`)
        .then((resposta) => {
            alert("Usuário excluído");
            location.href="../listaUsuarios/listaDeUsuarios.html"
        })
}

function voltar() {
    location.href="../listaUsuarios/listaDeUsuarios.html"
}