<template>
    <div class="layout vertical full">
        <div class="layout horizontal">
            <button @click="onClickDB">初始化</button>
            <button @click="onClickDBExport">导出</button>
            <button @click="onClickDBInsert">插入</button>
            <button @click="onClickDBDel">删除</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    @Component({
        components: {
        }
    })
    export default class App extends Vue {
        name: string = 'App';
        selectTab = null;

        async created() {
        }

        mounted() {
        }

        onTabClick(tab, event) {

        }

    }

</script>

<style>

</style>
