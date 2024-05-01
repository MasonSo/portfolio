document.addEventListener('DOMContentLoaded', function() {
  const menuButtons = document.querySelectorAll('.wfont-text-button');
  const photos = document.querySelectorAll('.wphoto-gallery img');

  let currentCategory = '3D';
  showPhotos(currentCategory);

  menuButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.textContent.toLowerCase();
      if (category !== currentCategory) {
        currentCategory = category;
        showPhotos(category);
        // Add a class to the clicked button to mimic hover effect
        menuButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  function showPhotos(category) {
      photos.forEach(photo => {
        const photoCategory = photo.getAttribute('alt').split(' ')[0];
        if (photoCategory.toLowerCase() === category.toLowerCase()) {
          photo.parentElement.style.display = 'block';
        } else {
          photo.parentElement.style.display = 'none';
        }
      });
    }
});
  

