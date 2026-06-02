// Profile Data
const profiles = [
    {
        id: 1,
        name: "Mishi",
        superlative: "Most Likely to Make Everyone Laugh",
        bio: "The creative genius behind this whole site! Always coming up with fun ideas and bringing the vibe.",
        quote: "Life is short, make it sweet!",
        photos: [
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop"
        ]
    },
    {
        id: 2,
        name: "Alex",
        superlative: "Best Smile",
        bio: "The sunshine of our group! Always positive and ready for an adventure.",
        quote: "Be yourself, everyone else is already taken.",
        photos: [
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
        ]
    },
    {
        id: 3,
        name: "Jordan",
        superlative: "Most Likely to Start a Trend",
        bio: "Fashion forward and always on point. The trendsetter of our crew!",
        quote: "Do what makes you happy and the rest will follow.",
        photos: [
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop"
        ]
    },
    {
        id: 4,
        name: "Casey",
        superlative: "Best Friend Vibes",
        bio: "The loyal friend who's always got your back. A true ride or die!",
        quote: "Friends who laugh together, stay together.",
        photos: [
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
        ]
    },
    {
        id: 5,
        name: "Taylor",
        superlative: "Most Likely to Brighten Your Day",
        bio: "The optimist of the group! Always seeing the bright side of everything.",
        quote: "Every day is a new beginning.",
        photos: [
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop"
        ]
    },
    {
        id: 6,
        name: "Morgan",
        superlative: "Most Likely to be Famous",
        bio: "Talented in everything they do. Watch out world, Morgan's coming!",
        quote: "Chase your dreams fearlessly.",
        photos: [
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop"
        ]
    },
    {
        id: 7,
        name: "Riley",
        superlative: "Best Sense of Humor",
        bio: "The comedian of our friend group. Always keeping us entertained!",
        quote: "Laughter is the best medicine.",
        photos: [
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
        ]
    },
    {
        id: 8,
        name: "Cameron",
        superlative: "Most Likely to Stay in Touch",
        bio: "The glue that holds our group together. A forever friend!",
        quote: "Good friends never leave each other.",
        photos: [
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop"
        ]
    }
];

let currentProfileIndex = 0;
let currentPhotoIndex = 0;

// Initialize the page
function init() {
    renderProfiles();
    createConfetti();
}

// Render profile cards
function renderProfiles() {
    const grid = document.getElementById('profilesGrid');
    grid.innerHTML = '';

    profiles.forEach((profile) => {
        const card = document.createElement('div');
        card.className = 'profile-card';
        card.innerHTML = `
            <img src="${profile.photos[0]}" alt="${profile.name}" class="profile-image">
            <div class="profile-details">
                <h3 class="profile-name">${profile.name}</h3>
                <p class="profile-superlative">${profile.superlative}</p>
                <p class="profile-quote">"${profile.quote}"</p>
            </div>
        `;
        card.addEventListener('click', () => openModal(profile.id - 1));
        grid.appendChild(card);
    });
}

// Open modal with profile details
function openModal(index) {
    currentProfileIndex = index;
    currentPhotoIndex = 0;
    const profile = profiles[index];
    const modal = document.getElementById('profileModal');

    document.getElementById('modalName').textContent = profile.name;
    document.getElementById('modalSuperlative').textContent = profile.superlative;
    document.getElementById('modalBio').textContent = profile.bio;
    document.getElementById('modalQuote').textContent = `"${profile.quote}"`;
    document.getElementById('modalPhoto').src = profile.photos[0];
    document.getElementById('photoCounter').textContent = '1';
    document.getElementById('photoTotal').textContent = profile.photos.length;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('profileModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Next photo
function nextPhoto() {
    const profile = profiles[currentProfileIndex];
    currentPhotoIndex = (currentPhotoIndex + 1) % profile.photos.length;
    updatePhoto();
}

// Previous photo
function previousPhoto() {
    const profile = profiles[currentProfileIndex];
    currentPhotoIndex = (currentPhotoIndex - 1 + profile.photos.length) % profile.photos.length;
    updatePhoto();
}

// Update photo display
function updatePhoto() {
    const profile = profiles[currentProfileIndex];
    document.getElementById('modalPhoto').src = profile.photos[currentPhotoIndex];
    document.getElementById('photoCounter').textContent = currentPhotoIndex + 1;
}

// Close modal on background click
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('profileModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('active')) {
            if (e.key === 'ArrowRight') nextPhoto();
            if (e.key === 'ArrowLeft') previousPhoto();
            if (e.key === 'Escape') closeModal();
        }
    });
});

// Create confetti animation
function createConfetti() {
    const container = document.getElementById('confetti');
    const colors = ['#ff69b4', '#ffa6d6', '#87ceeb', '#dda0dd', '#ffe6e6'];

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

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}