// Données des prix par région (fictives pour démonstration)
const regionData = {
    'Casablanca-Settat': {
        center: [33.5731, -7.5898],
        avgPrice: 185000,
        minPrice: 120000,
        maxPrice: 250000,
        popularBrands: ['Dacia', 'Renault', 'Peugeot'],
        description: 'Région économique du Maroc avec les prix les plus élevés',
        carCount: 12500
    },
    'Rabat-Salé-Kénitra': {
        center: [34.0209, -6.8416],
        avgPrice: 165000,
        minPrice: 100000,
        maxPrice: 220000,
        popularBrands: ['Renault', 'Dacia', 'Volkswagen'],
        description: 'Capitale administrative avec une forte demande',
        carCount: 8900
    },
    'Marrakech-Safi': {
        center: [31.6295, -7.9811],
        avgPrice: 145000,
        minPrice: 90000,
        maxPrice: 200000,
        popularBrands: ['Dacia', 'Renault', 'Hyundai'],
        description: 'Région touristique avec marché automobile dynamique',
        carCount: 7200
    },
    'Fès-Meknès': {
        center: [34.0181, -5.0078],
        avgPrice: 135000,
        minPrice: 85000,
        maxPrice: 180000,
        popularBrands: ['Dacia', 'Renault', 'Peugeot'],
        description: 'Ville historique avec marché automobile traditionnel',
        carCount: 6800
    },
    'Tanger-Tétouan-Al Hoceima': {
        center: [35.7595, -5.8340],
        avgPrice: 155000,
        minPrice: 95000,
        maxPrice: 210000,
        popularBrands: ['Renault', 'Dacia', 'Volkswagen'],
        description: 'Port stratégique avec influence européenne',
        carCount: 5400
    },
    'Oriental': {
        center: [34.6814, -1.9086],
        avgPrice: 125000,
        minPrice: 80000,
        maxPrice: 170000,
        popularBrands: ['Dacia', 'Renault', 'Hyundai'],
        description: 'Région frontalière avec marché en développement',
        carCount: 4200
    },
    'Béni Mellal-Khénifra': {
        center: [32.3373, -6.3498],
        avgPrice: 115000,
        minPrice: 75000,
        maxPrice: 160000,
        popularBrands: ['Dacia', 'Renault', 'Peugeot'],
        description: 'Région agricole avec marché automobile modéré',
        carCount: 3800
    },
    'Souss-Massa': {
        center: [30.4278, -9.5981],
        avgPrice: 130000,
        minPrice: 85000,
        maxPrice: 175000,
        popularBrands: ['Dacia', 'Renault', 'Hyundai'],
        description: 'Région côtière avec économie diversifiée',
        carCount: 4600
    },
    'Guelmim-Oued Noun': {
        center: [28.9869, -10.0574],
        avgPrice: 110000,
        minPrice: 70000,
        maxPrice: 150000,
        popularBrands: ['Dacia', 'Renault', 'Peugeot'],
        description: 'Région saharienne avec marché en croissance',
        carCount: 2100
    },
    'Laâyoune-Sakia El Hamra': {
        center: [27.1533, -13.2033],
        avgPrice: 105000,
        minPrice: 65000,
        maxPrice: 140000,
        popularBrands: ['Dacia', 'Renault', 'Hyundai'],
        description: 'Région saharienne avec développement récent',
        carCount: 1800
    },
    'Dakhla-Oued Ed-Dahab': {
        center: [23.6849, -15.9582],
        avgPrice: 95000,
        minPrice: 60000,
        maxPrice: 130000,
        popularBrands: ['Dacia', 'Renault', 'Peugeot'],
        description: 'Région la plus méridionale avec marché émergent',
        carCount: 1200
    },
    'Drâa-Tafilalet': {
        center: [31.1728, -4.0000],
        avgPrice: 85000,
        minPrice: 50000,
        maxPrice: 120000,
        popularBrands: ['Dacia', 'Renault', 'Hyundai'],
        description: 'Région désertique avec les prix les plus bas',
        carCount: 1500
    }
};

// Fonction pour déterminer la couleur selon le prix
function getColor(price) {
    if (price >= 200000) return '#ff4444';
    if (price >= 150000) return '#ff8800';
    if (price >= 100000) return '#ffcc00';
    if (price >= 80000) return '#88cc00';
    return '#44cc44';
}

// Fonction pour calculer la taille du marqueur selon le nombre de voitures
function getMarkerSize(carCount) {
    if (carCount >= 10000) return 20;
    if (carCount >= 5000) return 16;
    if (carCount >= 3000) return 14;
    if (carCount >= 1000) return 12;
    return 10;
}

// Fonction pour formater les nombres avec des espaces
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Fonction pour initialiser la carte
function initMap() {
    // Initialisation de la carte
    const map = L.map('map').setView([31.7917, -7.0926], 6);

    // Ajout de la couche de tuiles OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Ajout des marqueurs pour chaque région
    Object.keys(regionData).forEach(region => {
        const data = regionData[region];
        const color = getColor(data.avgPrice);
        const size = getMarkerSize(data.carCount);
        
        const marker = L.circleMarker(data.center, {
            radius: size,
            fillColor: color,
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(map);

        const popupContent = `
            <div class="region-info">
                <h4>${region}</h4>
                <p><strong>Prix moyen:</strong> ${formatNumber(data.avgPrice)} MAD</p>
                <div class="price-range">
                    <span>Min: ${formatNumber(data.minPrice)} MAD</span>
                    <span>Max: ${formatNumber(data.maxPrice)} MAD</span>
                </div>
                <p><strong>Véhicules disponibles:</strong> ${formatNumber(data.carCount)}</p>
                <p>${data.description}</p>
                <div class="popular-brands">
                    <strong>Marques populaires:</strong><br>
                    ${data.popularBrands.map(brand => `<span>${brand}</span>`).join('')}
                </div>
            </div>
        `;

        marker.bindPopup(popupContent);
        
        // Ajouter les effets de hover
        addMarkerEffects(marker, region, data);
        
        // Pas d'événement de clic pour le dashboard sur la carte - juste le popup simple
    });

    // Ajout d'un contrôle de légende personnalisé
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'info legend');
        div.style.backgroundColor = 'white';
        div.style.padding = '10px';
        div.style.borderRadius = '5px';
        div.style.boxShadow = '0 0 15px rgba(0,0,0,0.2)';
        div.innerHTML = '<h4>Prix Moyens</h4>';
        
        const grades = [0, 80000, 100000, 150000, 200000];
        const labels = ['< 80k MAD', '80k-100k MAD', '100k-150k MAD', '150k-200k MAD', '> 200k MAD'];
        
        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 1) + '; width: 18px; height: 18px; float: left; margin-right: 8px; opacity: 0.7; border-radius: 50%;"></i> ' +
                labels[i] + '<br>';
        }
        return div;
    };
    legend.addTo(map);

    // Calcul des statistiques globales
    const prices = Object.values(regionData).map(region => region.avgPrice);
    const totalCars = Object.values(regionData).reduce((sum, region) => sum + region.carCount, 0);
    const avgPrice = Math.round(prices.reduce((sum, price) => sum + price, 0) / prices.length);
    
    // Mise à jour des statistiques affichées
    document.getElementById('avg-national-price').textContent = formatNumber(avgPrice) + ' MAD';
    document.getElementById('total-cars').textContent = formatNumber(totalCars);
    
    // Trouver la région la plus chère et la moins chère
    const sortedRegions = Object.entries(regionData).sort((a, b) => b[1].avgPrice - a[1].avgPrice);
    document.getElementById('most-expensive').textContent = sortedRegions[0][0];
    document.getElementById('least-expensive').textContent = sortedRegions[sortedRegions.length - 1][0];

    return map;
}

// Fonction pour filtrer les régions par prix
function filterByPrice(minPrice, maxPrice) {
    const filteredRegions = Object.entries(regionData).filter(([region, data]) => {
        return data.avgPrice >= minPrice && data.avgPrice <= maxPrice;
    });
    
    // Ici vous pourriez ajouter une logique pour mettre en évidence les régions filtrées
    console.log('Régions filtrées:', filteredRegions.map(([region]) => region));
}

// Fonction pour rechercher une région
function searchRegion(query) {
    const matchingRegions = Object.keys(regionData).filter(region => 
        region.toLowerCase().includes(query.toLowerCase())
    );
    
    if (matchingRegions.length > 0) {
        const regionData = regionData[matchingRegions[0]];
        map.setView(regionData.center, 8);
    }
}

// Initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    // Ajout d'un délai pour montrer l'animation de chargement
    setTimeout(() => {
        const map = initMap();
        currentMap = map; // Pour les analyses
        
        // Marquer la carte comme chargée
        const mapElement = document.getElementById('map');
        mapElement.classList.add('loaded');
        
        // Animation des statistiques
        animateStats();
        
        // Initialiser les analyses
        if (window.AnalyticsModule) {
            window.AnalyticsModule.initAnalytics();
        }
        
        // Ajout d'événements pour les filtres (si vous en ajoutez plus tard)
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const priceRange = this.dataset.priceRange;
                // Logique de filtrage à implémenter
            });
        });
    }, 1000);
});

// Fonction pour animer les statistiques
function animateStats() {
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Fonction pour ajouter des effets de hover sur les marqueurs
function addMarkerEffects(marker, region, data) {
    marker.on('mouseover', function() {
        this.setStyle({
            radius: getMarkerSize(data.carCount) + 3,
            fillOpacity: 1,
            weight: 3
        });
    });
    
    marker.on('mouseout', function() {
        this.setStyle({
            radius: getMarkerSize(data.carCount),
            fillOpacity: 0.8,
            weight: 2
        });
    });
}
