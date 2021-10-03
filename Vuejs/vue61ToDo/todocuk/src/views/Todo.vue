<style scoped>
body {
    text-align: center;
    background-color: #f6f6f8;
}
input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<template>
    <div id="app">
        <!-- TodoHeader -->
        <TodoHeader></TodoHeader>

        <!-- TodoInput -->
        <TodoInput v-on:addTodo="addTodo"></TodoInput>

        <!-- TodoList -->
        <TodoList
            v-bind:todoItems="todoItems"
            v-on:doneToggle="doneToggle"
            v-on:removeTodo="removeTodo"
        ></TodoList>

        <!-- TodoFooter -->
        <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
    </div>
</template>


<!-- vue 플러그인 임포트   -->
<script src="https://unpkg.com/vue@2.6.14/dist/vue.js">
/* vue 플러그인 임포트 */
</script>
<script src="https://unpkg.com/vuex@3.3.0/dist/vuex.js">
/* vuex 플러그인 임포트 */
</script>
<script src="https://unpkg.com/vue-router@3.1.6/dist/vue-router.js">
/* vue 라우터 플러그인 임포트 */
</script>
<script src="https://unpkg.com/axios/dist/axios.min.js">
/* axios 플러그인 임포트 */
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
/* jQuery 플러그인 임포트 */
</script>
<script>
import TodoHeader from "@/components/todo/TodoHeader.vue";
import TodoInput from "@/components/todo/TodoInput.vue";
import TodoList from "@/components/todo/TodoList.vue";
import TodoFooter from "@/components/todo/TodoFooter.vue";

import store from "@/store/index.js"; // <== 추가

export default {
    /* pdtmc^2w */
    data: function () {
        return {
            /*todoItems: [
                { id: 1, todo: "영화보기", done: false },
                { id: 2, todo: "주말 산책", done: true },
                { id: 3, todo: "ES6 학습", done: false },
                { id: 4, todo: "잠실 야구장", done: false }
            ]*/
        };
    },
    //template: ``,
    methods: {
        addTodo: function (newTodoItem) {
            store.dispatch("addTodo", newTodoItem);
            /*// create. store "addTodo" dispatch
            let maxId = 0;
            console.log("==>>>" + this.$data.todoItems.length);
            if (this.$data.todoItems.length > 0) {
                //maxId = this.$data.todoItems.map(item=>item.id).max();
                //maxId = this.$data.todoItems.length;
                maxId = this.$data.todoItems
                    .map((item) => item.id)
                    .reduce((prev, curt) => (prev >= curt ? prev : curt));
            } else {
                maxId = 0;
            }
            const newId = maxId + 1;
            const todo = {
                id: newId,
                //todo:this.$data.newTodoItem,
                todo: newTodoItem,
                done: false
            };
            //this.$set.todoItems
            //this.$data.todoItems[this.$set.todoItems.length] = todo;
            this.$set(
                this.$data.todoItems,
                this.$data.todoItems.length + "",
                todo
            );

            this.$data.newTodoItem = "";*/
        },
        doneToggle: function (id, index) {
            // update. store의 "doneToggle" dispatch
            store.dispatch("doneToggle", id, index);
            /*const findIndex = this.$data.todoItems.findIndex(
                (item, index, array) => {
                    //console.log("ID=>" + id);
                    return item.id === id;
                }
            );
            this.$data.todoItems[findIndex].done =
                !this.$data.todoItems[findIndex].done;*/
        },
        removeTodo: function (id, index) {
            // delete each. store의 "removeTodo" dispatch
            store.dispatch("removeTodo", id, index);
            /*const findIndex = this.$data.todoItems.findIndex(
                (item, index, array) => {
                    return item.id === id;
                }
            );
            this.$data.todoItems.splice(findIndex, 1);
            event.preventDefault();
            event.stopPropagation();*/
            event.preventDefault();
            event.stopPropagation();
        },
        clearAll() {
            // delete all. store의 "clearAll" dispatch
            store.dispatch("clearAll");
            //this.$set(this.$data, "todoItems", []);
        }
    },
    components: {
        TodoHeader: TodoHeader,
        TodoInput: TodoInput,
        TodoList: TodoList,
        TodoFooter: TodoFooter
    },
    computed: {
        /* computed를 사용하여 store의 state를 모니터링하게 작성
         * 동일한 프로퍼티명이 computed 와 data 에 존재하면 안된다. 한쪽에만 있어야 한다
         */
        todoItems: function () {
            return store.getters.todoItems;
        }
    },
    created: function () {
        console.log("created");
        // read. store의 "getTodo" dispatch
    }
};
</script>