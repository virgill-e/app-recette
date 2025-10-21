import { ref, computed, onMounted, onUnmounted } from 'vue';

/**
 * Définition des dégradés pour chaque période de la journée
 */
const gradients = {
    morning: {
        name: 'Matin',
        colors: [
            { color: '#f6d365', stop: 0 },  // orange
            { color: '#fdcbf1', stop: 100 } // mauve
        ],
        startHour: 6,
        endHour: 12
    },
    day: {
        name: 'Journée',
        colors: [
            { color: '#7ecfff', stop: 0 },  // bleu ciel
            { color: '#2c67f2', stop: 100 } // bleu nuit
        ],
        startHour: 12,
        endHour: 18
    },
    sunset: {
        name: 'Coucher de soleil',
        colors: [
            { color: '#fa8bff', stop: 0 },  // rose
            { color: '#fbc2eb', stop: 100 } // mauve
        ],
        startHour: 18,
        endHour: 21
    },
    night: {
        name: 'Nuit',
        colors: [
            { color: '#2c67f2', stop: 0 },  // bleu nuit
            { color: '#12063b', stop: 100 } // violet foncé
        ],
        startHour: 21,
        endHour: 6
    }
};

/**
 * Convertit une couleur hexadécimale en objet RGB
 * @param {string} hex - Couleur au format hexadécimal (#RRGGBB)
 * @returns {Object} Objet avec propriétés r, g, b
 */
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

/**
 * Interpole entre deux couleurs selon un facteur
 * @param {string} color1 - Première couleur (hex)
 * @param {string} color2 - Deuxième couleur (hex)
 * @param {number} factor - Facteur d'interpolation (0-1)
 * @returns {string} Couleur interpolée au format rgb()
 */
function interpolateColor(color1, color2, factor) {
    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);

    const r = Math.round(c1.r + (c2.r - c1.r) * factor);
    const g = Math.round(c1.g + (c2.g - c1.g) * factor);
    const b = Math.round(c1.b + (c2.b - c1.b) * factor);

    return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Détermine la période actuelle en fonction de l'heure
 * @param {number} hour - Heure actuelle (0-23)
 * @returns {string} Clé de la période (morning, day, sunset, night)
 */
function getCurrentPeriodKey(hour) {
    if (hour >= 6 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 18) return 'day';
    if (hour >= 18 && hour < 21) return 'sunset';
    return 'night';
}

/**
 * Obtient la période suivante
 * @param {string} currentKey - Clé de la période actuelle
 * @returns {string} Clé de la période suivante
 */
function getNextPeriodKey(currentKey) {
    const periods = ['morning', 'day', 'sunset', 'night'];
    const currentIndex = periods.indexOf(currentKey);
    return periods[(currentIndex + 1) % periods.length];
}

/**
 * Calcule le facteur de progression dans la période actuelle
 * @param {number} hour - Heure actuelle (0-23)
 * @param {number} minutes - Minutes actuelles (0-59)
 * @returns {number} Facteur de progression (0-1)
 */
function getTransitionFactor(hour, minutes) {
    const totalMinutes = hour * 60 + minutes;
    const currentKey = getCurrentPeriodKey(hour);
    const period = gradients[currentKey];

    let startMinutes = period.startHour * 60;
    let endMinutes = period.endHour * 60;

    // Gérer le cas spécial de la nuit qui traverse minuit
    if (currentKey === 'night') {
        if (hour < 6) {
            // Entre minuit et 6h du matin
            startMinutes = 21 * 60;
            endMinutes = 30 * 60; // 6h = 30h en notation étendue
            return (totalMinutes + 24 * 60 - startMinutes) / (endMinutes - startMinutes);
        } else {
            // Entre 21h et minuit
            startMinutes = 21 * 60;
            endMinutes = 24 * 60;
            return (totalMinutes - startMinutes) / (endMinutes - startMinutes + 6 * 60);
        }
    }

    return (totalMinutes - startMinutes) / (endMinutes - startMinutes);
}

/**
 * Génère le dégradé CSS basé sur l'heure actuelle
 * @param {Date} now - Date/heure actuelle
 * @param {number} transitionStart - Point de départ de la transition (0-1)
 * @returns {string} Dégradé CSS au format linear-gradient()
 */
function generateGradient(now, transitionStart = 0.7) {
    const hour = now.getHours();
    const minutes = now.getMinutes();

    const currentKey = getCurrentPeriodKey(hour);
    const nextKey = getNextPeriodKey(currentKey);
    const factor = getTransitionFactor(hour, minutes);

    // Interpoler les couleurs entre la période actuelle et la suivante
    const current = gradients[currentKey];
    const next = gradients[nextKey];

    // Calculer le facteur d'interpolation
    // La transition commence à 70% (par défaut) de chaque période
    let interpolationFactor = 0;
    if (factor >= transitionStart) {
        interpolationFactor = (factor - transitionStart) / (1 - transitionStart);
    }

    // Interpoler les deux couleurs du dégradé
    const color1 = interpolateColor(
        current.colors[0].color,
        next.colors[0].color,
        interpolationFactor
    );

    const color2 = interpolateColor(
        current.colors[1].color,
        next.colors[1].color,
        interpolationFactor
    );

    return {
        gradient: `linear-gradient(to bottom, ${color1}, ${color2})`,
        periodName: current.name,
        currentPeriod: currentKey,
        nextPeriod: nextKey,
        transitionProgress: interpolationFactor
    };
}

/**
 * Composable pour gérer les dégradés en temps réel
 * @param {Object} options - Options de configuration
 * @param {number} options.updateInterval - Intervalle de mise à jour en ms (défaut: 1000)
 * @param {number} options.transitionStart - Point de départ de transition (défaut: 0.7)
 * @returns {Object} Propriétés réactives et méthodes
 */
export function useTimeGradient(options = {}) {
    const {
        updateInterval = 1000,
        transitionStart = 0.7
    } = options;

    const currentTime = ref('');
    const currentPeriod = ref('');
    const currentGradient = ref('');
    let intervalId = null;

    /**
     * Met à jour le dégradé basé sur l'heure actuelle
     */
    function updateGradient() {
        const now = new Date();
        const result = generateGradient(now, transitionStart);

        currentGradient.value = result.gradient;
        currentPeriod.value = result.periodName;
        currentTime.value = now.toLocaleTimeString('fr-FR');
    }

    /**
     * Démarre les mises à jour automatiques
     */
    function startAutoUpdate() {
        updateGradient();
        intervalId = setInterval(updateGradient, updateInterval);
    }

    /**
     * Arrête les mises à jour automatiques
     */
    function stopAutoUpdate() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    // Démarrage/arrêt automatique
    onMounted(() => {
        startAutoUpdate();
    });

    onUnmounted(() => {
        stopAutoUpdate();
    });

    return {
        currentGradient,
        currentPeriod,
        currentTime,
        updateGradient,
        startAutoUpdate,
        stopAutoUpdate
    };
}

/**
 * Fonction utilitaire pour obtenir un dégradé à une heure spécifique
 * Utile pour les tests ou l'aperçu
 * @param {number} hour - Heure (0-23)
 * @param {number} minutes - Minutes (0-59)
 * @returns {Object} Informations sur le dégradé
 */
export function getGradientAtTime(hour, minutes = 0) {
    const date = new Date();
    date.setHours(hour, minutes, 0, 0);
    return generateGradient(date);
}

/**
 * Export de la configuration des dégradés
 * Pour permettre la personnalisation
 */
export { gradients };

