https://drive.google.com/drive/folders/140AqJHx0r_sbavMiHFCmN-1Hh3RdYYXH





    const menuRestaurante = [
        {
            id:1,
            nombre: "Pizza Margarita",
            precio: 12.99,
            tipo: "Italiana",
            stock: 10
        },
        {
            id:2,
            nombre: "Tacos al Pastor",
            precio: 8.99,
            tipo: "Mexicana",
            stock: 15
        },
        {
            id:3,
            nombre: "Sushi de Salmón",
            precio: 15.99,
            tipo: "Japonesa",
            stock: 5
        },
        {
            id:4,
            nombre: "Arepas",
            precio: 6.99,
            tipo: "Venezolana",
            stock: 20
        },
        {
            id:5,
            nombre: "Ceviche",
            precio: 10.99,
            tipo: "Peruana",
            stock: 8
        },
        {
            id:6,
            nombre: "Hamburguesa Clásica",
            precio: 11.99,
            tipo: "Americana",
            stock: 12
        },
        {
            id:7,
            nombre: "Paella",
            precio: 13.99,
            tipo: "Española",
            stock: 7
        }
    ];
    
    let cliente = Number(prompt("\n1 - desea pedir comida por delivery \n0 - si desea salir "))
    
    let carrito = []

    let nombreComida = 0
    
        if (cliente === 1){

             nombreComida = Number(prompt( "seleccione producto por id:\n" + menu(menuRestaurante)))
            

           let cosa = menuRestaurante.find((item)=> item.id === nombreComida )

           console.log(cosa)
        } else{
            console.log(nombreComida)        
        }
        
      //   cliente = Number(prompt("\n1 - desea pedir comida por delivery \n0 - si desea salir "))

    console.log(nombreComida)
    
    
    function menu (menudelivery){
        return menudelivery.map (menuRestaurante => menuRestaurante.id + " - " + menuRestaurante.nombre + " - " + menuRestaurante.tipo + " - " + menuRestaurante.precio).join("\n");
    }
     