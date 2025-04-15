
    let times = [
        {
            nome: "acbf",
            goleiro:"angelo",
            alaDireita: "alvez",
            alaEsquerda: "luiz felipe",
            pivo: "camilo",
            fixo: "daniel",
            tecnico: "sandro Luiz",
            vitorias: 0,
            derrotas: 0,
        },{
            nome: "Assoeva",
            goleiro: "eduardo",
            alaDireita: "jaime",
            alaEsquerda: "romarinho",
            pivo: "dill",
            fixo: "jota",
            tecnico: "vinicios",
            vitorias: 0,
            derrotas: 0
        },{
            nome: "dinamico",
            goleiro: "helano",
            alaDireita: "joazinho",
            alaEsquerda: "perereca",
            pivo: "kailot",
            fixo: "luisinho",
            tecnico: "preto",
            vitorias: 0,
            derrotas: 0
        },{
            nome: "epaminondas",
            goleiro: "dudu",
            alaDireita: "gide",
            alaEsquerda: "bode",
            pivo: "hellman",
            fixo: "xandy",
            tecnico: "nelson",
            vitorias: 0,
            derrotas: 97
        },{
            nome: "magnos",
            goleiro: "lan",
            alaDireita: "carlinho",
            alaEsquerda: "esquerda",
            pivo: "leozin",
            fixo: "lucas gomes",
            tecnico: "ricardinho",
            vitorias: 0,
            derrotas: 0
        },
        
    ]
    

//console.log(times[0])

function verTimes(){
    times.forEach((time) => {
       console.log(time.nome + "-" + 
                   time.goleiro + "(goleiro)," + 
                   time.alaDireito + "(Ala Direito)," + 
                   time.alaEsquerdo + "(Ala Esquerdo)," + 
                   time.fixo + "(Fixo),"+
                   time.tecnico + "(Técnicos),"+
                   time.vitorias + "(Vitorias),"+
                   time.derrotas + "(derrotas)")
 
    });
 }

 function criarArquivo(){
    let dadosEmTexto = JSON.stringify(times);
    console.log(dadosEmTexto);
    const fs = require("fs");
    fs.writeFileSync("dados.json", dadosEmTexto);
    console.log("Arquivo criado");

 }

 criarArquivo();

 verTimes();

 