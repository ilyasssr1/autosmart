// Données étendues pour les analyses
const extendedRegionData = {
    'Casablanca-Settat': {
        center: [33.5731, -7.5898],
        avgPrice: 185000,
        minPrice: 120000,
        maxPrice: 250000,
        popularBrands: ['Dacia', 'Renault', 'Peugeot'],
        description: 'Région économique du Maroc avec les prix les plus élevés',
        carCount: 12500,
        vehicleTypes: {
            'Sedan': 35,
            'SUV': 25,
            'Compact': 20,
            'Luxury': 15,
            'Electric': 5
        },
        priceHistory: [175000, 178000, 180000, 182000, 183000, 185000],
        trend: 'up'
    },
    'Rabat-Salé-Kénitra': {
        center: [34.0209, -6.8416],
        avgPrice: 165000,
        minPrice: 100000,
        maxPrice: 220000,
        popularBrands: ['Renault', 'Dacia', 'Volkswagen'],
        description: 'Capitale administrative avec une forte demande',
        carCount: 8900,
        vehicleTypes: {
            'Sedan': 40,
            'SUV': 20,
            'Compact': 25,
            'Luxury': 10,
            'Electric': 5
        },
        priceHistory: [160000, 162000, 163000, 164000, 164500, 165000],
        trend: 'up'
    },
    'Marrakech-Safi': {
        center: [31.6295, -7.9811],
        avgPrice: 145000,
        minPrice: 90000,
        maxPrice: 200000,
        popularBrands: ['Dacia', 'Renault', 'Hyundai'],
        description: 'Région touristique avec marché automobile dynamique',
        carCount: 7200,
        vehicleTypes: {
            'Sedan': 30,
            'SUV': 30,
            'Compact': 25,
            'Luxury': 10,
            'Electric': 5
        },
        priceHistory: [140000, 142000, 143000, 144000, 144500, 145000],
        trend: 'up'
    },
    'Fès-Meknès': {
        center: [34.0181, -5.0078],
        avgPrice: 135000,
        minPrice: 85000,
        maxPrice: 180000,
        popularBrands: ['Dacia', 'Renault', 'Peugeot'],
        description: 'Ville historique avec marché automobile traditionnel',
        carCount: 6800,
        vehicleTypes: {
            'Sedan': 35,
            'SUV': 20,
            'Compact': 30,
            'Luxury': 10,
            'Electric': 5
        },
        priceHistory: [130000, 132000, 133000, 134000, 134500, 135000],
        trend: 'up'
    },
    'Tanger-Tétouan-Al Hoceima': {
        center: [35.7595, -5.8340],
        avgPrice: 155000,
        minPrice: 95000,
        maxPrice: 210000,
        popularBrands: ['Renault', 'Dacia', 'Volkswagen'],
        description: 'Port stratégique avec influence européenne',
        carCount: 5400,
        vehicleTypes: {
            'Sedan': 30,
            'SUV': 25,
            'Compact': 25,
            'Luxury': 15,
            'Electric': 5
        },
        priceHistory: [150000, 152000, 153000, 154000, 154500, 155000],
        trend: 'up'
    },
    'Oriental': {
        center: [34.6814, -1.9086],
        avgPrice: 125000,
        minPrice: 80000,
        maxPrice: 170000,
        popularBrands: ['Dacia', 'Renault', 'Hyundai'],
        description: 'Région frontalière avec marché en développement',
        carCount: 4200,
        vehicleTypes: {
            'Sedan': 40,
            'SUV': 15,
            'Compact': 30,
            'Luxury': 10,
            'Electric': 5
        },
        priceHistory: [120000, 122000, 123000, 124000, 124500, 125000],
        trend: 'up'
    },
    'Béni Mellal-Khénifra': {
        center: [32.3373, -6.3498],
        avgPrice: 115000,
        minPrice: 75000,
        maxPrice: 160000,
        popularBrands: ['Dacia', 'Renault', 'Peugeot'],
        description: 'Région agricole avec marché automobile modéré',
        carCount: 3800,
        vehicleTypes: {
            'Sedan': 35,
            'SUV': 20,
            'Compact': 30,
            'Luxury': 10,
            'Electric': 5
        },
        priceHistory: [110000, 112000, 113000, 114000, 114500, 115000],
        trend: 'up'
    },
    'Souss-Massa': {
        center: [30.4278, -9.5981],
        avgPrice: 130000,
        minPrice: 85000,
        maxPrice: 175000,
        popularBrands: ['Dacia', 'Renault', 'Hyundai'],
        description: 'Région côtière avec économie diversifiée',
        carCount: 4600,
        vehicleTypes: {
            'Sedan': 30,
            'SUV': 25,
            'Compact': 30,
            'Luxury': 10,
            'Electric': 5
        },
        priceHistory: [125000, 127000, 128000, 129000, 129500, 130000],
        trend: 'up'
    },
    'Guelmim-Oued Noun': {
        center: [28.9869, -10.0574],
        avgPrice: 110000,
        minPrice: 70000,
        maxPrice: 150000,
        popularBrands: ['Dacia', 'Renault', 'Peugeot'],
        description: 'Région saharienne avec marché en croissance',
        carCount: 2100,
        vehicleTypes: {
            'Sedan': 40,
            'SUV': 15,
            'Compact': 30,
            'Luxury': 10,
            'Electric': 5
        },
        priceHistory: [105000, 107000, 108000, 109000, 109500, 110000],
        trend: 'up'
    },
    'Laâyoune-Sakia El Hamra': {
        center: [27.1533, -13.2033],
        avgPrice: 105000,
        minPrice: 65000,
        maxPrice: 140000,
        popularBrands: ['Dacia', 'Renault', 'Hyundai'],
        description: 'Région saharienne avec développement récent',
        carCount: 1800,
        vehicleTypes: {
            'Sedan': 35,
            'SUV': 20,
            'Compact': 30,
            'Luxury': 10,
            'Electric': 5
        },
        priceHistory: [100000, 102000, 103000, 104000, 104500, 105000],
        trend: 'up'
    },
    'Dakhla-Oued Ed-Dahab': {
        center: [23.6849, -15.9582],
        avgPrice: 95000,
        minPrice: 60000,
        maxPrice: 130000,
        popularBrands: ['Dacia', 'Renault', 'Peugeot'],
        description: 'Région la plus méridionale avec marché émergent',
        carCount: 1200,
        vehicleTypes: {
            'Sedan': 40,
            'SUV': 15,
            'Compact': 30,
            'Luxury': 10,
            'Electric': 5
        },
        priceHistory: [90000, 92000, 93000, 94000, 94500, 95000],
        trend: 'up'
    },
    'Drâa-Tafilalet': {
        center: [31.1728, -4.0000],
        avgPrice: 85000,
        minPrice: 50000,
        maxPrice: 120000,
        popularBrands: ['Dacia', 'Renault', 'Hyundai'],
        description: 'Région désertique avec les prix les plus bas',
        carCount: 1500,
        vehicleTypes: {
            'Sedan': 35,
            'SUV': 20,
            'Compact': 30,
            'Luxury': 10,
            'Electric': 5
        },
        priceHistory: [80000, 82000, 83000, 84000, 84500, 85000],
        trend: 'up'
    }
};

// Variables globales
let priceChart, vehicleTypeChart, trendChart, brandsChart;
let currentMap;

// Initialisation des analyses
function initAnalytics() {
    createPriceChart();
    createVehicleTypeChart();
    createRankings();
    initSearch();
    initDashboard();
}

// Création du graphique des prix
function createPriceChart() {
    const ctx = document.getElementById('priceChart').getContext('2d');
    const regions = Object.keys(extendedRegionData);
    const prices = regions.map(region => extendedRegionData[region].avgPrice);
    const colors = regions.map(region => getColor(extendedRegionData[region].avgPrice));

    priceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: regions,
            datasets: [{
                label: 'Prix Moyen (MAD)',
                data: prices,
                backgroundColor: colors,
                borderColor: colors.map(color => color.replace('0.8', '1')),
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Prix: ${formatNumber(context.parsed.y)} MAD`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatNumber(value) + ' MAD';
                        }
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

// Création du graphique des types de véhicules
function createVehicleTypeChart() {
    const ctx = document.getElementById('vehicleTypeChart').getContext('2d');
    
    // Calculer les totaux nationaux
    const vehicleTypes = {};
    Object.values(extendedRegionData).forEach(region => {
        Object.entries(region.vehicleTypes).forEach(([type, percentage]) => {
            vehicleTypes[type] = (vehicleTypes[type] || 0) + percentage;
        });
    });

    const labels = Object.keys(vehicleTypes);
    const data = Object.values(vehicleTypes);
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];

    vehicleTypeChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return `${context.label}: ${percentage}%`;
                        }
                    }
                }
            }
        }
    });
}

// Création des classements
function createRankings() {
    const regions = Object.entries(extendedRegionData);
    
    // Top 5 plus chères
    const expensive = regions
        .sort((a, b) => b[1].avgPrice - a[1].avgPrice)
        .slice(0, 5);
    
    // Top 5 plus abordables
    const affordable = regions
        .sort((a, b) => a[1].avgPrice - b[1].avgPrice)
        .slice(0, 5);

    renderRanking('expensive-ranking', expensive, 'expensive');
    renderRanking('affordable-ranking', affordable, 'affordable');
}

// Rendu d'un classement
function renderRanking(containerId, regions, type) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    regions.forEach((region, index) => {
        const [name, data] = region;
        const trendIcon = data.trend === 'up' ? '🔼' : '🔽';
        const trendColor = data.trend === 'up' ? '#22c55e' : '#ef4444';

        const item = document.createElement('div');
        item.className = 'ranking-item';
        item.innerHTML = `
            <div class="ranking-position">${index + 1}</div>
            <div class="ranking-info">
                <div class="ranking-region">${name}</div>
                <div class="ranking-price">${formatNumber(data.avgPrice)} MAD</div>
            </div>
            <div class="ranking-trend" style="color: ${trendColor}">${trendIcon}</div>
        `;

        item.addEventListener('click', () => {
            openRegionDashboard(name);
            if (currentMap) {
                currentMap.setView(data.center, 8);
            }
        });

        container.appendChild(item);
    });
}

// Initialisation de la recherche
function initSearch() {
    const searchInput = document.getElementById('region-search');
    const searchBtn = document.getElementById('search-btn');

    // Créer la liste des suggestions
    const regionNames = Object.keys(extendedRegionData);
    const suggestions = [
        'Casablanca', 'Rabat', 'Marrakech', 'Fès', 'Tanger', 'Agadir',
        'Meknès', 'Oujda', 'Kénitra', 'Tétouan', 'Safi', 'El Jadida',
        'Béni Mellal', 'Nador', 'Taza', 'Larache', 'Khouribga', 'Ouarzazate',
        'Dakhla', 'Laâyoune', 'Guelmim', 'Al Hoceima', 'Ifrane', 'Azrou'
    ];

    // Ajouter les suggestions au placeholder
    searchInput.placeholder = `Rechercher une région (ex: ${suggestions.slice(0, 3).join(', ')}...)`;

    const performSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        if (!query) return;

        // Recherche plus flexible
        const matchingRegions = Object.entries(extendedRegionData).filter(([region, data]) => {
            const regionLower = region.toLowerCase();
            const descriptionLower = data.description.toLowerCase();
            
            // Recherche par nom de région ou ville principale
            return regionLower.includes(query) || 
                   descriptionLower.includes(query) ||
                   // Recherche par villes populaires
                   (query.includes('casa') && regionLower.includes('casablanca')) ||
                   (query.includes('rabat') && regionLower.includes('rabat')) ||
                   (query.includes('marrakech') && regionLower.includes('marrakech')) ||
                   (query.includes('fes') && regionLower.includes('fès')) ||
                   (query.includes('tanger') && regionLower.includes('tanger')) ||
                   (query.includes('agadir') && regionLower.includes('souss')) ||
                   (query.includes('oujda') && regionLower.includes('oriental')) ||
                   (query.includes('meknes') && regionLower.includes('fès')) ||
                   (query.includes('beni') && regionLower.includes('béni mellal')) ||
                   (query.includes('dakhla') && regionLower.includes('dakhla')) ||
                   (query.includes('laayoune') && regionLower.includes('laâyoune'));
        });

        if (matchingRegions.length > 0) {
            const [region, data] = matchingRegions[0];
            if (currentMap) {
                currentMap.setView(data.center, 8);
                
                // Animer le marqueur
                const markers = document.querySelectorAll('.leaflet-interactive');
                markers.forEach(marker => {
                    if (marker._leaflet_id) {
                        marker.style.animation = 'pulse 1s infinite';
                        setTimeout(() => {
                            marker.style.animation = '';
                        }, 3000);
                    }
                });
                
                showNotification(`Région trouvée: ${region}`, 'success');
            }
        } else {
            showNotification(`Région non trouvée. Suggestions: ${suggestions.slice(0, 5).join(', ')}`, 'error');
        }
    };

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Ajouter des suggestions au focus
    searchInput.addEventListener('focus', () => {
        if (!searchInput.value) {
            searchInput.placeholder = `Suggestions: ${suggestions.slice(0, 6).join(', ')}`;
        }
    });

    searchInput.addEventListener('blur', () => {
        searchInput.placeholder = `Rechercher une région (ex: ${suggestions.slice(0, 3).join(', ')}...)`;
    });
}

// Initialisation du dashboard
function initDashboard() {
    const dashboard = document.getElementById('region-dashboard');
    const overlay = document.getElementById('dashboard-overlay');
    const closeBtn = document.getElementById('close-dashboard');

    const closeDashboard = () => {
        dashboard.classList.remove('active');
        overlay.classList.remove('active');
    };

    closeBtn.addEventListener('click', closeDashboard);
    overlay.addEventListener('click', closeDashboard);

    // Fermer avec Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && dashboard.classList.contains('active')) {
            closeDashboard();
        }
    });
}

// Ouverture du dashboard d'une région
function openRegionDashboard(regionName) {
    const data = extendedRegionData[regionName];
    if (!data) return;

    // Mise à jour des statistiques
    document.getElementById('dashboard-title').textContent = `Dashboard - ${regionName}`;
    document.getElementById('dashboard-avg-price').textContent = formatNumber(data.avgPrice) + ' MAD';
    document.getElementById('dashboard-car-count').textContent = formatNumber(data.carCount);
    document.getElementById('dashboard-trend').innerHTML = data.trend === 'up' ? '🔼 +5.7%' : '🔽 -2.3%';

    // Création des graphiques
    createTrendChart(data.priceHistory);
    createBrandsChart(data.popularBrands);

    // Affichage du dashboard
    document.getElementById('region-dashboard').classList.add('active');
    document.getElementById('dashboard-overlay').classList.add('active');
}

// Création du graphique de tendance
function createTrendChart(priceHistory) {
    const ctx = document.getElementById('trendChart').getContext('2d');
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'];

    if (trendChart) {
        trendChart.destroy();
    }

    trendChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Prix Moyen',
                data: priceHistory,
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#667eea',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return formatNumber(value) + ' MAD';
                        }
                    }
                }
            }
        }
    });
}

// Création du graphique des marques
function createBrandsChart(brands) {
    const ctx = document.getElementById('brandsChart').getContext('2d');
    const data = [40, 30, 20, 10]; // Pourcentages fictifs
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'];

    if (brandsChart) {
        brandsChart.destroy();
    }

    brandsChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: brands,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Fonction utilitaire pour afficher des notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 10001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        background: ${type === 'error' ? '#ef4444' : '#22c55e'};
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Fonction utilitaire pour formater les nombres
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Fonction utilitaire pour obtenir la couleur selon le prix
function getColor(price) {
    if (price >= 200000) return 'rgba(255, 68, 68, 0.8)';
    if (price >= 150000) return 'rgba(255, 136, 0, 0.8)';
    if (price >= 100000) return 'rgba(255, 204, 0, 0.8)';
    if (price >= 80000) return 'rgba(136, 204, 0, 0.8)';
    return 'rgba(68, 204, 68, 0.8)';
}

// Export des fonctions pour utilisation dans map-prices.js
window.AnalyticsModule = {
    initAnalytics,
    openRegionDashboard,
    showNotification,
    extendedRegionData
};
