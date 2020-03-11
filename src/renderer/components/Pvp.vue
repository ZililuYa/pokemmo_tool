<template>
    <md-content class="md-layout">
        <div class="md-layout-item md-size-50">
            <div class="text-center">
                <md-button class="md-raised md-primary" @click="showDialog=true">进攻宝可梦</md-button>
            </div>
        </div>
        <div class="md-layout-item md-size-50">
            <div class="text-center">
                <md-button class="md-raised md-primary">防守宝可梦</md-button>
            </div>
        </div>
        <div class="md-layout-item md-size-100">
            <div class="text-center">
                <md-button class="md-raised md-accent">战斗计算</md-button>
            </div>
        </div>

        <md-dialog :md-active.sync="showDialog" :style="{width: '80%'}">
            <md-dialog-title>宝可梦列表</md-dialog-title>
            <div class="md-content-dialog">
                <md-field>
                    <label>搜索</label>
                    <md-input v-model="pm"></md-input>
                </md-field>
                <div class="pm">
                    <div class="sprite-icon"
                         v-if="!(pm && JSON.stringify(i).indexOf(pm)===-1)"
                         :class="'sprite-icon-'+i.index"
                         v-for="i in pmList">
                    </div>
                </div>
            </div>
            <md-dialog-actions>
                <md-button class="md-primary" @click="showDialog = false">关闭</md-button>
                <!--                <md-button class="md-primary" @click="showDialog = false">选择</md-button>-->
            </md-dialog-actions>
        </md-dialog>
    </md-content>
</template>

<script>

    export default {
        data() {
            return {
                showDialog: false,
                pm: '',
                pmList: [],
            }
        },
        name: 'home',
        components: {},
        methods: {},
        mounted() {
            // console.log(this.$http)
            this.$http({
                url: '/pokemon/list', lsn: 's1', data: {generation: 1}, callback: (data) => {
                    console.log(data);
                    data = data.map(function(item) {
                        let len = item.index.toString().length;
                        if (len === 1) item.index = '00' + item.index.toString();
                        if (len === 2) item.index = '0' + item.index.toString();
                        return item;
                    })
                    this.pmList = [...this.pmList, ...data];
                }
            })
            this.$http({
                url: '/pokemon/list', lsn: 's2', data: {generation: 2}, callback: (data) => {
                    this.pmList = [...this.pmList, ...data];
                }
            })
            this.$http({
                url: '/pokemon/list', lsn: 's3', data: {generation: 3}, callback: (data) => {
                    this.pmList = [...this.pmList, ...data];
                }
            })
            this.$http({
                url: '/pokemon/list', lsn: 's4', data: {generation: 4}, callback: (data) => {
                    this.pmList = [...this.pmList, ...data];
                }
            })
            this.$http({
                url: '/pokemon/list', lsn: 's5', data: {generation: 5}, callback: (data) => {
                    this.pmList = [...this.pmList, ...data];
                }
            })
        }
    }
</script>

<style lang="less">
    .md-content-dialog {
        padding: 20px;
    }

    .md-layout {
        .md-size-50 {
            background-color: #f9f9f9;
        }

        .text-center {
            text-align: center;
        }
    }

    .md-dialog-container {
        overflow-y: scroll;

        .sprite-icon {
            &:hover {
                background-color: #ff9489;
                border-radius: 5px;
                transition: all 0.5s;
                cursor: pointer;
            }
        }
    }
</style>
