<script setup>
const route = useRoute()

const isActive = (path) => {
    return route.path === path
}
</script>

<template>
    <nav class="fixed bottom-0 left-0 right-0 w-full bg-white/30 backdrop-blur-sm">
        <div class="flex flex-row items-center justify-evenly py-3">
            <NuxtLink to="/home" class="flex flex-col items-center justify-center p-2">
                <img src="/img/home-icon.png" alt="icon" class="w-6 h-6"
                    :class="{ 'opacity-100': isActive('/home'), 'opacity-50': !isActive('/home') }" />
            </NuxtLink>
            <NuxtLink to="/home/search" class="flex flex-col items-center justify-center p-2">
                <img src="/img/search-icon.png" alt="icon" class="w-6 h-6"
                    :class="{ 'opacity-100': isActive('/home/search'), 'opacity-50': !isActive('/home/search') }" />
            </NuxtLink>
            <NuxtLink to="/home/add" class="flex flex-col items-center justify-center p-2">
                <img src="/img/add-icon.png" alt="icon" class="w-6 h-6"
                    :class="{ 'opacity-100': isActive('/home/add'), 'opacity-50': !isActive('/home/add') }" />
            </NuxtLink>
            <NuxtLink to="/home/alerts" class="flex flex-col items-center justify-center p-2">
                <img src="/img/alert-icon.png" alt="icon" class="w-6 h-6"
                    :class="{ 'opacity-100': isActive('/home/alerts'), 'opacity-50': !isActive('/home/alerts') }" />
            </NuxtLink>
            <NuxtLink to="/home/profile" class="flex flex-col items-center justify-center p-2">
                <img src="/img/profil-icon.png" alt="icon" class="w-6 h-6"
                    :class="{ 'opacity-100': isActive('/home/profile'), 'opacity-50': !isActive('/home/profile') }" />
            </NuxtLink>
        </div>
    </nav>
</template>
