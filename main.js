/*Generar una función que reciba como parámetro el array de cervezas y un valor de
alcohol. La función debe devolver un nuevo array con las cervezas que no excedan el
nivel etílico. Cada elemento del nuevo array debe ser un objeto que tenga la 
propiedades nombre, alcohol (abv) y "amargor" (ibu)*/

const nivelEtilico= 10;

let beers=[
    {   
        abv: 5,
        ibu:12
    },
    {   
        abv: 8,
        ibu:10
    },
    {   
        abv: 10,
        ibu:7
    }, 
    {   
        abv: 7,
        ibu:13
    },
    {   
        abv: 6,
        ibu:5
    },
    {
        abv: 8,
        ibu:15,
    },
    {
        abv: 6,
        ibu:9,
    },
    {
        abv: 9,
        ibu:12,
    },
    {
        abv: 7,
        ibu:11
    },
    {
        abv: 6,
        ibu:16,
    },
    {
        abv: 7,
        ibu:6
    },
    {
        abv: 6,
        ibu:5
    }
]

const cervezasFiltradas= beers.filter((beers) => beers.ibu <= nivelEtilico)
console.log(cervezasFiltradas)

/*Generar una función que reciba como parámetro un array de cervezas y devuelva un
nuevo array con las 10 cervezas más alcohólicas*/


function obtenerCervezasMasAlcoholicas(cervezas) {
    // Ordenar el array de cervezas en orden descendente según su contenido de alcohol
    cervezas.sort(function(a, b) {
      return b.abv - a.abv;
    });
    // Obtener las primeras 10 cervezas del array ordenado
    var cervezasMasAlcoholicas = cervezas.slice(0, 10);
  
    return cervezasMasAlcoholicas;
  }
  obtenerCervezasMasAlcoholicas(beers)
  cervezasMasAlcoholicas = obtenerCervezasMasAlcoholicas(beers);
  console.log(cervezasMasAlcoholicas);

  /*Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo
array con las 10 cervezas menos amargas.*/

function obtenerCervezasMenosAmargas(cervezas) {
    // Ordenar el array de cervezas en orden ascendente según su amargor
    cervezas.sort(function(a, b) {
      return a.ibu - b.ibu;
    });
  
    // Obtener las primeras 10 cervezas del array ordenado
    var cervezasMenosAmargas = cervezas.slice(0, 10);
  
    return cervezasMenosAmargas;
  }
  
var cervezasMenosAmargas = obtenerCervezasMenosAmargas(beers);
console.log(cervezasMenosAmargas);

/*Generar una función que reciba como parámetro un array de cervezas, un nombre de
propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas
ordenadas por la propiedad ingresada como segundo argumento, de manera 
ascendente si el tercero es true o descendente si es false.*/

function ordenarCervezas(cervezas, propiedad, ascendente) {
    // Ordenar el array de cervezas según la propiedad ingresada y la dirección especificada
    cervezas.sort(function(a, b) {
      if (ascendente) {
        return a[propiedad] - b[propiedad];
      } else {
        return b[propiedad] - a[propiedad];
      }
    });
  
    // Obtener las primeras 10 cervezas del array ordenado
    var cervezasOrdenadas = cervezas.slice(0, 10);
  
    return cervezasOrdenadas;
}
  
  var cervezasOrdenadas = ordenarCervezas(beers,beers.abv, true);
  console.log(cervezasOrdenadas);

  /*Generar una función que reciba como parámetro un array de cervezas y un id. La
función debe renderizar (renderizar, dibujar, pintar, llenar, etc) en un archivo html una
tabla que contenga las columnas "Name", "ABV", "IBU", y una ﬁla por cada elemento del
array. Cada ﬁla debe tener los datos que se piden de cada una de las cervezas.*/

