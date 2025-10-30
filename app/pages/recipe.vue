<script setup>
import { ref } from 'vue'

const persons = ref(4)
const incrementPersons = () => { persons.value++ }
const decrementPersons = () => { if (persons.value > 1) persons.value-- }
</script>

<template>
    <div class="max-w-2xl mx-auto py-10 px-6 pb-24">
        <div class="flex flex-col gap-4 pb-10">
            <div class="overflow-hidden rounded-2xl">
                <nuxt-img src="/img/fake-img.jpg" alt="Crèpes maison" class="w-full h-56 md:h-72 object-cover" />
            </div>
            <h1 class="text-2xl font-semibold">Crèpes maison</h1>
            <p class="text-sm">Virgill_e</p>
            <p class="text-sm text-white">
                Des crêpes moelleuses et savoureuses, parfaites pour le petit-déjeuner ou le goûter.
            </p>
            <div class="flex items-center gap-3 text-sm">
                <span class="px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm shadow-sm">Temps de préparation: 20
                    min</span>
                <div class="px-3 py-1 rounded-xl bg-white/30 backdrop-blur-sm shadow-sm">
                    <div class="flex items-center gap-3">
                        <button class="w-6 h-6 rounded-full bg-white/40 flex items-center justify-center"
                            @click="decrementPersons" aria-label="Diminuer">−</button>
                        <span class="min-w-[1.5rem] text-center">{{ persons }}</span>
                        <button class="w-6 h-6 rounded-full bg-white/40 flex items-center justify-center"
                            @click="incrementPersons" aria-label="Augmenter">+</button>
                    </div>
                    <div class="text-xs leading-none text-center mt-1">personnes</div>
                </div>
            </div>
        </div>

        <section class="rounded-xl shadow-sm p-5 mb-6 bg-white/30 backdrop-blur-sm">
            <h2 class="text-lg font-medium mb-2">Ingrédients</h2>
            <ul class="list-disc list-inside space-y-1">
                <li>200g de farine</li>
                <li>200g de farine</li>
                <li>200g de farine</li>
            </ul>
        </section>

        <section class="rounded-xl shadow-sm p-5 bg-white/30 backdrop-blur-sm">
            <h2 class="text-lg font-medium mb-2">Etapes</h2>
            <ol class="list-decimal list-inside space-y-2">
                <li>Mélanger les ingrédients</li>
                <li>Faire cuire les crêpes</li>
                <li>Servir les crêpes</li>
            </ol>
        </section>
    </div>
</template>