<style scoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
}
.clearAllBtn {
    color: #e20303;
    display: block;
}
</style>

<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="clearAll">Clear All</span>
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
export default {
    /* pdtmc^2w */
    props: [],
    methods: {
        clearAll() {
            this.$emit("clearAll");
        }
    }
};
</script>