<template>
    <div>
        <HomeHeader/>
        <HomeSwiper/>
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    export default {
        name: "Home",
        components: {
            HomeHeader,
            HomeSwiper
        }
    }
</script>

<style scoped>

</style>