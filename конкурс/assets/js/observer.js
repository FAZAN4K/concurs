const observer = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс

        entry.target.classList.add('r');
      }
    });
  });
  observer.observe(document.querySelector('.company__wrapper'));