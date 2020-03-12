<template>
    <md-content class="md-layout md-gutter">
        <div class="md-layout-item md-size-50">
            <div class="text-center">
                <md-button class="md-raised md-primary" @click="selectPm=1,showDialog=true">进攻宝可梦</md-button>
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

                <BaseStat :data="attackPm.baseStat" :setData="setData1" :level="attackPm.level"></BaseStat>
            </div>
        </div>
        <div class="md-layout-item md-size-50">
            <div class="text-center">
                <md-button class="md-raised md-primary" @click="selectPm=2,showDialog=true">防守宝可梦</md-button>
            </div>


            <div v-if="defensivePm">
                <div class="text-center">
                    <div class="sprite-icon" :class="'sprite-icon-'+defensivePm.index"></div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-size-50">
                        <md-field>
                            <label>宝可梦名称</label>
                            <md-input v-model="defensivePm.nameZh" :disabled="true"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-50">
                        <md-field md-clearable>
                            <label>等级</label>
                            <md-input v-model="defensivePm.level" type="number"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-50">
                        <div class="radio">
                            <md-radio v-model="defensivePm.ability" v-if="defensivePm.ability1"
                                      :value="defensivePm.ability1">
                                {{defensivePm.ability1}}
                            </md-radio>
                            <md-radio v-model="defensivePm.ability" v-if="defensivePm.ability2"
                                      :value="defensivePm.ability2">
                                {{defensivePm.ability2}}
                            </md-radio>
                            <md-radio v-model="defensivePm.ability" v-if="defensivePm.abilityHide"
                                      :value="defensivePm.abilityHide">
                                {{defensivePm.abilityHide}}
                            </md-radio>
                        </div>
                    </div>
                    <div class="md-layout-item md-size-50">
                        <div class="radio">
                            <md-radio v-model="defensivePm.zt" :value="0">
                                无
                            </md-radio>
                            <md-radio v-model="defensivePm.zt" :value="1">
                                灼伤
                            </md-radio>
                            <md-radio v-model="defensivePm.zt" :value="2">
                                麻痹
                            </md-radio>
                        </div>
                    </div>
                </div>

                <BaseStat :data="defensivePm.baseStat" :setData="setData2" :level="defensivePm.level"></BaseStat>

            </div>
        </div>
        <div class="md-layout-item md-size-100" v-if="attackPm">
            <!--            <div class="text-center">-->
            <!--                <md-button class="md-raised md-accent">战斗计算</md-button>-->
            <!--            </div>-->
            <h3>{{attackPm.nameZh}}会的招式</h3>
            <md-table v-if="learnSet.length">
                <md-table-row>
                    <!--                    <md-table-head md-numeric>ID</md-table-head>-->
                    <md-table-head>招式名称</md-table-head>
                    <md-table-head :width=100>属性</md-table-head>
                    <md-table-head :width=100>分类</md-table-head>
                    <md-table-head>威力</md-table-head>
                    <md-table-head>伤害计算</md-table-head>
                    <!--                    <md-table-head>几次击杀</md-table-head>-->
                </md-table-row>

                <md-table-row v-for="i in learnSet">
                    <!--                    <md-table-cell md-numeric>{{k}}</md-table-cell>-->
                    <md-table-cell>{{i.move}}</md-table-cell>
                    <md-table-cell :class="'category'+i.category">{{i.category}}</md-table-cell>
                    <md-table-cell :class="'type'+i.type">{{i.type}}</md-table-cell>
                    <md-table-cell>{{i.power}}</md-table-cell>
                    <md-table-cell>{{damageCalc(i, attackPm, defensivePm, atBsPm, deBsPm)}}</md-table-cell>
                    <!--                    <md-table-cell>2次</md-table-cell>-->
                </md-table-row>

            </md-table>

        </div>

        <div class="md-layout-item md-size-100">
            <!--            <div class="text-center">-->
            <!--                <md-button class="md-raised md-accent">战斗计算</md-button>-->
            <!--            </div>-->

            <md-field>
                <label>招式搜索</label>
                <md-input v-model="search" @keyup.enter="searchEvent(), searchName=search"></md-input>
                <md-icon>search</md-icon>
            </md-field>
            <md-table v-if="sLearnSet.length">
                <md-table-row>
                    <!--                    <md-table-head md-numeric>ID</md-table-head>-->
                    <md-table-head>招式名称</md-table-head>
                    <md-table-head :width=100>属性</md-table-head>
                    <md-table-head :width=100>分类</md-table-head>
                    <md-table-head>威力</md-table-head>
                    <md-table-head>伤害计算</md-table-head>
                    <!--                    <md-table-head>几次击杀</md-table-head>-->
                </md-table-row>

                <md-table-row v-for="i in sLearnSet">
                    <!--                    <md-table-cell md-numeric>{{k}}</md-table-cell>-->
                    <md-table-cell>{{i.move}}</md-table-cell>
                    <md-table-cell :class="'category'+i.category">{{i.category}}</md-table-cell>
                    <md-table-cell :class="'type'+i.type">{{i.type}}</md-table-cell>
                    <md-table-cell>{{i.power}}</md-table-cell>
                    <md-table-cell>{{damageCalc(i, attackPm, defensivePm, atBsPm, deBsPm)}}</md-table-cell>
                    <!--                    <md-table-cell>2次</md-table-cell>-->
                </md-table-row>

            </md-table>

            <div class="text-center" v-if="!sLearnSet.length">暂无{{searchName}}相关招式~</div>

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
    import {restrainCalc, isProperty} from '../assets/js/lib'

    export default {
        data() {
            return {
                showDialog: false,
                selectPm: 1,
                search: '',
                pm: '',
                attackPm: undefined,
                defensivePm: undefined,
                atBsPm: undefined,
                deBsPm: undefined,
                searchName: '',
                learnSet: [],
                sLearnSet: [],
                pmList: [],
            }
        },
        name: 'home',
        components: {BaseStat},
        methods: {
            searchEvent() {
                if (this.search) {
                    this.sLearnSet = [];
                    this.$http({
                        url: '/move/detail', data: {nameZh: this.search}, callback: (data) => {
                            let sLearnSet = [];
                            data.forEach((item) => {
                                item.move = item.nameZh;
                                sLearnSet = this.categoryCalc(sLearnSet, item, []);
                            });
                            this.sLearnSet = sLearnSet;
                        }
                    })
                }
            },
            setData1(data) {
                this.atBsPm = new Object(data);
                this.$forceUpdate();
                // this.$set(this, 'atBsPm', data);
            },
            setData2(data) {
                this.deBsPm = data;
                this.$forceUpdate();
            },
            damageCalc(move, pm1, pm2, nl1, nl2) {
                if (!move || !pm1 || !pm2 || !nl1 || !nl2) return '数据不全';
                let g, f;
                if (move.category === '物理' && nl1.attack && nl2.defense) {
                    g = nl1.attack;
                    f = nl2.defense;
                } else if (move.category === '特殊' && nl1.spAttack && nl2.spDefense) {
                    g = nl1.spAttack;
                    f = nl2.spDefense;
                } else {
                    return '数据不全';
                }
                let num = ((2 * pm1.level + 10) / 250) * (g / f) * move.power + 2;

                let min = this.calcBonus(num, move, pm1, pm2, 0.85);
                let max = this.calcBonus(num, move, pm1, pm2, 1);

                let jx1 = Math.ceil(nl2.hp / min);
                let jx2 = Math.ceil(nl2.hp / max);

                if (min === 0 || max === 0) return '没有任何效果~';

                return `${pm1.nameZh}使用${move.move}，造成伤害 ${min} - ${max}，${pm2.nameZh}血量${nl2.hp}，${jx2} - ${jx1} 次击杀！`
            },
            calcBonus(num, move, pm1, pm2, rem) {
                // 加成=属性一致加成×属性相克造成的倍率×击中要害的倍率×其他加成×随机数（随机数∈[0.85，1]）

                let c1 = 1,     // 属性一致性
                    c2 = 1,     // 属性相克倍率
                    c3 = rem;   // 随机数
                if (move.type === pm1.type1 || move.type === pm1.type2) c1 = 1.5;
                c2 = this.calcType(move.type, pm2);
                return Math.floor(num * c1 * c2 * c3);
            },
            calcType(type, pm) {
                let list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
                let index = isProperty(type);
                if (pm.type1) list = restrainCalc(list, isProperty(pm.type1));
                if (pm.type2) list = restrainCalc(list, isProperty(pm.type2));
                return list[index - 1];
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
                        data.level = 50;
                        data.index = index;
                        data.ability = data.ability1;
                        let nl = Object.keys(data.baseStat), baseStat = data.baseStat;
                        nl.forEach((i) => {
                            baseStat[i + 'Nl'] = 252;
                            baseStat[i + 'Gt'] = 31;
                            baseStat[i + 'Xg'] = 0;
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
                        if (this.selectPm === 1) {
                            this.learnSet = learnSet;
                            this.attackPm = data;
                        } else {
                            this.defensivePm = data;
                        }
                        // this.$set(this.attackPm, data);
                        this.showDialog = false;
                    }
                })
            }
        },
        mounted() {
            // this.clickPoke('006');
            this.$http({
                url: '/pokemon/list', lsn: 's1', data: {generation: 1}, callback: (data) => {
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
