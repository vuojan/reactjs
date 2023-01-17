const products = [
    {
        tittle: "Chaos Orb",
        price: 25,
        imgurl: "/assets/imagenes/Chaos Orb.jpg",
        detail: "Pieza clave a la hora de forjar equipamiento, permite mejorar un objeto reiniciando sus atributos de manera aleatoria"
    },
    {
        tittle: "Divine Orb",
        price: 300,
        imgurl: "/assets/imagenes/Divine Orb.jpg",
        detail: "Uno de los orbes mas valiosos a la hora de crear equipamiento, permite reiniciar los atributos explicitos de un objeto de equipo "
    },
    {
        tittle: "Ancient Orb",
        price: 100,
        imgurl: "/assets/imagenes/Ancient Orb.jpg",
        detail: "Orbe que permite convertir un objeti unico en otro distinto, pero de la misma clase",
    },
    {
        tittle: "Vaal Orb",
        price: 10,
        imgurl: "/assets/imagenes/Vaal Orb.jpg",
        detail: "Orbe que ofrece la posibilidad de corromper un objeto, existiendo la posibilidad que este adquiera nuevas propiedades unicas",
    },
    {
        tittle: "Orb of Annulment",
        price: 10,
        imgurl: "/assets/imagenes/Orb of Annulment.jpg",
        detail: "Orbe que puede ser utilizado para remover un modificador, de manera aleatoria, de un objeto de equipamiento magico o raro", 
    },
    {
        tittle: "Regal Orb",
        price: 7,
        imgurl: "assets/imagenes/Regal Orb.jpg",
        detail:"Orbe cuya finalidad es mejorar una pieza de equipo de magico a raro. El objeto mantiene sus modificadores, pero adquiere un nuevo afijo aleatorio", 
    },
    {
        tittle: "Mirror of Kalandra",
        price: 1500,
        imgurl: "assets/imagenes/Mirror of Kalandra.jpg",
        detail: "Uno de los objetos mas valiosos del juego, permite duplicar piezas de equipo, siempre y cuando no esten corruptas ni sean unicas",
    },
    {
        tittle: "Orb of Binding",
        price: 5,
        imgurl: "assets/imagenes/Orb_of_Binding.jpg",
        detail: "Permite mejorar un objeto de categoria magica a rara, dandole nuevos modificadores aleatorios",
    },
    {
        tittle: "Orb of Alteration",
        price: 3,
        imgurl: "assets/imagenes/Orb of Alteration.jpg",
        detail: "Permite modificar aleatoriamente los modificadores de un objeto de categoria magica"
    },
    {
        tittle: "Orb of Scouring",
        price: 4,
        imgurl: "assets/imagenes/Orb Of Scouring.jpg",
        detail: "Reinicia las propiedades de un objeto, quitandole sus modificadores y retornandolo a comun"
    },
    {
        tittle: "Awakened Sextant",
        price: 35, 
        imgurl: "assets/imagenes/Awakened Sextant.jpg",
        detail: "Modifica o añade un atributo a una watchstone",
    },
    {
        tittle: "Elevated Sextant",
        price: 50, 
        imgurl: "assets/imagenes/Elevated Sextant.jpg",
        detail: "Modifica o añade un atributo de mayor rareza a una watchstone"
    },
    {
        tittle: "Cartographer's Chisel",
        price: 1, 
        imgurl: "assets/imagenes/Cartographer's Chisel.jpg",
        detail: "Aumenta la cualidad de un objeto de mapa"
    },
    {
        tittle: "Orb of Horizons",
        price: 2, 
        imgurl: "assets/imagenes/Orb_of_Horizons.jpg",
        detail: "Conviete un mapa en otro cualquiera de la misma categoria"
    },
    {
        tittle: "Harbinger's Orb",
        price: 4, 
        imgurl: "assets/imagenes/Harbinger's Orb.jpg",
        detail: "Conviete un mapa en otro cualquiera de la misma categoria, con la posibilidad de transformalo en un mapa unico"
    },
    {
        tittle: "Exalted Orb",
        price: 150, 
        imgurl: "assets/imagenes/Exalted Orb.jpg",
        detail: "Al ser aplicado a un objeto raro, añade un nuevo afijo aleatorio"
    },
    {
        tittle: "Crusader Exalted Orb",
        price: 200, 
        imgurl: "assets/imagenes/Crusaders_Exalted_Orb.jpg",
        detail: "Otorga influencia del Crusader a un objeto raro, añaniendo un nuevo afijo unico"
    },
    {
        tittle: "Hunter Exalted Orb",
        price: 200, 
        imgurl: "assets/imagenes/Hunters_Exalted_Orb.jpg",
        detail: "Otorga influencia del Hunter a un objeto raro, añaniendo un nuevo afijo unico"
    },
    {
        tittle: "Warlord Exalted Orb",
        price: 200, 
        imgurl: "assets/imagenes/Warlords_Exalted_Orb.jpg",
        detail: "Otorga influencia del Warlord a un objeto raro, añaniendo un nuevo afijo unico"
    },
    {
        tittle: "Redeemer Exalted Orb",
        price: 200, 
        imgurl: "assets/imagenes/Redeemers_Exalted_Orb.jpg",
        detail: "Otorga influencia del Redeemer a un objeto raro, añaniendo un nuevo afijo unico"
    },
    {
        tittle: "Offering to the Goddess",
        price: 1, 
        imgurl: "assets/imagenes/Offeringtothegoddess.jpg",
        detail: "Entrada requerida para ingresar al laberinto"
    },
    {
        tittle: "Orb of Regret",
        price: 2, 
        imgurl: "assets/imagenes/Orb of Regret.jpg",
        detail: "Su utilizacion permite deshacer puntos asignados al arbol de habilidades, para poder utilazarlo nuevamente"
    },
    {
        tittle: "Orb of Regret",
        price: 2, 
        imgurl: "assets/imagenes/Orb of Regret.jpg",
        detail: "Su utilizacion permite deshacer puntos asignados al arbol de habilidades, para poder utilazarlo nuevamente"
    },
    {
        tittle: "Stacked Deck",
        price: 10, 
        imgurl: "assets/imagenes/Stacked Deck.jpg",
        detail: "Al utizarlo este objeto se obtiene, de manera aleatoria, una divination card"
    },
    {
        tittle: "Glassblower's Bauble",
        price: 0.5, 
        imgurl: "assets/imagenes/Glassblower's Bauble.jpg",
        detail: "Permite mejorar la cualidad de un Flask, hasta un maximo del 20%"
    },
    {
        tittle: "Orb of Unmaking",
        price: 15, 
        imgurl: "assets/imagenes/Orb of Unmaking.jpg",
        detail: "Su utilizacion permite deshacer puntos asignados al arbol de habilidades del atlas, para poder utilazarlo nuevamente"
    },
    {
        tittle: "Gemcutter's Prism",
        price: 20, 
        imgurl: "assets/imagenes/Gemcutter's Prism.jpg",
        detail: "Permite mejorar la cualidad de una Gema, hasta un maximo del 20%"
    },
]

export default products