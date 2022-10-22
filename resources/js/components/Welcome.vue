<template>
    <div class="nav">
        <router-link to="/test">Test</router-link>
        |
        <router-link to="/page">Page</router-link>
        |
        <router-link to="/drag">Drag</router-link>

    </div>
    <router-view/>
</template>
<script>
export default {
    name:"Welcome"
}
</script>
<style scoped>
</style>
