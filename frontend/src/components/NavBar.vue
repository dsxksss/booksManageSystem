<script setup>
import { useRouter } from "vue-router"
import { ref, watch, onMounted } from "vue"
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import Menu from './Menu.vue';
import menuItems from '../data/menuItems';

const router = useRouter();
const nowComponent = ref({});

const getNowComponent = () => nowComponent.value = menuItems.find(item => item.path === router.currentRoute.value.path)

onMounted(() => {
    getNowComponent();
})

watch(router.currentRoute, getNowComponent)

</script>

<template>
    <div class="navbar z-10 fixed top-0 px-5 ">
        <div data-tauri-drag-region class="flex-1">
            <button class="btn btn-ghost text-2xl">
                <component :is="nowComponent.component" :class="`w-6 h-6 ${nowComponent.iconColor}`"></component>
                {{ nowComponent.title }}
            </button>

        </div>
        <div class="flex-none">
            <div  class="flex flex-row items-center space-x-2">
                <!-- <button class="btn btn-ghost btn-circle">
                    <MagnifyingGlassIcon /> 
                </button> -->
                <Menu />
            </div>
            
        </div>
    </div>
</template>