<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
li.checked {
    background: #bbb;
    color: #fff;
    text-decoration: line-through;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}

.list-enter-active,
.list-leave-active {
    transition: all 1s;
}
.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>

<template>
    <section>
        <transition-group name="list" tag="ul">
            <li
                v-for="(todoItem, index) in todoItems"
                v-bind:key="todoItem.id"
                v-bind:class="checked(todoItem.done)"
                v-on:click="doneToggle(todoItem.id, index)"
            >
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                {{ todoItem.todo }}
                <span
                    class="removeBtn"
                    type="button"
                    v-on:click="removeTodo(todoItem.id, index)"
                >
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>
    </section>
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
export default {
    /* pdtmc^2w */
    props: ["todoItems"],
    methods: {
        checked(done) {
            if (done) {
                return "checked"; // 또는 {checked: true}
            } else {
                return null; // 또는 {checked: false}
            }
        },
        doneToggle(id) {
            this.$emit("doneToggle", id);
        },
        removeTodo(id) {
            this.$emit("removeTodo", id);
        }
    }
};
</script>