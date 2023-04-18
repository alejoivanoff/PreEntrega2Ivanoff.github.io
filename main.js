let carrito = [];

      function agregarProducto() {
        let nombre = prompt("Ingrese el nombre del producto:");
        let precio = parseFloat(prompt("Ingrese el precio del producto:"));
        let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
        let marca = prompt("Ingrese la marca del producto:");
        let subtotal = precio * cantidad;
        let producto = {
          nombre: nombre,
          precio: precio,
          cantidad: cantidad,
          marca: marca,
          subtotal: subtotal
        };
        carrito.push(producto);
        let mensaje = "Producto agregado al carrito:\n";
        for (let propiedad in producto) {
          mensaje += propiedad + ": " + producto[propiedad] + "\n";
        }
        alert(mensaje);
      }

      function mostrarCarrito() {
        let mensaje = "Carrito de compras:\n\n";
        for (let i = 0; i < carrito.length; i++) {
          mensaje += "Nombre: " + carrito[i].nombre + "\n";
          mensaje += "Precio: " + carrito[i].precio.toFixed(2) + "\n";
          mensaje += "Cantidad: " + carrito[i].cantidad + "\n";
          mensaje += "Marca: " + carrito[i].marca + "\n";
          mensaje += "Subtotal: " + carrito[i].subtotal.toFixed(2) + "\n\n";
        }
        alert(mensaje);
      }

      function borrarProducto() {
        let nombre = prompt("Ingrese el nombre del producto que desea quitar:");
        for (let i = 0; i < carrito.length; i++) {
          if (carrito[i].nombre == nombre) {
            carrito.splice(i, 1);
            console.log("Producto eliminado del carrito:", carrito[i]);
            break;
          }
        }
      }