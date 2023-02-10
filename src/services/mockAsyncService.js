const databaseItems = [
    {
        id: 1,
        tittle: "Chaos Orb",
        category: "Crafting",
        price: 25,
        imgurl: "/assets/imagenes/Chaos Orb.jpg",
        detail: "Pieza clave a la hora de forjar equipamiento, permite mejorar un objeto reiniciando sus atributos de manera aleatoria",
        stock: 80
    },
    {
        id: 2,
        tittle: "Divine Orb",
        category: "Crafting",
        price: 300,
        imgurl: "/assets/imagenes/Divine Orb.jpg",
        detail: "Uno de los orbes mas valiosos a la hora de crear equipamiento, permite reiniciar los atributos explicitos de un objeto de equipo ",
        stock: 50
    },
    {
        id: 3,
        tittle: "Ancient Orb",
        category: "Crafting",
        price: 100,
        imgurl: "/assets/imagenes/Ancient Orb.jpg",
        detail: "Orbe que permite convertir un objeto unico en otro distinto, pero de la misma clase",
        stock: 65
    },
    {
        id: 4,
        tittle: "Vaal Orb",
        category: "Crafting",
        price: 10,
        imgurl: "/assets/imagenes/Vaal Orb.jpg",
        detail: "Orbe que ofrece la posibilidad de corromper un objeto, existiendo la posibilidad que este adquiera nuevas propiedades unicas",
        stock: 95
    },
    {
        id: 5,
        tittle: "Orb of Annulment",
        category: "Crafting",
        price: 10,
        imgurl: "/assets/imagenes/Orb of Annulment.jpg",
        detail: "Orbe que puede ser utilizado para remover un modificador, de manera aleatoria, de un objeto de equipamiento magico o raro", 
        stock: 120
    },
    {
        id: 6,
        tittle: "Regal Orb",
        category: "Crafting",
        price: 7,
        imgurl: "/assets/imagenes/Regal Orb.jpg",
        detail:"Orbe cuya finalidad es mejorar una pieza de equipo de magico a raro. El objeto mantiene sus modificadores, pero adquiere un nuevo afijo aleatorio",
        stock: 120 
    },
    {
        id: 7,
        tittle: "Mirror of Kalandra",
        category: "Crafting",
        price: 1500,
        imgurl: "/assets/imagenes/Mirror of Kalandra.jpg",
        detail: "Uno de los objetos mas valiosos del juego, permite duplicar piezas de equipo, siempre y cuando no esten corruptas ni sean unicas",
        stock: 20
    },
    {
        id: 8,
        tittle: "Orb of Binding",
        category: "Crafting",
        price: 5,
        imgurl: "/assets/imagenes/Orb_of_Binding.jpg",
        detail: "Permite mejorar un objeto de categoria magica a rara, dandole nuevos modificadores aleatorios",
        stock: 110
    },
    {
        id: 9,
        tittle: "Orb of Alteration",
        category: "Crafting",
        price: 3,
        imgurl: "/assets/imagenes/Orb of Alteration.jpg",
        detail: "Permite modificar aleatoriamente los modificadores de un objeto de categoria magica",
        stock: 150
    },
    {
        id: 10,
        tittle: "Orb of Scouring",
        category: "Crafting",
        price: 4,
        imgurl: "/assets/imagenes/Orb Of Scouring.jpg",
        detail: "Reinicia las propiedades de un objeto, quitandole sus modificadores y retornandolo a comun",
        stock: 75
    },
    {
        id: 11,
        tittle: "Awakened Sextant",
        category: "Mapas",
        price: 35, 
        imgurl: "/assets/imagenes/Awakened Sextant.jpg",
        detail: "Modifica o añade un atributo a una watchstone",
        stock: 40
    },
    {
        id: 12,
        tittle: "Elevated Sextant",
        category: "Mapas",
        price: 50, 
        imgurl: "/assets/imagenes/Elevated Sextant.jpg",
        detail: "Modifica o añade un atributo de mayor rareza a una watchstone",
        stock: 45
    },
    {
        id: 13,
        tittle: "Cartographer's Chisel",
        category: "Mapas",
        price: 1, 
        imgurl: "/assets/imagenes/Cartographer's Chisel.jpg",
        detail: "Aumenta la cualidad de un objeto de mapa",
        stock: 120
    },
    {
        id: 14,
        tittle: "Orb of Horizons",
        category: "Mapas",
        price: 2, 
        imgurl: "/assets/imagenes/Orb_of_Horizons.jpg",
        detail: "Conviete un mapa en otro cualquiera de la misma categoria",
        stock: 65
    },
    {
        id: 15,
        tittle: "Harbinger's Orb",
        category: "Mapas",
        price: 4, 
        imgurl: "/assets/imagenes/Harbinger's Orb.jpg",
        detail: "Conviete un mapa en otro cualquiera de la misma categoria, con la posibilidad de transformalo en un mapa unico",
        stock: 80
    },
    {
        id: 16,
        tittle: "Exalted Orb",
        category: "Exaltados",
        price: 150, 
        imgurl: "/assets/imagenes/Exalted Orb.jpg",
        detail: "Al ser aplicado a un objeto raro, añade un nuevo afijo aleatorio",
        stock: 50
    },
    {
        id: 17,
        tittle: "Crusader Exalted Orb",
        category: "Exaltados",
        price: 200, 
        imgurl: "/assets/imagenes/Crusaders_Exalted_Orb.jpg",
        detail: "Otorga influencia del Crusader a un objeto raro, añaniendo un nuevo afijo unico",
        stock: 35
    },
    {
        id: 18,
        tittle: "Hunter Exalted Orb",
        category: "Exaltados",
        price: 200, 
        imgurl: "/assets/imagenes/Hunters_Exalted_Orb.jpg",
        detail: "Otorga influencia del Hunter a un objeto raro, añaniendo un nuevo afijo unico",
        stock: 35
    },
    {
        id: 19,
        tittle: "Warlord Exalted Orb",
        category: "Exaltados",
        price: 200, 
        imgurl: "/assets/imagenes/Warlords_Exalted_Orb.jpg",
        detail: "Otorga influencia del Warlord a un objeto raro, añaniendo un nuevo afijo unico",
        stock: 33
    },
    {
        id: 20,
        tittle: "Redeemer Exalted Orb",
        category: "Exaltados",
        price: 200, 
        imgurl: "/assets/imagenes/Redeemers_Exalted_Orb.jpg",
        detail: "Otorga influencia del Redeemer a un objeto raro, añaniendo un nuevo afijo unico",
        stock: 34
    },
    {
        id: 21,
        tittle: "Offering to the Goddess",
        category: "Otros",
        price: 1, 
        imgurl: "/assets/imagenes/Offeringtothegoddess.jpg",
        detail: "Entrada requerida para ingresar al laberinto",
        stock: 100
    },
    {
        id: 22,
        tittle: "Orb of Regret",
        category: "Otros",
        price: 2, 
        imgurl: "/assets/imagenes/Orb of Regret.jpg",
        detail: "Su utilizacion permite deshacer puntos asignados al arbol de habilidades, para poder utilazarlo nuevamente",
        stock: 111
    },
    {
        id: 23,
        tittle: "Stacked Deck",
        category: "Otros",
        price: 10, 
        imgurl: "/assets/imagenes/Stacked Deck.jpg",
        detail: "Al utizarlo este objeto se obtiene, de manera aleatoria, una divination card",
        stock: 100
    },
    {
        id: 24,
        tittle: "Glassblower's Bauble",
        category: "Otros",
        price: 0.5, 
        imgurl: "/assets/imagenes/Glassblower's Bauble.jpg",
        detail: "Permite mejorar la cualidad de un Flask, hasta un maximo del 20%",
        stock: 70
    },
    {   
        id: 25,
        tittle: "Orb of Unmaking",
        category: "Otros",
        price: 15, 
        imgurl: "/assets/imagenes/Orb of Unmaking.jpg",
        detail: "Su utilizacion permite deshacer puntos asignados al arbol de habilidades del atlas, para poder utilazarlo nuevamente",
        stock: 47
    },
    {
        id: 26,
        tittle: "Gemcutter's Prism",
        category: "Otros",
        price: 20, 
        imgurl: "/assets/imagenes/Gemcutter's Prism.jpg",
        detail: "Permite mejorar la cualidad de una Gema, hasta un maximo del 20%",
        stock: 63
    },
]

function getItems(){
    return new Promise ((resolve,reject) =>{
        setTimeout(()=> {
            resolve(databaseItems);
        }, 2000);
    });    
}

export function getISingletem(itemid){

    let itemReq = databaseItems.find((item)=>{
        return item.id === Number(itemid)
    });

    return new Promise ((resolve,reject) =>{
        setTimeout(()=> {
            if (itemReq !== undefined)
                resolve(itemReq);
            else 
                reject("Item no encontrado")        
        }, 2000);
    });    
}

export function getItemsByCategory(categoryid){

    let itemCategory= databaseItems.filter((item) => item.category === categoryid)
    

    return new Promise ((resolve,reject) =>{
        setTimeout(()=> {
            resolve(itemCategory);
        }, 2000);
    });   
}

export default getItems;