<template>
    <div>
        <NavTop />
        <div class="flex flex-col items-center justify-start my-16 gap-4 px-4">
            <h2 class="text-2xl font-bold">Ajouter une recette</h2>
            <!-- Ajoutez ici votre formulaire d'ajout de recette -->
            <form class="w-3/4 flex flex-col gap-4">
                <input type="text" placeholder="Titre de la recette"
                    class="px-4 py-2 rounded-lg bg-white/40 backdrop-blur-sm" />
                <textarea placeholder="Description..."
                    class="px-4 py-2 rounded-lg bg-white/40 backdrop-blur-sm h-32"></textarea>
                <button class="px-4 py-2 rounded-lg bg-blue-500 text-white">
                    Ajouter
                </button>
            </form>
        </div>
    </div>
</template>
