import { initializeApp } from "firebase/app";
import {addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlN695kho6y4Ox585R0DAVBjo9pfmWHr8",
  authDomain: "e-commerce---reactjs.firebaseapp.com",
  projectId: "e-commerce---reactjs",
  storageBucket: "e-commerce---reactjs.appspot.com",
  messagingSenderId: "209404351015",
  appId: "1:209404351015:web:cf76a397ac960af77cf402"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function getItems(){
    const productsCollection = collection (db, "products"); 
    const querySnapshot = await getDocs(productsCollection);
    const dataDocs = querySnapshot.docs.map((doc) => 
    ({...doc.data(), id: doc.id}));
    return dataDocs;
}


export async function getISingletem(itemid){
    const docRef = doc ( db, "products", itemid);
    const snapshot = await getDoc(docRef);
    const docData = snapshot.data();
    docData.id = snapshot.id;
    return docData;
}

export function getItemsByCategory(categoryid){
    const productsCollectionRef= collection(db, "products");
    const q = query(productsCollectionRef, where("category", "==", categoryid ))
    const querySnapshot = getDocs(q);
    const dataDocs = querySnapshot.docs.map((doc) => 
    ({...doc.data(), id: doc.id}));
    return dataDocs;
}
    
    


export async function exportData (){
   const productsCollectionRef = collection(db, "products");
   
    const products = [
        {
            id: 1,
            tittle: "Chaos Orb",
            category: "Crafting",
            price: 25,
            imgurl: "/assets/imagenes/Chaos Orb.jpg",
            detail: "Pieza clave a la hora de forjar equipamiento, permite mejorar un objeto reiniciando sus atributos de manera aleatoria"
        },
        {
            id: 2,
            tittle: "Divine Orb",
            category: "Crafting",
            price: 300,
            imgurl: "/assets/imagenes/Divine Orb.jpg",
            detail: "Uno de los orbes mas valiosos a la hora de crear equipamiento, permite reiniciar los atributos explicitos de un objeto de equipo "
        },
        {
            id: 3,
            tittle: "Ancient Orb",
            category: "Crafting",
            price: 100,
            imgurl: "/assets/imagenes/Ancient Orb.jpg",
            detail: "Orbe que permite convertir un objeto unico en otro distinto, pero de la misma clase",
        },
        {
            id: 4,
            tittle: "Vaal Orb",
            category: "Crafting",
            price: 10,
            imgurl: "/assets/imagenes/Vaal Orb.jpg",
            detail: "Orbe que ofrece la posibilidad de corromper un objeto, existiendo la posibilidad que este adquiera nuevas propiedades unicas",
        },
        {
            id: 5,
            tittle: "Orb of Annulment",
            category: "Crafting",
            price: 10,
            imgurl: "/assets/imagenes/Orb of Annulment.jpg",
            detail: "Orbe que puede ser utilizado para remover un modificador, de manera aleatoria, de un objeto de equipamiento magico o raro", 
        },
        {
            id: 6,
            tittle: "Regal Orb",
            category: "Crafting",
            price: 7,
            imgurl: "/assets/imagenes/Regal Orb.jpg",
            detail:"Orbe cuya finalidad es mejorar una pieza de equipo de magico a raro. El objeto mantiene sus modificadores, pero adquiere un nuevo afijo aleatorio", 
        },
        {
            id: 7,
            tittle: "Mirror of Kalandra",
            category: "Crafting",
            price: 1500,
            imgurl: "/assets/imagenes/Mirror of Kalandra.jpg",
            detail: "Uno de los objetos mas valiosos del juego, permite duplicar piezas de equipo, siempre y cuando no esten corruptas ni sean unicas",
        },
        {
            id: 8,
            tittle: "Orb of Binding",
            category: "Crafting",
            price: 5,
            imgurl: "/assets/imagenes/Orb_of_Binding.jpg",
            detail: "Permite mejorar un objeto de categoria magica a rara, dandole nuevos modificadores aleatorios",
        },
        {
            id: 9,
            tittle: "Orb of Alteration",
            category: "Crafting",
            price: 3,
            imgurl: "/assets/imagenes/Orb of Alteration.jpg",
            detail: "Permite modificar aleatoriamente los modificadores de un objeto de categoria magica",
        },
        {
            id: 10,
            tittle: "Orb of Scouring",
            category: "Crafting",
            price: 4,
            imgurl: "/assets/imagenes/Orb Of Scouring.jpg",
            detail: "Reinicia las propiedades de un objeto, quitandole sus modificadores y retornandolo a comun",
        },
        {
            id: 11,
            tittle: "Awakened Sextant",
            category: "Mapas",
            price: 35, 
            imgurl: "/assets/imagenes/Awakened Sextant.jpg",
            detail: "Modifica o añade un atributo a una watchstone",
        },
        {
            id: 12,
            tittle: "Elevated Sextant",
            category: "Mapas",
            price: 50, 
            imgurl: "/assets/imagenes/Elevated Sextant.jpg",
            detail: "Modifica o añade un atributo de mayor rareza a una watchstone",
        },
        {
            id: 13,
            tittle: "Cartographer's Chisel",
            category: "Mapas",
            price: 1, 
            imgurl: "/assets/imagenes/Cartographer's Chisel.jpg",
            detail: "Aumenta la cualidad de un objeto de mapa",
        },
        {
            id: 14,
            tittle: "Orb of Horizons",
            category: "Mapas",
            price: 2, 
            imgurl: "/assets/imagenes/Orb_of_Horizons.jpg",
            detail: "Conviete un mapa en otro cualquiera de la misma categoria",
        },
        {
            id: 15,
            tittle: "Harbinger's Orb",
            category: "Mapas",
            price: 4, 
            imgurl: "/assets/imagenes/Harbinger's Orb.jpg",
            detail: "Conviete un mapa en otro cualquiera de la misma categoria, con la posibilidad de transformalo en un mapa unico",
        },
        {
            id: 16,
            tittle: "Exalted Orb",
            category: "Exaltados",
            price: 150, 
            imgurl: "/assets/imagenes/Exalted Orb.jpg",
            detail: "Al ser aplicado a un objeto raro, añade un nuevo afijo aleatorio",
        },
        {
            id: 17,
            tittle: "Crusader Exalted Orb",
            category: "Exaltados",
            price: 200, 
            imgurl: "/assets/imagenes/Crusaders_Exalted_Orb.jpg",
            detail: "Otorga influencia del Crusader a un objeto raro, añaniendo un nuevo afijo unico",
        },
        {
            id: 18,
            tittle: "Hunter Exalted Orb",
            category: "Exaltados",
            price: 200, 
            imgurl: "/assets/imagenes/Hunters_Exalted_Orb.jpg",
            detail: "Otorga influencia del Hunter a un objeto raro, añaniendo un nuevo afijo unico",
        },
        {
            id: 19,
            tittle: "Warlord Exalted Orb",
            category: "Exaltados",
            price: 200, 
            imgurl: "/assets/imagenes/Warlords_Exalted_Orb.jpg",
            detail: "Otorga influencia del Warlord a un objeto raro, añaniendo un nuevo afijo unico",
        },
        {
            id: 20,
            tittle: "Redeemer Exalted Orb",
            category: "Exaltados",
            price: 200, 
            imgurl: "/assets/imagenes/Redeemers_Exalted_Orb.jpg",
            detail: "Otorga influencia del Redeemer a un objeto raro, añaniendo un nuevo afijo unico",
        },
        {
            id: 21,
            tittle: "Offering to the Goddess",
            category: "Otros",
            price: 1, 
            imgurl: "/assets/imagenes/Offeringtothegoddess.jpg",
            detail: "Entrada requerida para ingresar al laberinto",
        },
        {
            id: 22,
            tittle: "Orb of Regret",
            category: "Otros",
            price: 2, 
            imgurl: "/assets/imagenes/Orb of Regret.jpg",
            detail: "Su utilizacion permite deshacer puntos asignados al arbol de habilidades, para poder utilazarlo nuevamente",
        },
        {
            id: 23,
            tittle: "Stacked Deck",
            category: "Otros",
            price: 10, 
            imgurl: "/assets/imagenes/Stacked Deck.jpg",
            detail: "Al utizarlo este objeto se obtiene, de manera aleatoria, una divination card",
        },
        {
            id: 24,
            tittle: "Glassblower's Bauble",
            category: "Otros",
            price: 0.5, 
            imgurl: "/assets/imagenes/Glassblower's Bauble.jpg",
            detail: "Permite mejorar la cualidad de un Flask, hasta un maximo del 20%",
        },
        {   
            id: 25,
            tittle: "Orb of Unmaking",
            category: "Otros",
            price: 15, 
            imgurl: "/assets/imagenes/Orb of Unmaking.jpg",
            detail: "Su utilizacion permite deshacer puntos asignados al arbol de habilidades del atlas, para poder utilazarlo nuevamente",
        },
        {
            id: 26,
            tittle: "Gemcutter's Prism",
            category: "Otros",
            price: 20, 
            imgurl: "/assets/imagenes/Gemcutter's Prism.jpg",
            detail: "Permite mejorar la cualidad de una Gema, hasta un maximo del 20%",
        },
    ]

    for ( let item of products){
        delete item.id;
        addDoc(productsCollectionRef, item).then(
            respuesta => console.log("documento creado", respuesta.id)
            )
    }
}