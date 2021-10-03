<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>

            <template>
    <div id="app">
        <h2>{{ msg }}</h2>
        <child1 />
        <child2 />
    </div>
</template>

            <script>
import Child1 from "./components/Child1.vue";
import Child2 from "./components/Child2.vue";

export default {
    props: [],
    data: function () {
        return {
            msg: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세."
        };
    },
    components: {
        child1: Child1,
        child2: Child2
    }
};
</script>