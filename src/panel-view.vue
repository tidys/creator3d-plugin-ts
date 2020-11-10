<template>
    <div>
        hello panel {{ msg }}
    </div>
</template>
<script>
export default {
    name: 'panel',
    data: function () {
        return {
            msg: 'Hello world'
        };
    },
    created() {
        console.log('ok created');
        this.testFunc();
    },
    methods: {
        testFunc() {
            console.log('hello im testFunc');
        }
    }
};
</script>
<style>

</style>
