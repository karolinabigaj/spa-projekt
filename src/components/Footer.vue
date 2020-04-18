<template>
    <footer>
        <span>
            Icons made by
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
            from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </span>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        props: {
            name: String,
            title: String,
            type: String
        }
    }
</script>

<style>
    footer{
        max-height: 8vh;
        min-height: 8vh;
        width: 100%;
        display: flex !important;
        justify-content: flex-start;
        align-items: center;
        border-top: 1px solid black;
    }
    span{
        padding: 3vw;
    }
    a {
        color: #71C9CE !important;
    }
</style>