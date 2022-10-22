<template>
        <div class="zona-1"
             @drop="onDrop"
             @dragover.prevent
             @dragenter.prevent
        ></div>
        <div class="zona-2">
            <p class="ufo" id="ufo" draggable="true" @dragstart="sratDrag">hello</p>

        </div>
    <diV class="zona-2">
        <p class="ufo" id="block" draggable="true" @dragstart="sratDrag">world</p>
    </diV>

</template>

<script>
export default {
name: "drag.vue",
    Data(){
    return{
        zona1:'',
        zona2:'',
        ufo:''
    }
    },
    mounted() {
    // this.DragAndDrop()
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
    sratDrag(event){
            event.dataTransfer.dropEffect='move';
            event.dataTransfer.effectAllowed='move';
            event.dataTransfer.setData('id',event.target.id)
    },
        onDrop(event){
            let itemId = event.dataTransfer.getData('id');
            event.target.append(document.getElementById(itemId))

        }


    }
}
</script>

<style scoped>
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
