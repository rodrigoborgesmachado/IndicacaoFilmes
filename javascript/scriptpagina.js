function topo(){
	parent.scroll(0,0);
}

$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#ClinicaJonasGabriela']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
})

function CriarContas(){
    var lista = new Array();
    
    for(i = 0; i< 100;i++){
        var num1 = 0;
        while(num1 == 0 || num1 == 1){
            num1 = Math.floor(Math.random() * 11);
        }
        
        lista.push(num1);
    }
    
    return lista;
};

function CriarImagens(){
    var lista = new Array();
    
    for(i = 0; i< 20;i++){
        var num1 = Math.floor(Math.random() * 30);
        
        lista.push(num1);
    }
    
    return lista;
};

function EnviarRequisicaoPOST(nome, tempo){
    var xhr = new XMLHttpRequest();

    var dados = JSON.stringify({nome, tempo});

    xhr.open("POST", "http://tabuadadivertida.sunsalesystem.com.br/PHP/InsereResultado.php");
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            //sucesso!
        } else {
            alert('Não foi possível inserir seu jogo :(! Ele não será apresentado no ranking');
            //erro!
        }
    }
    );

    xhr.send(dados);
}

function BuscaLista(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://filmes.sunsalesystem.com.br/PHP/GetFilmes.php", false);
    xhr.send(null);

    if(xhr.status === 200){
        return JSON.parse(xhr.responseText);
    }
    else{
        return null;
    }
}

function BuscaTiposFilmes(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://filmes.sunsalesystem.com.br/PHP/GetTipoFilmes.php", false);
    xhr.send(null);

    if(xhr.status === 200){
        return JSON.parse(xhr.responseText);
    }
    else{
        return null;
    }
}

function VotaLike(chave){
    var xhr = new XMLHttpRequest();

    var dados = JSON.stringify({chave});

    xhr.open("POST", "http://filmes.sunsalesystem.com.br/PHP/IndicaFilme.php");
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            //sucesso!
        } else {
            alert('Não foi possível votar!');
            //erro!
        }
    }
    );

    xhr.send(dados);
}

function VotaDesLike(chave){
    var xhr = new XMLHttpRequest();

    var dados = JSON.stringify({chave});

    xhr.open("POST", "http://filmes.sunsalesystem.com.br/PHP/NaoIndicaFilme.php");
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            //sucesso!
        } else {
            alert('Não foi possível votar!');
            //erro!
        }
    }
    );

    xhr.send(dados);
}

function EnviaDadosFilme(nome, tipo, indicacao){
    var xhr = new XMLHttpRequest();

    var quantidadeVotos = 1;
    var dados = JSON.stringify({nome, tipo, indicacao, quantidadeVotos});
    xhr.open("POST", "http://filmes.sunsalesystem.com.br/PHP/InsereFilme.php");
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            //sucesso!
        } else {
            alert('Não foi possível inserir o filme');
            //erro!
        }
    }
    );

    xhr.send(dados);
}