<template>
    <div class="h-[30vh] w-3/4 bg-white/40 rounded-xl">
        <nuxt-img :src="imagePath" :alt="title" class="w-full h-3/4 rounded-xl object-cover" />
        <div class="h-1/4 flex flex-col items-start justify-center">
            <span class="block ml-4">{{ title }}</span>
            <span class="block ml-4 text-sm">{{ chef }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    imagePath: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    chef: {
        type: String,
        required: true
    }
})
</script>
