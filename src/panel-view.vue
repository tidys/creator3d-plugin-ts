<template>
    <div>
        hello panel {{msg}}
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                msg: 'Hello world'
            }
        },
        created () {
            console.log('ok created')
        }
    }
</script>
<style>

</style>
