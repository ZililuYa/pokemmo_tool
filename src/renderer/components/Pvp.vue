<template>
    <md-content class="md-layout md-gutter">
        <div class="md-layout-item md-size-50">
            <div class="text-center">
                <md-button class="md-raised md-primary" @click="showDialog=true">进攻宝可梦</md-button>
            </div>

            <div v-if="attackPm">
                <div class="text-center">
                    <div class="sprite-icon" :class="'sprite-icon-'+attackPm.index"></div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-size-50">
                        <md-field>
                            <label>宝可梦名称</label>
                            <md-input v-model="attackPm.nameZh" :disabled="true"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-50">
                        <md-field md-clearable>
                            <label>等级</label>
                            <md-input v-model="attackPm.level" type="number"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-50">
                        <div class="radio">
                            <md-radio v-model="attackPm.ability" v-if="attackPm.ability1" :value="attackPm.ability1">
                                {{attackPm.ability1}}
                            </md-radio>
                            <md-radio v-model="attackPm.ability" v-if="attackPm.ability2" :value="attackPm.ability2">
                                {{attackPm.ability2}}
                            </md-radio>
                            <md-radio v-model="attackPm.ability" v-if="attackPm.abilityHide"
                                      :value="attackPm.abilityHide">
                                {{attackPm.abilityHide}}
                            </md-radio>
                        </div>
                    </div>
                    <div class="md-layout-item md-size-50">
                        <div class="radio">
                            <md-radio v-model="attackPm.zt" :value="0">
                                无
                            </md-radio>
                            <md-radio v-model="attackPm.zt" :value="1">
                                灼伤
                            </md-radio>
                            <md-radio v-model="attackPm.zt" :value="2">
                                麻痹
                            </md-radio>
                        </div>
                    </div>
                </div>

                <BaseStat :data="attackPm.baseStat"></BaseStat>

            </div>
        </div>
        <div class="md-layout-item md-size-50">
            <div class="text-center">
                <md-button class="md-raised md-primary">防守宝可梦</md-button>
            </div>
        </div>
        <div class="md-layout-item md-size-100">
            <!--            <div class="text-center">-->
            <!--                <md-button class="md-raised md-accent">战斗计算</md-button>-->
            <!--            </div>-->
            <md-table>
                <md-table-row>
                    <!--                    <md-table-head md-numeric>ID</md-table-head>-->
                    <md-table-head>招式名称</md-table-head>
                    <md-table-head :width=100>属性</md-table-head>
                    <md-table-head :width=100>分类</md-table-head>
                    <md-table-head>威力</md-table-head>
                    <md-table-head>伤害</md-table-head>
                    <md-table-head>几次击杀</md-table-head>
                </md-table-row>

                <md-table-row v-for="(i,k) in learnSet">
                    <!--                    <md-table-cell md-numeric>{{k}}</md-table-cell>-->
                    <md-table-cell>{{i.move}}</md-table-cell>
                    <md-table-cell :class="'category'+i.category">{{i.category}}</md-table-cell>
                    <md-table-cell :class="'type'+i.type">{{i.type}}</md-table-cell>
                    <md-table-cell>{{i.power}}</md-table-cell>
                    <md-table-cell>{{damageCalc(i.power)}}</md-table-cell>
                    <md-table-cell>2次</md-table-cell>
                </md-table-row>

            </md-table>

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
                         @click="clickPoke(i.index)"
                         v-for="i in pmList">
                        <md-tooltip md-direction="top">{{i.nameZh}}</md-tooltip>
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

    import BaseStat from './component/BaseStat'

    export default {
        data() {
            return {
                showDialog: false,
                pm: '',
                attackPm: undefined,
                learnSet: [],
                pmList: [],
            }
        },
        name: 'home',
        components: {BaseStat},
        methods: {
            damageCalc(i) {
                return i + ' - 200'
            },
            categoryCalc(list, item, name) {
                if ((item.category === '物理' || item.category === '特殊') && item.type !== '妖精' && !isNaN(item.power) && name.indexOf(item.move) === -1)
                    list.push(item);
                return list;
            },
            clickPoke(index) {
                let len = parseInt(index);
                this.$http({
                    url: '/pokemon/detail', lsn: 'poke' + len, data: {index: len}, callback: (data) => {
                        data = data[0];
                        console.log(data);
                        data.level = 50;
                        data.index = index;
                        data.ability = data.ability1;
                        let nl = Object.keys(data.baseStat), baseStat = data.baseStat;
                        nl.forEach((i) => {
                            baseStat[i + 'Nl'] = 252;
                        });
                        data.baseStat = baseStat;
                        data.zt = 0;
                        // learnSetByBreeding learnSetByLevelingUp learnSetByTechnicalMachine
                        let learnSet = [], learnName = [];
                        if (data.learnSetByBreeding) data.learnSetByBreeding.forEach((item) => {
                            learnSet = this.categoryCalc(learnSet, item, learnName);
                            learnName.push(item.move);
                        });
                        if (data.learnSetByLevelingUp) data.learnSetByLevelingUp.forEach((item) => {
                            learnSet = this.categoryCalc(learnSet, item, learnName);
                            learnName.push(item.move);
                        });
                        if (data.learnSetByTechnicalMachine) data.learnSetByTechnicalMachine.forEach((item) => {
                            learnSet = this.categoryCalc(learnSet, item, learnName);
                            learnName.push(item.move);
                        });
                        console.log(learnSet);
                        this.learnSet = learnSet;
                        this.attackPm = data;
                        // this.$set(this.attackPm, data);
                        this.showDialog = false;
                    }
                })
            }
        },
        mounted() {
            // console.log(this.$http)
            this.clickPoke('006');
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
        }

        .text-center {
            text-align: center;
        }

        .category特殊 {
            background-color: #2266CC !important;
            color: #BBEEFF !important;
        }

        .category物理 {
            background-color: #FF4400 !important;
            color: #FFCC00 !important;
        }

        .type一般 {
            background-color: #BBBBAA !important;
            color: #FFF !important;
        }

        .type火 {
            background-color: #FF4422 !important;
            color: #FFF !important;
        }

        .type水 {
            background-color: #3399FF !important;
            color: #FFF !important;
        }

        .type电 {
            background-color: #FFCC33 !important;
            color: #FFF !important;
        }

        .type草 {
            background-color: #77CC55 !important;
            color: #FFF !important;
        }

        .type毒 {
            background-color: #AA5599 !important;
            color: #FFF !important;
        }

        .type冰 {
            background-color: #77DDFF !important;
            color: #FFF !important;
        }

        .type格斗 {
            background-color: #BB5544 !important;
            color: #FFF !important;
        }

        .type地面 {
            background-color: #DDBB55 !important;
            color: #FFF !important;
        }

        .type飞行 {
            background-color: #6699FF !important;
            color: #FFF !important;
        }

        .type超能力 {
            background-color: #FF5599 !important;
            color: #FFF !important;
        }

        .type虫 {
            background-color: #AABB22 !important;
            color: #FFF !important;
        }

        .type岩石 {
            background-color: #BBAA66 !important;
            color: #FFF !important;
        }

        .type幽灵 {
            background-color: #6666BB !important;
            color: #FFF !important;
        }

        .type恶 {
            background-color: #775544 !important;
            color: #FFF !important;
        }

        .type龙 {
            background-color: #7766EE !important;
            color: #FFF !important;
        }

        .type钢 {
            background-color: #AAAABB !important;
            color: #FFF !important;
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
