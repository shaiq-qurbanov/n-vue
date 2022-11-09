<template>
        <div class="zona-1"
             @drop="onDrop"
             @dragover.prevent
             @dragenter.prevent>
<!--            <p class="ufo"-->
<!--               draggable="true"-->
<!--               @dragstart="startDrag">-->
<!--                hello-->
<!--            </p>-->
        </div>
        <div class="zona-2"
            @drop="onDrop"
            @dragover.prevent
            @dragenter.prevent>
            <p class="ufo"
               id="ufo"
               draggable="true"
               @dragstart="startDrag">
                World
            </p>

        </div>
    <div class="items" v-for="item in items">
        {{item}}

    </div>
</template>

<script>
    // import { Container, Draggable } from "vue-dndrop";
export default {
name: "drag.vue",
    data(){
    return{
        zona1:'',
        zona2:'',
        ufo:'',
        items: [
            {
                id: 0,
                title: 'Item A',
                list: 1,
                solary:300
            },
            {
                id: 3,
                title: 'Item d',
                list: 3,
                solary:450
            },
            {
                id: 1,
                title: 'Item B',
                list: 1,
                solary:600
            },
            {
                id: 2,
                title: 'Item C',
                list: 2,
                solary:870
            },
        ]

    }
    },
    computed:{

    },
    mounted() {
    // this.DragAndDrop()
    //     this.fun()
    },
    methods:{
    //     DragAndDrop(event){
    //         const zona1 = document.querySelector('.zona-1');
    //         const zona2 = document.querySelector('.zona-2');
    //         const ufo = document.querySelector('#ufo');
    //         const block = document.querySelector('#block');
    //         zona1.ondragover = onDrop;
    //         zona2.ondragover = onDrop;
    //             function onDrop(event){
    //           event.preventDefault()
    //         }
    //         ufo.ondragstart = drag;
    //         block.ondragstart = drag;
    //             function drag(event){
    //                 event.dataTransfer.setData('id',event.target.id)
    //             }
    //             zona1.ondrop = drop;
    //             zona2.ondrop = drop;
    //             function drop(event){
    //               let itemId = event.dataTransfer.getData('id')
    //                 console.log(itemId)
    //                 event.target.append(document.getElementById(itemId))
    //             }
    // },
    startDrag(event){
            event.dataTransfer.dropEffect='move';
            event.dataTransfer.effectAllowed='move';
            event.dataTransfer.setData('id',event.target.id)
    },
        onDrop(event){
            let itemId = event.dataTransfer.getData('id');
            event.target.append(document.getElementById(itemId));
            console.log(this.fun(3,4,5,6,8))

        },
        fun(a,b,...arr){
        console.log(a,b)
            console.log([...arr])
            console.log('arr:',arr)
            console.log(a+b)
            console.log('arguments',arguments)
        }

    }
}
</script>

<style scoped>
    .items{
        width: 300px;
        padding: 10px;
        background-color: darkolivegreen;
        margin: 50px;
    }
.zona-1{
    width: 200px;
    height: 60px;
    background-color: #4f89a4;
    margin-top: 20px;
}
.zona-2{
    width: 200px;
    height: 60px;
    background-color: #9e4fa4;
    margin-top: 20px;
}
.ufo{
    padding: 10px;
    text-align: center;
    /*background-color: #b57f7f;*/
}
</style>
