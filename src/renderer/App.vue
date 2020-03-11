<template>
    <div class="page-container">
        <md-app md-mode="reveal">
            <md-app-toolbar class="md-primary">
                <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">{{name}}</span>

                <div class="md-toolbar-section-end">
                    <md-button class="md-icon-button">
                        <md-icon>chat</md-icon>
                    </md-button>
                </div>
            </md-app-toolbar>


            <md-app-drawer :md-active.sync="menuVisible">
                <md-toolbar class="md-transparent" md-elevation="0">PokeMMO游戏工具</md-toolbar>

                <md-list>
                    <md-list-item @click="toPath('/', '首页')">
                        <md-icon>home</md-icon>
                        <span class="md-list-item-text">首页</span>
                    </md-list-item>

                    <md-list-item @click="toPath('/pvp', '招式伤害计算')">
                        <md-icon>restaurant_menu</md-icon>
                        <span class="md-list-item-text">招式伤害计算</span>
                    </md-list-item>

                    <md-list-item @click="toPath('/egg', '孵蛋价格计算')">
                        <md-icon>child_care</md-icon>
                        <span class="md-list-item-text">孵蛋价格计算</span>
                    </md-list-item>

                    <md-list-item @click="toPath('/shu', '树果收益计算')">
                        <md-icon>spa</md-icon>
                        <span class="md-list-item-text">树果收益计算</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>
            <md-app-content>
                <router-view/>
            </md-app-content>
        </md-app>
    </div>
</template>

<style lang="less" scoped>
    .md-app {
        max-height: 100%;
        /*border: 1px solid rgba(#000, .12);*/
        min-height: 100%;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
    }

    // Demo purposes only
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>

<script>
    export default {
        name: 'Reveal',
        data: () => ({
            menuVisible: false,
            name: '首页'
        }),
        methods: {
            toPath(path, name) {
                this.name = name;
                this.$router.push(path);
                this.menuVisible = false;
            }
        }
    }
</script>
