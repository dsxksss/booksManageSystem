<script setup>
import "./index.css";
import NavBar from './components/NavBar.vue';
import PageContent from "./components/PageContent.vue"


</script>


<template>
  <main class="h-screen overflow-hidden">
    <!-- 导航栏 -->
    <NavBar></NavBar>
    <!-- 页面容器 -->
    <PageContent></PageContent>
  </main>
</template>