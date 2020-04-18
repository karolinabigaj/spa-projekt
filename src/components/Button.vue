<template>
    <div>
        <b-button :name="name" variant="info" class="standardButton" v-on:click="onclick">{{title}}</b-button>
    </div>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            name: String,
            title: String,
            type: String,
            onclick: Function
        }
    }
</script>

<style>
    .standardButton {
        margin: 40px 0;
        width: 300px;
        height: 150px;
        font-size: 40px !important;
        border-radius: 10px !important;
    }

</style>