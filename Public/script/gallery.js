
// Gallery images data
const galleryImages = [
    { src: '/public/images/krishna.jpg', likes: 0 },
    { src: '/public/images/Anime.jpg', likes: 0 },
    { src: '/public/images/batmanjoker.jpg', likes: 0 },
    { src: '/public/images/batmanxsuperman.jpg', likes: 0 },
    { src: '/public/images/black widow.jpg', likes: 0 },
    { src: '/public/images/diljit.jpg', likes: 0 },
    { src: '/public/images/dr.strange.jpg', likes: 0 },
    { src: '/public/images/hritik.jpg', likes: 0 },
    { src: '/public/images/hritkrosan.jpg', likes: 0 },
    { src: '/public/images/ironman.jpg', likes: 0 },
    { src: '/public/images/jack.jpg', likes: 0 },
    { src: '/public/images/joker.png', likes: 0 },
    { src: '/public/images/joker1.jpg', likes: 0 },
    { src: '/public/images/jokerr.jpg', likes: 0 },
    { src: '/public/images/jokerrrr.jpg', likes: 0 },
    { src: '/public/images/moneyheist.jpg', likes: 0 },
    { src: '/public/images/Professor.jpg', likes: 0 },
    { src: '/public/images/professorx.jpg', likes: 0 },
    { src: '/public/images/ranbirkapoor.jpg', likes: 0 },
    { src: '/public/images/Ranveer Singh.jpg', likes: 0 },
    { src: '/public/images/rocky.jpg', likes: 0 },
    { src: '/public/images/rohit.jpg', likes: 0 },
    { src: '/public/images/shiv ji.jpg', likes: 0 },
    { src: '/public/images/spiderman.jpg', likes: 0 },
    { src: '/public/images/Thalapathy.png', likes: 0 },
    { src: '/public/images/thanos.png', likes: 0 },
    { src: '/public/images/thomas shelby.jpg', likes: 0 },
    { src: '/public/images/thomas.jpg', likes: 0 },
    { src: '/public/images/thor.jpg', likes: 0 },
    { src: '/public/images/venom.jpg', likes: 0 },
    { src: '/public/images/wonder woman.jpg', likes: 0 },
  ];
  
  // Select the gallery section
  const gallery = document.getElementById('gallery');
  
  // Function to create a card
  function createCard(image) {
    const card = document.createElement('div');
    card.className = 'card';
  
    card.innerHTML = `
      <img src="${image.src}" alt="Art">
      <div class="details">
        <button class="like-button">
          ❤️ Like <span>${image.likes}</span>
        </button>
      </div>
    `;
  
    // Add event listener for like button
    const likeButton = card.querySelector('.like-button');
    const likeCount = card.querySelector('span');
  
    likeButton.addEventListener('click', () => {
      image.likes += 1;
      likeCount.textContent = image.likes;
    });
  
    return card;
  }
  
  // Load gallery
  function loadGallery() {
    galleryImages.forEach((image) => {
      const card = createCard(image);
      gallery.appendChild(card);
    });
  }
  
  // Initialize gallery on page load
  loadGallery();