# deno

Servidor en Deno con Servest.

Para correr el proyecto ejecutar en consola: "deno run --allow-net server.ts"

El servidor escucha en el puerto 8899.

La ruta POST: "/json" simula un formulario. 

Recibe un objeto con la propiedad {"color":"green"} (probar con Postman) y retorna un array persistido en memoria

con los colores que se van ingresando.
