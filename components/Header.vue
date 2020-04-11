<template>
    <header>
        <h1> Movie Search App </h1>
        <div class="social-links">
            <i @click="openGithub" class="fa fa-github" title="Check me out on GitHub"></i>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        openGithub(){
            window.open('https://github.com/Tomi-dev?tab=repositories', '_blank');
        }
    }
}
</script>

<style src="../assets/Header.css"></style>