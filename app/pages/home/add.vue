<script setup>
import { ref } from 'vue'

const recipe = ref({
    title: '',
    author: '',
    description: '',
    image: null,
    prepTime: '',
    defaultPersons: '',
    ingredients: [''],
    steps: ['']
})

const addIngredient = () => {
    recipe.value.ingredients.push('')
}

const removeIngredient = (index) => {
    if (recipe.value.ingredients.length > 1) {
        recipe.value.ingredients.splice(index, 1)
    }
}

const addStep = () => {
    recipe.value.steps.push('')
}

const removeStep = (index) => {
    if (recipe.value.steps.length > 1) {
        recipe.value.steps.splice(index, 1)
    }
}

const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        recipe.value.image = file
    }
}

const submitRecipe = () => {
    // Logique pour sauvegarder la recette
    console.log('Recette à sauvegarder:', recipe.value)
}
</script>

<template>
    <div class="max-w-2xl mx-auto py-10 px-6 pb-24">
        <h1 class="text-2xl font-semibold mb-6">Ajouter une recette</h1>

        <form @submit.prevent="submitRecipe" class="flex flex-col gap-6">
            <!-- Informations générales -->
            <section class="rounded-xl shadow-sm p-5 bg-white/30 backdrop-blur-sm">
                <h2 class="text-lg font-medium mb-4">Informations générales</h2>

                <div class="flex flex-col gap-4">
                    <input v-model="recipe.title" type="text" placeholder="Titre de la recette *"
                        class="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white"
                        required />

                    <textarea v-model="recipe.description" placeholder="Description de la recette..."
                        class="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm h-32 border-0 focus:ring-2 focus:ring-white resize-none"
                        required></textarea>

                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-medium">Image de la recette</label>
                        <div class="relative">
                            <input type="file" accept="image/*" @change="handleImageUpload"
                                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" id="image-upload" />
                            <label for="image-upload"
                                class="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border-2 border-dashed border-white/40 hover:bg-white/30 cursor-pointer transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <span class="text-sm font-medium">
                                    {{ recipe.image ? recipe.image.name : 'Choisir une image' }}
                                </span>
                            </label>
                        </div>
                    </div>

                    <div class="flex items-center gap-2">
                        <label class="text-sm font-medium">Temps de préparation:</label>
                        <input v-model.number="recipe.prepTime" type="number" min="1"
                            class="w-20 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white text-center"
                            required />
                        <span class="text-sm font-medium">minutes</span>
                    </div>

                    <div class="flex items-center gap-2">
                        <label class="text-sm font-medium">Nombre de personnes:</label>
                        <input v-model.number="recipe.defaultPersons" type="number" min="1"
                            class="w-20 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white text-center" />
                    </div>
                </div>
            </section>

            <!-- Ingrédients -->
            <section class="rounded-xl shadow-sm p-5 bg-white/30 backdrop-blur-sm">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-lg font-medium">Ingrédients *</h2>
                    <button type="button" @click="addIngredient"
                        class="px-3 py-1 rounded-lg bg-white text-black text-sm hover:bg-white">
                        + Ajouter
                    </button>
                </div>

                <div class="flex flex-col gap-3">
                    <div v-for="(ingredient, index) in recipe.ingredients" :key="index" class="flex gap-2 items-center">
                        <input v-model="recipe.ingredients[index]" type="text" :placeholder="`Ingrédient ${index + 1}`"
                            class="flex-1 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white"
                            required />
                        <button v-if="recipe.ingredients.length > 1" type="button" @click="removeIngredient(index)"
                            class="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600">
                            ×
                        </button>
                    </div>
                </div>
            </section>

            <!-- Étapes -->
            <section class="rounded-xl shadow-sm p-5 bg-white/30 backdrop-blur-sm">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-lg font-medium">Étapes de préparation *</h2>
                    <button type="button" @click="addStep"
                        class="px-3 py-1 rounded-lg bg-white text-black text-sm hover:bg-white">
                        + Ajouter
                    </button>
                </div>

                <div class="flex flex-col gap-3">
                    <div v-for="(step, index) in recipe.steps" :key="index" class="flex gap-2 items-start">
                        <span
                            class="min-w-[2rem] h-8 rounded-full bg-white text-black text-sm flex items-center justify-center mt-1">
                            {{ index + 1 }}
                        </span>
                        <textarea v-model="recipe.steps[index]" :placeholder="`Étape ${index + 1}`"
                            class="flex-1 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white resize-none h-20"
                            required></textarea>
                        <button v-if="recipe.steps.length > 1" type="button" @click="removeStep(index)"
                            class="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 mt-1">
                            ×
                        </button>
                    </div>
                </div>
            </section>

            <!-- Bouton de soumission -->
            <button type="submit"
                class="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-white transition-colors">
                Créer la recette
            </button>
        </form>
    </div>
</template>
