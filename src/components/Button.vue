<template>
    <div>
        <button :name="name" :type="type">title</button>
    </div>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            name: String,
            title: String,
            type: String
        }
    }
</script>

<style>

</style>