
const productos= [
  {
    "nombre": "Impermeable Hoody",
    "id": 1,
    "descripcion": "Buzo/Campera impermeable con bolsillo canguro",
    "precio": 30000,
    "talla": ["S", "M", "L", "XL"],
    "color": ["Negro ", " Gris ", " Tiza "],
    "categoria": "Abrigoa",
    "imagen": ["","",""]
  },
  {
    "nombre": "Buzo gaspeado",
    "id": 2,
    "descripcion": "Buzo de algodón para media estación.",
    "precio": 7500,
    "talla": ["XS", "S", "M", "L"],
    "color": ["Gris ", " Petroleo ", " Morado " ],
    "categoria": "Abrigos",
    "imagen": ["imagen2.jpg"]
  },
  {
    "nombre": "Buzo Hoody",
    "id": 3,
    "descripcion": "Buzo cómodo con capucha y bolsillo canguro para uso diario o entrenamientos al aire libre.",
    "precio": 9000,
    "talla": ["S", "M", "L"],
    "color": ["Gris", "Negro", "Crudo"],
    "categoria": "Abrigos",
    "imagen": ["imagen3.jpg"]
  },
  {
    "nombre": "Campera impermeable flores",
    "id": 4,
    "descripcion": "Campera liviana, impermeable y transpirable ideal para caminata y running.",
    "precio": 15000,
    "talla": ["S", "M", "L"],
    "color": ["Blanco"],
    "categoria": "Abrigos",
    "imagen": ["imagen4.jpg"]
  },
  {
    "nombre": "Campera impermeable pinceladas ",
    "id": 5,
    "descripcion": "Campera liviana, impermeable y transpirable ideal para caminata y running.",
    "precio": 15000,
    "talla": ["S","M", "L"],
    "color": ["blanco"],
    "categoria": "Abrigos",
    "imagen": ["imagen5.jpg"]
  },
  {
    "nombre": "Campera con capucha",
    "id": 6,
    "descripcion": "Campera de algodón de media estación, muy confortable, ideal para estar al aire libre",
    "precio": 9000,
    "talla": ["S", "M", "L"],
    "color": ["Negro", "Lila", "Rosa", "Lavanda"],
    "categoria": "Abrigos",
    "imagen": ["imagen6.jpg"]
  },
  {
    "nombre": "Biker con bolsillo",
    "id": 7,
    "descripcion": "Biker de lycra super resistente con bolsillo para mayor comodidad.",
    "precio": 10000,
    "talla": ["S", "M", "L"],
    "color": ["Negro", "Gris"],
    "categoria": "Calzas",
    "imagen": ["imagen7.jpg"]
  },
  {
    "nombre": "Biker de alto impacto",
    "id": 8,
    "descripcion": "Biker diseñada para brindar soporte durante entrenamientos de alto impacto.",
    "precio": 10500,
    "talla": ["S", "M", "L"],
    "color": ["Negro", "Verde"],
    "categoria": "Calzas",
    "imagen": ["imagen7.jpg"]
  },
  {
    "nombre": "Biker pinceladas",
    "id": 9,
    "descripcion": "Biker de lycra super resistente con un disño pensado para vos.",
    "precio": 12000,
    "talla": ["S", "M", "L"],
    "color": ["Blanco"],
    "categoria": "Calzas",
    "imagen": ["imagen7.jpg"]
  },
  {
    "nombre": "Biker flores",
    "id": 10,
    "descripcion": "Biker de lycra super resistente con un disño pensado para vos.",
    "precio": 12000,
    "talla": ["S", "M", "L"],
    "color": ["Blanco"],
    "categoria": "Calzas",
    "imagen": ["imagen7.jpg"]
  },
  {
    "nombre": "Calza con bolsillo",
    "id": 11,
    "descripcion": "Calza de lycra super resistente con bolsillo para mayor comodidad.",
    "precio": 13000,
    "talla": ["S", "M", "L"],
    "color": ["Negro", "Gris", "Azul"],
    "categoria": "Calzas",
    "imagen": ["imagen7.jpg"]
  },
  {
    "nombre": "Calza de alto impacto",
    "id": 12,
    "descripcion": "Calza diseñada para brindar soporte durante entrenamientos de alto impacto.",
    "precio": 13500,
    "talla": ["S", "M", "L"],
    "color": ["Negro", "Lila", "Azul", "Rosa", "Verde"],
    "categoria": "Calzas",
    "imagen": ["imagen7.jpg"]
  },
  {
    "nombre": "Calza capri de alto impacto",
    "id": 13,
    "descripcion": "Calza diseñada para brindar soporte durante entrenamientos de alto impacto.",
    "precio": 13500,
    "talla": ["S", "M", "L"],
    "color": ["Negro", "Tomate", "Lavanda"],
    "categoria": "Calzas",
    "imagen": ["imagen7.jpg"]
  },
  {
    "nombre": "Calza de alto impacto duo",
    "id": 14,
    "descripcion": "Calza diseñada para brindar soporte durante entrenamientos de alto impacto.",
    "precio": 14500,
    "talla": ["S", "M", "L"],
    "color": ["Azul", "Violeta"],
    "categoria": "Calzas",
    "imagen": ["imagen7.jpg"]
  },
  {
    "nombre": "Calza tiro bajo ancha",
    "id": 15,
    "descripcion": "Calza tiro bajo y ancha.",
    "precio": 11000,
    "talla": ["S", "M", "L"],
    "color": ["Negro", "Verde"],
    "categoria": "Calzas",
    "imagen": ["imagen7.jpg"]
  },
  {
    "nombre": "Calza tiro bajo",
    "id": 16,
    "descripcion": "Calza tiro bajo de lycra.",
    "precio": 10500,
    "talla": ["S", "M", "L"],
    "color": ["Negro"],
    "categoria": "Calzas",
    "imagen": ["imagen7.jpg"]
  },
  {
    "nombre": "Calza corta de alto impacto",
    "id": 17,
    "descripcion": "Calza corta diseñada para brindar soporte durante entrenamientos de alto impacto.",
    "precio": 8500,
    "talla": ["S", "M", "L"],
    "color": ["Negro"],
    "categoria": "Calzas",
    "imagen": ["imagen7.jpg"]
  },
  {
    "nombre": "Calza pinceladas",
    "id": 18,
    "descripcion": "Calza de lycra super resistente con un disño pensado para vos.",
    "precio": 15800,
    "talla": ["S", "M", "L"],
    "color": ["Blanco"],
    "categoria": "Calzas",
    "imagen": ["imagen7.jpg"]
  },
  {
    "nombre": "Calza flores",
    "id": 19,
    "descripcion": "Calza de lycra super resistente con un disño pensado para vos.",
    "precio": 15800,
    "talla": ["S", "M", "L"],
    "color": ["Blanco"],
    "categoria": "Calzas",
    "imagen": ["imagen7.jpg"]
  },
  {
    "nombre": "Top deportivo de medio impacto",
    "id": 20,
    "descripcion": "Sujetador deportivo cómodo y de medio impacto para entrenamientos variados.",
    "precio": 6000,
    "talla": ["S", "M", "L", "XL"],
    "color": ["Negro", "Verde", "Lavanda"],
    "categoria": "Tops",
    "imagen": "imagen9.jpg"
  },
  {
    "nombre": "Top deportivo de alto impacto",
    "id": 21,
    "descripcion": "Sujetador deportivo cómodo diseñado para brindar soporte durante entrenamientos de alto impacto.",
    "precio": 7500,
    "talla": ["S", "M", "L", "XL"],
    "color": ["Negro", "Gris", "Azul"],
    "categoria": "Tops",
    "imagen": "imagen9.jpg"
  },
  {
    "nombre": "Top deportivo pinceladas",
    "id": 22,
    "descripcion": "Top de lycra super resistente con un disño pensado para vos.",
    "precio": 8000,
    "talla": ["S", "M", "L"],
    "color": ["Blanco"],
    "categoria": "Tops",
    "imagen": ["imagen7.jpg"]
  },
  {
    "nombre": "Top deportivo flores",
    "id": 23,
    "descripcion": "Topde lycra super resistente con un disño pensado para vos.",
    "precio": 8000,
    "talla": ["S", "M", "L"],
    "color": ["Blanco"],
    "categoria": "Tops",
    "imagen": ["imagen7.jpg"]
  },
  {
    "nombre": "Jogging recto",
    "id": 24,
    "descripcion": "Joggin ideal para media estación, confortable y cómodo.",
    "precio": 9000,
    "talla": ["S", "M", "L"],
    "color": ["Negro", "Azul", "Lila", "Lavanda"],
    "categoria": "Pantalones",
    "imagen": ["imagen10.jpg"]
  },
  {
    "nombre": "Jogging babucha",
    "id": 25,
    "descripcion": "Joggin ideal para media estación, confortable y cómodo.",
    "precio": 8500,
    "talla": ["S", "M", "L"],
    "color": ["Negro", "Lavanda", "Naranja"],
    "categoria": "Pantalones",
    "imagen": ["imagen10.jpg"]
  },
  {
    "nombre": "Jogging raya",
    "id": 26,
    "descripcion": "Joggin ideal para media estación, confortable y cómodo.",
    "precio": 9000,
    "talla": ["S", "M", "L"],
    "color": ["Negro"],
    "categoria": "Pantalones",
    "imagen": ["imagen10.jpg"]
  },
  {
    "nombre": "Malla estampada",
    "id": 27,
    "descripcion": "Malla con tratamiento anticloro, resistente y duradera.",
    "precio": 14000,
    "talla": ["S", "M", "L"],
    "color": ["Azul","Celeste","Rosa"],
    "categoria": "Mallas",
    "imagen": ["imagen10.jpg"]
  },
  {
    "nombre": "Malla lisa",
    "id": 28,
    "descripcion": "Malla con tratamiento anticloro, resistente y duradera.",
    "precio": 14000,
    "talla": ["S", "M", "L"],
    "color": ["Azul","Celeste","Rosa"],
    "categoria": "Mallas",
    "imagen": ["imagen10.jpg"]
  },
  {
    "nombre": "Malla negra",
    "id": 29,
    "descripcion": "Malla con tratamiento anticloro, resistente y duradera.",
    "precio": 14000,
    "talla": ["S", "M", "L"],
    "color": ["Negro"],
    "categoria": "Mallas",
    "imagen": ["imagen10.jpg"]
  },
  {
    "nombre": "Musculosa atigrada",
    "id": 30,
    "descripcion": "Remera de algodón, conformtable y transpirable.",
    "precio": 5000,
    "talla": ["S", "M", "L"],
    "color": ["Celeste", "Rosa"],
    "categoria": "Remeras",
    "imagen": ["imagen10.jpg"]
  },
  {
    "nombre": "Musculosa con bolsillo",
    "id": 31,
    "descripcion": "Remera de algodón, conformtable y transpirable, posee un bolsillo con espacio para guardado de celular",
    "precio": 4500,
    "talla": ["S", "M", "L"],
    "color": ["Verde", "Rosa"],
    "categoria": "Remeras",
    "imagen": ["imagen10.jpg"]
  },
  {
    "nombre": "Musculosa lisa",
    "id": 32,
    "descripcion": "Remera de lycra, conformtable y transpirable, ideal para hacer deporte.",
    "precio": 6000,
    "talla": ["S", "M", "L"],
    "color": ["Azul", "Rosa", "Limon", "Negro"],
    "categoria": "Remeras",
    "imagen": ["imagen10.jpg"]
  },
  {
    "nombre": "Remera atigrada",
    "id": 33,
    "descripcion": "Remera de algodón, conformtable y transpirable.",
    "precio": 5200,
    "talla": ["S", "M", "L"],
    "color": ["Celeste", "Rosa"],
    "categoria": "Remeras",
    "imagen": ["imagen10.jpg"]
  },
  {
    "nombre": "Remerón design",
    "id": 34,
    "descripcion": "Remera de algodón, conformtable y transpirable.",
    "precio": 5200,
    "talla": ["S", "M", "L"],
    "color": ["Lavanda", "Rosa", "Negro"],
    "categoria": "Remeras",
    "imagen": ["imagen10.jpg"]
  },
  {
    "nombre": "Remera gaspeada",
    "id": 35,
    "descripcion": "Remera de algodón, conformtable y transpirable.",
    "precio": 4300,
    "talla": ["S", "M", "L"],
    "color": ["Gris", "Negro","Petroleo","Morado"],
    "categoria": "Remeras",
    "imagen": ["imagen10.jpg"]
  },
  {
    "nombre": "Remera lisa",
    "id": 36,
    "descripcion": "Remera de lycra, conformtable y transpirable. Ideal para hacer deporte ",
    "precio": 5350,
    "talla": ["S", "M", "L"],
    "color": ["Azul", "Rosa", "Limon", "Negro"],
    "categoria": "Remeras",
    "imagen": ["imagen10.jpg"]
  },
  {
    "nombre": "Remera manguita",
    "id": 37,
    "descripcion": "Remera de lycra, conformtable y transpirable. Ideal para hacer deporte",
    "precio": 5400,
    "talla": ["S", "M", "L"],
    "color": ["Azul", "Rosa", "Lavanda", "Negro"],
    "categoria": "Remeras",
    "imagen": ["imagen10.jpg"]
  },
  {
    "nombre": "Short deportivo",
    "id": 38,
    "descripcion": "Short de lycra, conformtable y transpirable. Ideal para hacer deporte",
    "precio": 6500,
    "talla": ["S", "M", "L"],
    "color": ["Azul", "Gris", "Negro"],
    "categoria": "Shorts",
    "imagen": ["imagen10.jpg"]
  },
  {
    "nombre": "Short algodón",
    "id": 39,
    "descripcion": "Short de algodón, ideal para estar al aire libre",
    "precio": 6000,
    "talla": ["S", "M", "L"],
    "color": ["Lavanda", "Naranja"],
    "categoria": "Shorts",
    "imagen": ["imagen10.jpg"]
  }
]

export const getProductos= () =>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(productos)
    }, 500)
  })
}
export const getProductById = (productId) =>{
  return new Promise((resolve)=>{
    setTimeout(()=> {
      resolve(productos.find(prod => prod.id.toString() === productId))
    },500)
  })
}
export const getProductByCategory = (productCategoria) =>{
  return new Promise((resolve)=>{
    setTimeout(()=> {
      resolve(productos.filter(prod => prod.categoria.toLowerCase() === productCategoria))
    },500)
  })
}