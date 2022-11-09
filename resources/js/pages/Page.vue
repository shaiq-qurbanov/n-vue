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
<p v-for="item in items" :key="item.id">{{item.id}}........{{item.data}}</p>
        <container @drop="onDrop">
            <Draggable v-for="arrX in arrayX" :key="arrX.id">
                <div class="draggable-item">
                    {{arrX.data}}
                </div>
            </Draggable>
        </container>
    </div>
    <div class="comp" id="comp"></div>

</template>

<script>
import { Container, Draggable } from "vue-dndrop";
import { applyDrag, generateItems,createArray } from "../moduls/utils.ts";
export default {
    name: "Simple",
    components: { Container, Draggable },
    data() {
        return {
            items: generateItems(5 , i => ({ id: i, data: "Draggable " + i })),
            arrayX: createArray(3,k => ({ id:k, data: 'arrayX--->' + k})),
        };
    },
    mounted() {
        // this.comp()
    },
    methods: {
        onDrop(dropResult) {
            this.items = applyDrag(this.items, dropResult);
            this.array = applyDrag(this.arrayX, dropResult);

            console.log('items ->',this.items[0]);
            console.log('generateItems',generateItems(5, x=> ({ id:x,data: 'dragable'+x, name: x+32})))
            console.log('generate',generateItems(5, x => x*2));
            let sum = 0;
             this.items.forEach(function (item) {
                 sum +=item.id;
            })

            console.log(sum)
            const array = [1, 22, 3, 44, 5];
            let res = 0;
            let zet=[...array];
           // const  zet = z.splice(2,0,100);
           console.log('zet',zet);
           const names = ['bb','nn','mm','vv','cc'];
           console.log('names',names);
           let strings = [...names];
           console.log('strings',strings)

            for (let elem of array) {
                res += elem;
            }
            console.log('res',res);

            //filter()
            const newArr = array.filter((number)=>number>5);
            console.log('newArr',newArr);


            const arrNew = array.filter((index,array)=>index%2 !==0);
            console.log('arrNew',arrNew);


           //reduce
            const result = array.reduce(function (sum,elem) {
                     return sum + elem
            },0);
            console.log('reduce', result);
            const arr = [1, -2, -3, 4, 5, -6];
            const arrSum = arr.reduce(function(sum, el){
              if(el >= 0){
                  return sum + el
              }else {
                  return sum
              }
            },0);
            console.log('arrSum',arrSum)

            let map = arr.map(function (elem,index) {
                return elem * index

            });
            console.log('map',map)

            //splice
            const x = array.splice(2,1)[0];
            console.log('x',x);
            const y = array.splice(2,0,'alma','armud');
            console.log('newArray', array);
            //function
            let counter = 1;

            function increaseCounter(value) {
                // counter = value + 1;
                return value + 1
            }

            increaseCounter(counter);
            console.log('counter',counter);
            console.log( increaseCounter(counter));

            let values = [1, 2, 3, 4, 5];
            let sumOfValues = 0;

            for (let i = 0; i < values.length; i++) {
               sumOfValues += values[i];
            }
            console.log('x',sumOfValues);

            //functions;
            const upperCase = str => str.toUpperCase();
            const exclaim = str => `${str}!`;
            const repeat = str => `${str} `.repeat(3);

            const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

            const withСompose = compose(
                repeat,
                exclaim,
                upperCase
            );

            console.log(withСompose("I love coding"));
           const add=(x,y)=>{
              return x+y
            }
            console.log('add',add(3,4));
           const add2 = (x) => {
               return (y) => {
                   return x+y
               }
           }
          const addWithThree = add2(3);
           console.log(addWithThree(4))
           console.log(addWithThree(9))
           console.log(addWithThree(17));

           const fun1 = (x) => x+3;
           const fun2 = (x) => 2*x+3;
           const fun3 = (x) => x**2;
           const comp = (...fns)=>x=>fns.reduceRight((acc,fn)=>fn(acc),x);
           const func = comp(
               fun3,
               fun2,
               fun1
           );
           console.log(func(1))
        },
        // comp(){
        //     let arr2 = ['alma', 'armud','heyva','nar'];
        //    const myFunction = () =>{
        //        const upCase = arr2.map((elem)=> elem.toUpperCase())
        //        console.log('arr2',upCase)
        //    }
        //    const inGet = ()=>{
        //        let mnm = document.getElementById('comp');
        //        mnm.innerHTML='hello'
        //    }
        //    myFunction();
        //    inGet()
        //
        // }


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
  .comp{
      width: 300px;
      height: 100px;
      background-color: #4f89a4;
  }
</style>
