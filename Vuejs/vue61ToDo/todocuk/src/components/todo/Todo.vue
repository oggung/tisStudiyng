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
        <TodoInput></TodoInput>

        <!-- TodoList -->
        <TodoList></TodoList>

        <!-- TodoFooter -->
        <TodoFooter></TodoFooter>
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

export default {
    /* pdtmc^2w */
    props: [],
    data() {
        return {
            todoItems: [
                { id: 1, todo: "영화보기", done: false },
                { id: 2, todo: "주말 산책", done: true },
                { id: 3, todo: "ES6 학습", done: false },
                { id: 4, todo: "잠실 야구장", done: false }
            ]
        };
    },
    //template: ``,
    methods: {
        addTodo(newTodoItem) {
            // todoItems에서 최대 id 값을 구하는 방법.
            // 방법1. todoItems.reduce() 를 사용하여 newId를 구하는 방법
            // 방법2. 방법2. todoItems.reduce() 를 사용하여 최대 id 값을 찾기
            // 방법3. todoItems.map()과 Math.max()를 사용하여 max id를 찾는 방법

            // newTodoItem 값이 없으면 종료한다. 빈값 호출 방지.
            if (newTodoItem && newTodoItem.trim() === "") {
                return;
            }

            // 방법1. todoItems.reduce() 를 사용하여 최대 id 값을 갖고있는 object 를 찾기
            let maxObj = null;
            if (this.$data.todoItems && this.$data.todoItems.length > 0) {
                // this.$data.todoItems.reduce()를 사용하여 최대 id 값을 갖고있는 element 를 찾는다.
                maxObj = this.$data.todoItems.reduce((prevItem, nextItem) => {
                    return prevItem.id > nextItem.id ? prevItem : nextItem; //
                });
            } else {
                // 빈 배열인 경우
                maxObj = {
                    id: 0
                };
            }
            const newid1 = maxObj.id + 1;

            // 방법2. todoItems.reduce() 를 사용하여 최대 id 값을 찾기
            let maxid = 0;
            if (this.$data.todoItems.length > 0) {
                maxid = this.$data.todoItems.reduce((maxid, obj) => {
                    return maxid >= obj.id ? maxid : obj.id;
                });
            } else {
                // 빈 배열인 경우
                maxid = 0;
            }
            const newid2 = maxid + 1;

            // 방법3. todoItems.map()과 Math.max()를 사용하여 newId를 구하는 방법
            let arrIds = [];
            if (this.$data.todoItems.length > 0) {
                arrIds = this.$data.todoItems.map(function (el) {
                    return el.id;
                });
            }
            const newid3 = Math.max(...arrIds) + 1;

            // 추가할 객체 생성:
            // input에 입력된 값 ==> newTodoItem ;
            const newTodo = {
                id: newid1,
                todo: newTodoItem,
                done: false
            };

            // this.$data.todoItems 에 newTodo를 추가하시오.
            // this.$data.todoItems.push(newTodo);
            // this.$data.todoItems[this.$data.todoItems.length] = newTodo;
            this.$set(
                this.$data.todoItems,
                this.$data.todoItems.length,
                newTodo
            );
        },
        doneToggle(id) {
            // update
            // object array 에서 찾는 방법
            // 1. array.findIndex()을 사용하는 방법
            // 2. array.filter()을 사용하는 방법
            const index = this.$data.todoItems.findIndex(function (item) {
                //return item.id === id;
                if (item.id === id) {
                    return true;
                } else {
                    return false;
                }
            });

            if (index >= 0) {
                //this.$data.todoItems[index].done = !this.$data.todoItems[index].done;
                this.$set(
                    this.$data.todoItems[index],
                    "done",
                    !this.$data.todoItems[index].done
                );
            }
        },
        removeTodo(id) {
            // delete: ;
            // 참조 타입 변수이면 재할당(=== 깊은 복사) 필요.
            // 방법1: array.splice() 을 사용하는 방법
            // 방법2: array.map() 을 사용하는 방법
            this.$data.todoItems.splice(index, 1);
        },
        clearAll() {
            // delete
            //this.$data.todoItems = [];
            this.$set(this.$data, "todoItems", []);
        }
    },
    components: {
        TodoHeader: TodoHeader,
        TodoInput: TodoInput,
        TodoList: TodoList,
        TodoFooter: TodoFooter
    }
};
</script>