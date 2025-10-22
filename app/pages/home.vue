<template>
    <div class="w-screen py-8 pb-20">
        <NavTop />
        <div id="recipes" class="flex flex-col items-center justify-start my-16">
            <div class="h-[30vh] w-3/4 bg-white/40 rounded-xl">
                <nuxt-img src="/img/fake-img.jpg" alt="recette-1" class="w-full h-3/4 rounded-xl" />
                <div class="h-1/4 flex flex-col items-start justify-center">
                    <span class="block ml-4">titre</span>
                    <span class="block ml-4">chef</span>
                </div>
            </div>
        </div>
        <NavBottom />
    </div>
</template>