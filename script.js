// Album Data
const albums = [
    {
        name: "First Hangout",
        photos: [
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1523438097926-512bed9b0b7f?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1523438097926-512bed9b0b7f?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop"
        ]
    },
    {
        name: "Birthdays",
        photos: [
            "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1530268729831-4ca59d8f01d3?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1530268729831-4ca59d8f01d3?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1530268729831-4ca59d8f01d3?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=400&fit=crop"
        ]
    },
    {
        name: "School",
        photos: [
            "https://images.unsplash.com/photo-1427504494785-cdedca239cc1?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1523438097926-512bed9b0b7f?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1427504494785-cdedca239cc1?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1523438097926-512bed9b0b7f?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1427504494785-cdedca239cc1?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1523438097926-512bed9b0b7f?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1427504494785-cdedca239cc1?w=500&h=400&fit=crop"
        ]
    },
    {
        name: "Year 12",
        photos: [
            "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1517995092972-c40a25a75f0e?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1523438097926-512bed9b0b7f?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1517995092972-c40a25a75f0e?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1523438097926-512bed9b0b7f?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1517995092972-c40a25a75f0e?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1523438097926-512bed9b0b7f?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=400&fit=crop"
        ]
    },
    {
        name: "Graduation",
        photos: [
            "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1502181851512-7cf1c31f3204?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1502181851512-7cf1c31f3204?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1502181851512-7cf1c31f3204?w=500&h=400&fit=crop",
            "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=500&h=400&fit=crop"
        ]
    }
];

let currentAlbumIndex = 0;
let currentPhotoIndex = 0;

// Navigate to memories page
function goToMemories() {
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('memoriesPage').style.display = 'block';
    renderAlbums();
    createConfetti();
}

// Go back to landing page
function backToLanding() {
    document.getElementById('memoriesPage').style.display = 'none';
    document.getElementById('landingPage').style.display = 'flex';
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = '';
    createLandingConfetti();
}

// Render album cards with camera shapes
function renderAlbums() {
    const grid = document.getElementById('albumsGrid');
    grid.innerHTML = '';

    albums.forEach((album, index) => {
        const cameraAlbum = document.createElement('div');
        cameraAlbum.className = 'camera-album';
        cameraAlbum.innerHTML = `
            <div class="camera-body">
                <div class="camera-lens"></div>
                <div class="camera-flash"></div>
            </div>
            <div class="album-name">${album.name}</div>
        `;
        cameraAlbum.addEventListener('click', () => openPhotoModal(index));
        grid.appendChild(cameraAlbum);
    });
}

// Open photo gallery modal
function openPhotoModal(albumIndex) {
    currentAlbumIndex = albumIndex;
    currentPhotoIndex = 0;
    const album = albums[albumIndex];
    const modal = document.getElementById('photoModal');

    document.getElementById('albumTitle').textContent = album.name;
    document.getElementById('galleryPhoto').src = album.photos[0];
    document.getElementById('photoCounter').textContent = '1';
    document.getElementById('photoTotal').textContent = album.photos.length;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close photo modal
function closePhotoModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Next photo
function nextMemoryPhoto() {
    const album = albums[currentAlbumIndex];
    currentPhotoIndex = (currentPhotoIndex + 1) % album.photos.length;
    updateMemoryPhoto();
}

// Previous photo
function previousMemoryPhoto() {
    const album = albums[currentAlbumIndex];
    currentPhotoIndex = (currentPhotoIndex - 1 + album.photos.length) % album.photos.length;
    updateMemoryPhoto();
}

// Update photo display
function updateMemoryPhoto() {
    const album = albums[currentAlbumIndex];
    document.getElementById('galleryPhoto').src = album.photos[currentPhotoIndex];
    document.getElementById('photoCounter').textContent = currentPhotoIndex + 1;
}

// Close modal on background click
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('photoModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closePhotoModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('active')) {
            if (e.key === 'ArrowRight') nextMemoryPhoto();
            if (e.key === 'ArrowLeft') previousMemoryPhoto();
            if (e.key === 'Escape') closePhotoModal();
        }
    });

    // Create confetti on landing page
    createLandingConfetti();
});

// Create confetti animation for landing page
function createLandingConfetti() {
    const container = document.getElementById('landingConfetti');
    if (!container) return;
    
    container.innerHTML = ''; // Clear old confetti
    
    const colors = ['#ff69b4', '#ffa6d6', '#87ceeb', '#dda0dd', '#ffe6e6', '#ffa500'];

    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'landing-confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.7 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        container.appendChild(confetti);
    }
}

// Create confetti animation for memories page
function createConfetti() {
    const container = document.getElementById('confetti');
    const colors = ['#ff69b4', '#ffa6d6', '#87ceeb', '#dda0dd', '#ffe6e6', '#ffa500'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2.5) + 's';
        container.appendChild(confetti);
    }
}