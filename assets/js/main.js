// Gallery

// $('[data-fancybox="images"]').fancybox({
//     buttons: [
//       'slideShow',
//       'zoom',
//       'fullScreen',
//       'download',
//       'thumbs',
//       'close'
//     ],
//     thumbs: {
//       autoStart: true
//     }
//   });



  const backToTopButton = document.querySelector("#back-to-top-btn");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  