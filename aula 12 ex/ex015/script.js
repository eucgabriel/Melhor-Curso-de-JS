function verificar() {
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res  = document.querySelector('div#res')
    if(fano.value.lenght == 0 || fano.value > ano){
        alert('[ERROR] Verifique os Dados e tente novamente!!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gen = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-homem.png')
            }else if(idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-homem.png')
            }else if(idade >= 21 && idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-homem.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-homem.png')
            }
        } else{
            gen = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-mulher.png')
            }else if(idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-mulher.png')
            }else if(idade >= 21 && idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-mulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }
} 