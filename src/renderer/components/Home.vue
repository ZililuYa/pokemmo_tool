<template>
    <div>
        <h1>欢迎使用PokeMMO游戏工具</h1>
        <div class="img">
            <img src="../assets/img/me.png" width="200" alt="">
        </div>
        <div class="home-button">
            <md-button class="md-raised md-primary" @click="openUrl('http://wpa.qq.com/msgrd?v=3&uin=1029131145&site=qq&menu=yes')">点击联系我（反馈使用问题）</md-button>
            <br>
            <md-button class="md-raised md-primary"
                       @click="openUrl('https://shang.qq.com/wpa/qunwpa?idkey=2d20d6fa07c6f44eca8340d22e0a0849b7854b8aa690c370e63187f2e9613ea2')">
                游戏交流群1 782714459
            </md-button>
            <md-button class="md-raised md-primary"
                       @click="openUrl('https://shang.qq.com/wpa/qunwpa?idkey=c2a4297b1893c5ae71da4830d0ad9c27338c6f9eea101072440243e3c684cbfe')">
                游戏交流群2 723103474
            </md-button>
            <md-button class="md-raised md-primary"
                       @click="openUrl('https://shang.qq.com/wpa/qunwpa?idkey=fe326431e2693261029b6bf8d3615e3948055dfbd659661eb8663148ed6ddb3b')">
                游戏交流群3 705948343
            </md-button>
            <br>
            <md-button class="md-raised md-primary"
                       @click="openUrl('https://shang.qq.com/wpa/qunwpa?idkey=3fe3ad9d0b61c24a0c5a93a080ac8aa6cdd5c752575deabd11c7195b1f0e6c73')">
                公会群 725972278
            </md-button>
            <br>
            <md-button class="md-raised md-primary" @click="openUrl('https://wiki.52poke.com/wiki/%E4%B8%BB%E9%A1%B5')">
                打开神奇宝贝百科
            </md-button>
        </div>
    </div>
</template>

<script>
    const shell = require('electron').shell;
    export default {
        name: 'home',
        components: {},
        methods: {
            openUrl(url) {
                shell.openExternal(url)
            }
        }
    }
</script>

<style>
    .home-button button {
        margin-left: 0 !important;
    }
</style>
