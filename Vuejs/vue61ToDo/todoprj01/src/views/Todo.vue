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
        >
        </TodoList>

        <!-- TodoFooter -->
        <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
    </div>
</template>

<script>
import TodoHeader from "../components/todo/TodoHeader.vue";
import TodoInput from "../components/todo/TodoInput.vue";
import TodoList from "../components/todo/TodoList.vue";
import TodoFooter from "../components/todo/TodoFooter.vue";

import store from "../store/index.js";

export default {
    /* pdtmc^2w */
    props: [],
    data: function () {
        /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
        return {
            // todoItems: [
            //     { id: 1, todo: "영화보기", done: false },
            //     { id: 2, todo: "주말 산책", done: true },
            //     { id: 3, todo: "ES6 학습", done: false },
            //     { id: 4, todo: "잠실 야구장", done: false }
            // ]
        };
    },
    //template: ``,
    methods: {
        /* 이벤트 핸들러 등록 + 일반 함수 */
        clearAll() {
            // this.$data.todoItems = [];
            // this.$set(this.$data, "todoItems", []);
            store.dispatch("clearAll");
        },
        addTodo(newTodoItem /* 자식 컴포넌트에서 보내는 매개변수 */) {
            /*
            // todoItems에서 최대 id 값을 구하는 방법.
            // 방법1. todoItems.map()과 todoItems.reduce()를 사용하여 max id를 찾는 방법
            // 방법2. todoItems.reduce() 를 사용하여 newId를 구하는 방법
            // 방법3. todoItems.reduce() 를 사용하여 최대 id 값을 찾기
            let maxid = 0;
            if (this.$data.todoItems.length > 0) {
                maxid = this.$data.todoItems
                    .map((item) => item.id)
                    .reduce((prev, curt) => (prev >= curt ? prev : curt));
            } else {
                maxid = 0;
            }
            const newid = maxid + 1;

            const todo = {
                id: newid,
                todo: newTodoItem,
                done: false
            };

            // this.$data.todoItems.push( todo );
            // this.$data.todoItems[ this.$data.todoItems.length] = todo;
            this.$set(
                this.$data.todoItems,
                this.$data.todoItems.length + "",
                todo
            );

            // add 후에 input 태그에 남아있는 입력값 지우기
            // this.$data.newTodoItem = '';
            */
            // store.dispatch("액면명", 넘길값);
            store.dispatch("addTodo", newTodoItem);
        },
        doneToggle(id /* 자식 컴포넌트에서 보내는 매개변수 */) {
            /*
            // id를 이용해서 배열의 인덱스 찾기 ==> findIndex
            // done 값을 반전시킨다. this.$data.todoItems[findIndex].done = !this.$data.todoItems[findIndex].done;
            const findIndex = this.$data.todoItems.findIndex(
                (item) => id === item.id
            );
            this.$data.todoItems[findIndex].done = !this.$data.todoItems[findIndex].done;
            */
            store.dispatch("doneToggle", id);
        },
        removeTodo(id) {
            /*
            // id 값을 이용해서 배열의 index를 찾으시오. ==> findIndex() 사용
            const findIndex = this.$data.todoItems.findIndex((item) => {
                return item.id === id;
            });
            // 찾은 인덱스를 이용하여 this.$data.todoItems 에서 삭제하시오.
            this.$data.todoItems.splice(findIndex, 1);
            */
            store.dispatch("removeTodo", id);

            // 이벤트 취소. 버블링 방지
            event.stopPropagation();
            event.preventDefault();
        }
    },
    components: {
        /* 전역 컴포넌트는 등록하지 않는다. */
        /* 지역 컴포넌트나 파일 컴포넌트이면 등록해야 한다 . 예시) "태그명" : 컴포넌트명 */
        TodoHeader: TodoHeader,
        TodoInput: TodoInput,
        TodoList: TodoList,
        TodoFooter: TodoFooter
    },
    computed: {
        /* 자동처리 + 동기식. 메서드로 작성. return 필수. */
        todoItems() {
            return store.getters.todoItems;
        }
    },
    watch: {
        /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
    },
    mounted: function () {
        console.log("mounted");
    },
    updated: function () {
        console.log("updated");
    }
};
</script>