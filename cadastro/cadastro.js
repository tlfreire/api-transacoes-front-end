
     function cadastrarUsuario() {
   
        let name = document.getElementById("inputName").value;
        let cpf = document.getElementById("inputCpf").value;
        let email = document.getElementById("inputEmail").value;
        let age = document.getElementById("inputAge").value;

        axios.post('http://localhost:3000/users', {
        name: name,
        cpf: cpf,
        email: email,
        age: age
     }).then(retorno => {
        location.href="http://127.0.0.1:5500/aula-front-transacoes/listaUsuarios/listaDeUsuarios.html"
     });
     }

     function voltar() {
      location.href="http://127.0.0.1:5500/aula-front-transacoes/listaUsuarios/listaDeUsuarios.html"
     }