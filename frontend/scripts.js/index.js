const images = [
    "../frontend/img/noticia1.jpg",
    "../frontend/img/noticia2.jpg",
    "../frontend/img/noticia3.jpg",
  ];
//   const images = [
//     "../img/noticia1.jpg",
//     "../img/noticia2.jpg",
//     "../img/noticia3.jpg",
//   ];

    var indexactual = 0;
    const imageContainer = document.querySelector('.image-container');
    const navigationLeft = document.querySelector('.navigation-left');
    const navigationRight = document.querySelector('.navigation-right');
    
    navigationLeft.addEventListener('click', mostrarAnterior);
    navigationRight.addEventListener('click', mostrarSiguiente);
    
    function mostrarAnterior() {
      indexactual = indexactual - 1
      
      // imageContainer.style.transform = `translateX(${indexactual}%)`;
      imageContainer.style.transition = "transform 1s";

      actualizarSlide();
    }
    
    function mostrarSiguiente() {
      indexactual = indexactual + 1
      // imageContainer.style.transform = `translateX(-${indexactual}%)`;
      imageContainer.style.transition = "transform 1s";
      actualizarSlide();
    }
    
    function actualizarSlide() { 
      indexactual = indexactual >= images.length ? 0 : indexactual;
      indexactual = indexactual < 0 ? images.length - 1 : indexactual;

      let nextIndex = indexactual + 1;
      let prevIndex = indexactual - 1;

      nextIndex = nextIndex >= images.length ? 0 : nextIndex;
      prevIndex = prevIndex < 0 ? images.length - 1 : prevIndex;

      imageContainer.innerHTML = '';
    
      const prevImg = document.createElement('img');
      prevImg.src = images[prevIndex];
      imageContainer.appendChild(prevImg);

      const currentImg = document.createElement('img');
      currentImg.classList.add('current');
      currentImg.src = images[indexactual];
      imageContainer.appendChild(currentImg);
      
      const nextImg = document.createElement('img');
      nextImg.src = images[nextIndex];
      imageContainer.appendChild(nextImg);

      prevImg.addEventListener('click', mostrarAnterior);
      nextImg.addEventListener('click', mostrarSiguiente);

}
    
actualizarSlide();
  
    var intervalId = setInterval(mostrarSiguiente, 4000);
    // Detener el carrusel al pasar el cursor sobre el mismo
    imageContainer.addEventListener('mouseenter', function() {
      clearInterval(intervalId);
    });
    
    // Reanudar el carrusel al quitar el cursor del mismo
    imageContainer.addEventListener('mouseleave', function() {
      intervalId = setInterval(mostrarSiguiente, 4000);
    });