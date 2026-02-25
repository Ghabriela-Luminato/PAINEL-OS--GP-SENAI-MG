// ==========================
// CADASTRO
// ==========================
function cadastrar() {
  const usuario = document.getElementById("cadUsuario").value;
  const senha = document.getElementById("cadSenha").value;

  if (!usuario || !senha) {
    alert("Preencha todos os campos");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuarioExiste = usuarios.find(u => u.usuario === usuario);

  if (usuarioExiste) {
    alert("Usuário já existe!");
    return;
  }

  usuarios.push({ usuario, senha });

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}


// ==========================
// LOGIN
// ==========================
function login() {
  const usuario = document.getElementById("loginUsuario").value;
  const senha = document.getElementById("loginSenha").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuarioValido = usuarios.find(
    u => u.usuario === usuario && u.senha === senha
  );

  if (usuarioValido) {
    localStorage.setItem("usuarioLogado", usuario);
    window.location.href = "index.html";
  } else {
    alert("Usuário ou senha incorretos!");
  }
}


// ==========================
// PROTEGER INDEX
// ==========================
function verificarLogin() {
  const usuario = localStorage.getItem("usuarioLogado");

  if (!usuario) {
    window.location.href = "login.html";
  }
}


// ==========================
// LOGOUT
// ==========================
function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "login.html";
}
