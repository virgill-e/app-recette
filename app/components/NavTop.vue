<script setup>
import { ref } from 'vue'

const activeTab = ref('discover')

const setActiveTab = (tab) => {
    activeTab.value = tab
}
</script>

<template>
    <div id="nav-top" class="w-full flex flex-row items-center justify-evenly">
        <button @click="setActiveTab('discover')" :class="{ 'underline': activeTab === 'discover' }">
            Discover
        </button>
        <button @click="setActiveTab('follow')" :class="{ 'underline': activeTab === 'follow' }">
            Follow
        </button>
    </div>
</template>
