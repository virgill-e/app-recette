<template>
    <div class="w-screen py-8 pb-20">
        <NavTop />
        <div id="recipes" class="flex flex-col items-center justify-start my-16 gap-4">
            <!-- RECIPE -->
            <RecipeCard imagePath="/img/fake-img.jpg" title="titre" chef="chef" />
            <RecipeCard imagePath="/img/fake-img.jpg" title="titre" chef="chef" />
            <RecipeCard imagePath="/img/fake-img.jpg" title="titre" chef="chef" />
            <RecipeCard imagePath="/img/fake-img.jpg" title="titre" chef="chef" />

        </div>
        <NavBottom />
    </div>
</template>