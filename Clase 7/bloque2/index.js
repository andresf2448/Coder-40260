let boton = document.getElementById("boton");

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue?",
    icon: "error",
    confirmButtonText: "Cool",
  });
});
 */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Genial!",
    text: "Haz agregado al carrito",
    icon: "success",
    confirmButtonText: "Ok",
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
    text: "Error inesperado",
    icon: "error",
    confirmButtonText: " =( ",
  });
}); */

/* boton.addEventListener("click", () => {
  //logica para guardar en el carrito
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Has guardado exitosamente",
    showConfirmButton: false,
    timer: 5000,
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}); */

boton.addEventListener("click", () => {
  Swal.fire({
    title: "Está seguro de eliminar el producto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, seguro",
    cancelButtonText: "No, no quiero",
  }).then((result) => {
    if (result.isConfirmed) {
      //logica para eleminar del carrito
      Swal.fire({
        title: "Borrado!",
        icon: "success",
        text: "El producto ha sido borrado",
      });
    }
  });
});
