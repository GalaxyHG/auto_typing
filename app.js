 // EFEITO ÚNICO

        // function typeWriter(elemento) {
        //   const textoArray = elemento.innerHTML.split('');
        //   elemento.innerHTML = '';
        //   textoArray.forEach((letra, i) => {
        //     setTimeout(() => elemento.innerHTML += letra, 75 * i);
        //   });
        // }

        // Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
        // function typeWriter(elemento) {
        //   const textoArray = elemento.innerHTML.split('');
        //   elemento.innerHTML = '';
        //   for(let i = 0; i < textoArray.length; i++) {
        //     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
        //   }
        // }

        // const titulo = document.querySelector('h1');
        // typeWriter(titulo);

        // EFEITO CONTÍNUO

        const digitando = document.querySelector('[data-js="digitando"]');

        const mensagens = ['Atriz', 'Desenvolvedora Web-Mobile', 'Fullstack', 'Desenvolvedora Front-End', 'Cientista de Dados', 'Analista de Testes'];

        let mensagemIndex = 0;
        let caractereIndex = 0;
        let mensagemAtual = '';
        let caractereAtual = '';

        const type = () => {
            if (mensagemIndex === mensagens.length) {
                mensagemIndex = 0;
            }

            mensagemAtual = mensagens[mensagemIndex];
            caractereAtual = mensagemAtual.slice(0, caractereIndex++);
            digitando.textContent = caractereAtual;

            if (caractereAtual.length === mensagemAtual.length) {
                mensagemIndex++;
                caractereIndex = 0;
            }
        }

        setInterval(type, 150)