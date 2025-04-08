let times = [
    {
        nome: "Flamengo",
        goleiro: "Matheus Cunha Queiroz",
        alaDireita: "Otavio oliveira dos Santos",
        alaEsquerda: "Alex Sandro",
        pivo: "Taya Gallizzi",
        fixo: "Gabigol",
        tecnico: "Filipe Luis",
        vitorias: "53",
        derrotas: "26",
    },
    {
        nome: "Santos",
        goleiro: "Gabriel Brasao",
        alaDireita: "Leo Godoy",
        alaEsquerda: "Gabriel Inocencio",
        pivo: "Gil",
        fixo: "Guilherme Soares",
        tecnico: "Pedro Caixinha",
        vitorias: "30",
        derrotas: "14",
    },
    {
        nome: "Corinthians",
        goleiro: "Lucas Oliveira",
        alaDireita: "Joao Pedro",
        alaEsquerda: "Igor Carioca",
        pivo: "Vinicius Silva",
        fixo: "Maicon",
        tecnico: "Fernando Malafaia",
        vitorias: "20",
        derrotas: "45",
    },
    {
        nome: "Palmeiras",
        goleiro: "THiago de Paula",
        alaDireita: "Dieguinho Alvez",
        alaEsquerda: "Cassio Silva",
        pivo: "Breno Sirio",
        fixo: "Pedro Paulinho",
        tecnico: "Felipe Alvarez",
        vitorias: "38",
        derrotas: "15",
    },
    {
        nome: "Sao Paulo",
        goleiro: "Ernesto Virio",
        alaDireita: "Cassio Barbosa",
        alaEsquerda: "Luan Chicora",
        pivo: "Rvi Silva",
        fixo: "Ezemmar Bastos ",
        tecnico: "Davi Bastos",
        vitorias: "21",
        derrotas: "19",
    },
]

function verTimes(){
    times.forEach((time)=>{
        console.log(times[0].nome+"-"+times[0].goleiro + "(goleiro)");
    });
}
verTimes();
