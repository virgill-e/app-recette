<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const searchType = ref('recette')

const setSearchType = (type) => {
    searchType.value = type
}
</script>

<template>
    <div>
        <!-- Barre de recherche -->
        <div class="flex flex-col items-center justify-start mt-16 gap-4 px-4">
            <input v-model="searchQuery" type="text"
                :placeholder="searchType === 'recette' ? 'Rechercher une recette...' : 'Rechercher un ingrédient...'"
                class="w-3/4 px-4 py-2 rounded-lg bg-white/40 backdrop-blur-sm border-2 border-transparent hover:border-white/60 focus:border-white/80 focus:outline-none transition-colors duration-200" />
        </div>

        <!-- Menu de sélection -->
        <div id="search-type-nav" class="w-full flex flex-row items-center justify-evenly mt-6">
            <button @click="setSearchType('recette')" :class="{ 'underline': searchType === 'recette' }"
                class="text-lg font-medium">
                Recette
            </button>
            <button @click="setSearchType('ingredient')" :class="{ 'underline': searchType === 'ingredient' }"
                class="text-lg font-medium">
                Ingrédient
            </button>
        </div>

        <!-- Résultats de recherche -->
        <div id="search-results" class="flex flex-col items-center justify-start my-8 gap-4">
            <RecipeCard imagePath="/img/fake-img.jpg" title="Résultat 1" chef="Chef 1" />
            <RecipeCard imagePath="/img/fake-img.jpg" title="Résultat 2" chef="Chef 2" />
            <RecipeCard imagePath="/img/fake-img.jpg" title="Résultat 3" chef="Chef 3" />
        </div>
    </div>
</template>
