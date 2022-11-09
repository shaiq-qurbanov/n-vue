<template>
    <div class="nav">
            <router-link to="/test" class="test" :active-class="page" @click="click">Test</router-link>
            <router-link to="/page" class = "test" :active-class="page"  @click="click">Page</router-link>
            <router-link to="/drag" class = "test" :active-class="page"  @click="click">Drag</router-link>
            <router-link to="/internet" class = "test" :active-class="page"  @click="click">Internet-M</router-link>
    </div>
    <router-view/>
</template>
<script>
export default {
    name:"Welcome",
    data(){
        return{
            page : '',
        }
    },
    methods:{
        click(e){
            this.page ='show'
            // e.target.classList.add('show')
            // event.preventDefault()
        }
    }
}
</script>
<style scoped>
    .nav{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        background-color:#ed4c00  ;
    }
    .test{
        text-align: center;
        padding: 12px;
        width: 18%;
        height: 50px;
        background-color: #f1700d;
        color: #f3ffdd;
        border-radius: 16px;
    }
    .show{
        background-color: #4f89a4;

    }
</style>
