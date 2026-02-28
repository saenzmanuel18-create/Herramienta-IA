// Configuración global para Chart.js - Minimalista y oscura
Chart.defaults.color = '#94a3b8';
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(2, 6, 23, 0.9)'; // Darker
Chart.defaults.plugins.tooltip.titleColor = '#f8fafc';
Chart.defaults.plugins.tooltip.bodyColor = '#f8fafc';
Chart.defaults.plugins.tooltip.padding = 12;
Chart.defaults.plugins.tooltip.cornerRadius = 12;
Chart.defaults.plugins.tooltip.borderColor = 'rgba(255,255,255,0.1)';
Chart.defaults.plugins.tooltip.borderWidth = 1;

document.addEventListener("DOMContentLoaded", () => {

    // ==============================================
    // 1. Hero Doughnut Chart (index.html)
    // ==============================================
    const heroCanvas = document.getElementById('heroChart');
    if (heroCanvas) {
        const heroCtx = heroCanvas.getContext('2d');
        new Chart(heroCtx, {
            type: 'doughnut',
            data: {
                labels: ['Activos', 'Pasivos'],
                datasets: [{
                    data: [75, 25],
                    backgroundColor: [
                        'rgba(16, 185, 129, 0.9)', // Verde esmeralda
                        'rgba(239, 68, 68, 0.9)'   // Rojo
                    ],
                    borderColor: [
                        'rgba(2, 6, 23, 1)',
                        'rgba(2, 6, 23, 1)'
                    ],
                    borderWidth: 4,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: 20
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#e2e8f0',
                            padding: 20,
                            font: { size: 13, weight: '500' },
                            usePointStyle: true,
                            boxWidth: 8
                        }
                    }
                },
                cutout: '75%', // Más delgado y elegante
                animation: {
                    animateScale: true,
                    animateRotate: true,
                    duration: 2500,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    // ==============================================
    // 2. Balance Bar/Line Chart (analisis.html)
    // ==============================================
    const balanceCanvas = document.getElementById('balanceChart');
    if (balanceCanvas) {
        const balanceCtx = balanceCanvas.getContext('2d');

        // Gradientes refinados
        const assetGradient = balanceCtx.createLinearGradient(0, 0, 0, 400);
        assetGradient.addColorStop(0, 'rgba(16, 185, 129, 0.8)');
        assetGradient.addColorStop(1, 'rgba(16, 185, 129, 0.1)');

        const liabilityGradient = balanceCtx.createLinearGradient(0, 0, 0, 400);
        liabilityGradient.addColorStop(0, 'rgba(239, 68, 68, 0.8)');
        liabilityGradient.addColorStop(1, 'rgba(239, 68, 68, 0.1)');

        new Chart(balanceCtx, {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                datasets: [
                    {
                        type: 'line',
                        label: 'Patrimonio Neto',
                        data: [50000, 57000, 64500, 70000, 77000, 82200],
                        borderColor: '#8b5cf6', // Color púrpura (accent)
                        borderWidth: 3,
                        fill: false,
                        tension: 0.4,
                        pointBackgroundColor: '#020617',
                        pointBorderColor: '#8b5cf6',
                        pointBorderWidth: 2,
                        pointRadius: 5,
                        pointHoverRadius: 7
                    },
                    {
                        type: 'bar',
                        label: 'Activos',
                        data: [100000, 105000, 112000, 115000, 120000, 124500],
                        backgroundColor: assetGradient,
                        borderRadius: 8,
                        barPercentage: 0.5,
                        categoryPercentage: 0.8
                    },
                    {
                        type: 'bar',
                        label: 'Pasivos',
                        data: [50000, 48000, 47500, 45000, 43000, 42300],
                        backgroundColor: liabilityGradient,
                        borderRadius: 8,
                        barPercentage: 0.5,
                        categoryPercentage: 0.8
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    legend: {
                        position: 'top',
                        align: 'end',
                        labels: {
                            color: '#e2e8f0',
                            usePointStyle: true,
                            boxWidth: 8,
                            padding: 20,
                            font: { family: "'Inter', sans-serif" }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return ` ${context.dataset.label}: $${context.parsed.y.toLocaleString()}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.03)',
                            drawBorder: false,
                            borderDash: [5, 5]
                        },
                        ticks: {
                            callback: function (value) {
                                return '$' + value / 1000 + 'k';
                            },
                            font: { size: 11 }
                        },
                        border: { display: false }
                    },
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            font: { size: 12 }
                        },
                        border: { display: false }
                    }
                }
            }
        });
    }
});
