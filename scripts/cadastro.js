
     function cadastrarUsuario() {
   
        let name = document.getElementById("inputName").value;
        let cpf = document.getElementById("inputCpf").value;
        let email = document.getElementById("inputEmail").value;
        let age = document.getElementById("inputAge").value;

        axios.post('https://thiago-heroku-api-transacoes-b.herokuapp.com/users', {
        name: name,
        cpf: cpf,
        email: email,
        age: age
     }).then(retorno => {
        location.href="../listaUsuarios/listaDeUsuarios.html"
     });
     }

     function voltar() {
      location.href="../listaUsuarios/listaDeUsuarios.html"
     }