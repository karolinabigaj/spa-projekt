<template>
    <div class="topBar">
        <img id="money" src="../assets/money.svg"/>
    </div>
</template>

<script>
    export default {
        name: 'TopBar',
        props: {
            name: String,
            title: String,
            type: String
        }
    }
</script>

<style>
    .topBar{
        display: flex;
        justify-content: flex-start;
        max-height: 8vh;
        min-height: 8vh;
        width: 100%;
        border-bottom: 1px solid black;
        padding: 0.7vh;
    }
</style>