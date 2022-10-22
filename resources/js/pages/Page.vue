<template>
    <div>
        <div class="simple-page">
            <Container @drop="onDrop">
                <Draggable v-for="item in items" :key="item.id">
                    <div class="draggable-item">
                        {{item.data}}
                    </div>
                </Draggable>
            </Container>
        </div>
    </div>
</template>

<script>
import { Container, Draggable } from "vue-dndrop";
import { applyDrag, generateItems } from "../moduls/utils.ts";
export default {
    name: "Simple",
    components: { Container, Draggable },
    data() {
        return {
            items: generateItems(5, i => ({ id: i, data: "Draggable " + i }))
        };
    },
    methods: {
        onDrop(dropResult) {
            this.items = applyDrag(this.items, dropResult);
        }
    }
}
</script>
<style scoped>
.simple-page{
    width: 200px;
    height: 250px;
    background-color: palevioletred;
}
.draggable-item{
    width: 200px;
    padding: 8px;
    background-color: blueviolet;
    margin: 5px;
}
</style>
