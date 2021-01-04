/* Cookies são arquivos criados pelos websites que você visita.
 Eles tornam sua experiência on-line mais fácil, 
 economizando informações de navegação. 
 Com os cookies, os sites podem manter você conectado, 
 lembrar suas preferências do site e fornecer conteúdo 
 relevante localmente. pode guardar ultima pagina acessada e senhas, te manter logado

 Cookie é um mecanismo de armazenamento de suas variáveis do lado do cliente. É armazenado fisicamente no computador do cliente pelo navegador. Diferentes usuários no mesmo computador podem ler/utilizar o mesmo cookie.

Por conta disso (algumas observações):

Você não deve armazenar dados sensíveis no cookie.
Você não deve armazenar dados que pertence a uma conta de usuário.
O cookie não tem efeito sobre os recursos do servidor.
Cookie expira na data que você especificar.
A Session é também um mecanismo de armazenamento de suas variáveis, porém do lado do servidor. Por padrão, a session armazena os seus dados na memória do servidor. Mas você pode configurar para armazenar pelo SQL Server, por exemplo. O mesmo usuário pode executar dois ou mais navegadores e cada navegador tem a sua própria sessão.

Ou seja:

Você pode guardar dados sensíveis em sessão.
Você não deve salvar tudo em sessão. que é desperdício de recursos do servidor.
Após o usuário fechar o navegador, o timeout fará com que todas as informações sejam apagadas. Por padrão, esse tempo é de 20 minuto

*/

// localstrore = cookie ou seja mesmo ele fechand o navegador o dado fica salvo

localStorage.setItem("nome", "matheus");
console.log(localStorage.getItem("nome"));

//outra forma de fazer
localStorage.sobrenome="machado";
console.log(localStorage.sobrenome);


//localStorage.removeItem("nome");
