function Carregar() {
    var msg = document.getElementById("msg")
    var imagem = document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        imagem.src = "https://cdn-icons-png.flaticon.com/512/8775/8775751.png"
        document.body.style.background = "rgba(137, 183, 246, 0.897)"
        document.body.style.color = "rgba(137, 183, 246, 0.897)"
    }
    else if (hora > 12 && hora < 18) {
        imagem.src = "https://cdn-icons-png.flaticon.com/512/2419/2419815.png"
        document.body.style.background = "rgba(247, 201, 155, 0.825)"
        document.body.style.color = "rgba(247, 201, 155, 0.825)"
    }
    else {
        imagem.src = "https://images.vexels.com/media/users/3/308717/isolated/preview/6458be7c4477c61c802881e2f1065133-noite-estrelada-tranquila.png"
        document.body.style.background = "rgba(2, 56, 132, 0.897)"
        document.body.style.color = "rgba(2, 56, 132, 0.897)"
        // boa noite

    }
}