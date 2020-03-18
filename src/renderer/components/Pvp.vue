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
                                中毒
                            </md-radio>
                            <md-radio v-model="attackPm.zt" :value="2">
                                灼伤
                            </md-radio>
                            <md-radio v-model="attackPm.zt" :value="3">
                                麻痹
                            </md-radio>
                        </div>
                    </div>
                    <div class="md-layout-item md-size-100">
                        <md-field>
                            <label for="movie">道具</label>
                            <md-select v-model="attackPm.dj" name="movie" id="movie">
                                <md-option :value="0">无</md-option>
                                <md-option class="icon-pk icon-pk-ico1" value="1">讲究头带</md-option>
                                <md-option class="icon-pk icon-pk-ico2" value="2">讲究眼镜</md-option>
                                <md-option class="icon-pk icon-pk-ico3" value="3">生命宝珠</md-option>
                                <md-option class="icon-pk icon-pk-ico4" value="4">博识眼镜</md-option>
                                <md-option class="icon-pk icon-pk-ico5" value="5">力量头带</md-option>
                                <md-option class="icon-pk icon-pk-ico6" value="6">20%本系道具</md-option>
                            </md-select>
                        </md-field>
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
                                中毒
                            </md-radio>
                            <md-radio v-model="defensivePm.zt" :value="2">
                                灼伤
                            </md-radio>
                            <md-radio v-model="defensivePm.zt" :value="3">
                                麻痹
                            </md-radio>
                        </div>
                    </div>

                    <div class="md-layout-item md-size-100">
                        <md-field>
                            <label for="movie">道具</label>
                            <md-select v-model="defensivePm.dj" name="movie" id="movie">
                                <md-option :value="0">无</md-option>
                                <md-option class="icon-pk icon-pk-ico7" value="进化奇石">进化奇石(最终进化有效)</md-option>
                                <md-option class="icon-pk icon-pk-ico8" value="突击背心">突击背心</md-option>
                            </md-select>
                        </md-field>
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
                    g = Number(nl1.attack);
                    f = Number(nl2.defense);
                    // 灼伤且不是毅力
                    if (pm1.zt == 2 && pm1.ability !== '毅力') g = g / 2;
                    // 大力士 瑜伽之力
                    if (pm1.ability === '大力士' || pm1.ability === '瑜伽之力') g = g * 2;
                    // 毅力 异常状态
                    if (pm1.ability === '毅力' && pm1.zt) g = g * 1.5;
                    // 神器鳞片 异常状态
                    if (pm1.ability === '神奇鳞片' && pm1.zt) f = f * 1.5;
                    // 中毒激升 中毒
                    if (pm1.ability === '中毒激升' && pm1.zt == 1) g = g * 1.5;
                    // 进化奇石
                    if (pm2.dj === '进化奇石') f = f * 1.5;
                } else if (move.category === '特殊' && nl1.spAttack && nl2.spDefense) {
                    g = Number(nl1.spAttack);
                    f = Number(nl2.spDefense);
                    // 精神冲击 取防御值
                    if (move.move === '精神冲击') f = nl2.defense;
                    // 突击背心 进化奇石
                    if (pm2.dj === '突击背心' || pm2.dj === '进化奇石') f = f * 1.5;
                } else {
                    return '数据不全';
                }
                let power = Number(move.power);
                // 祸不单行 翻倍
                if (move.move === '祸不单行' && pm2.zt) power = power * 2;
                // 硬撑 翻倍
                if (move.move === '硬撑' && pm1.zt) power = power * 2;
                // 毒液冲击 翻倍
                if (move.move === '毒液冲击' && pm2.zt == 1) power = power * 2;

                let num = ((2 * pm1.level + 10) / 250) * (g / f) * power + 2;
                let min = this.calcBonus(num, move, pm1, pm2, 0.85);
                let max = this.calcBonus(num, move, pm1, pm2, 1);

                let jx1 = Math.ceil(nl2.hp / min);
                let jx2 = Math.ceil(nl2.hp / max);

                if (min === 0 || max === 0) return `${pm1.nameZh}使用${move.move}，对${pm2.nameZh}没有任何效果~`;

                return `${pm1.nameZh}使用${move.move}，造成伤害 ${min} - ${max}，${pm2.nameZh}血量${nl2.hp}，${jx2} - ${jx1} 次击杀！`
            },
            calcBonus(num, move, pm1, pm2, rem) {
                // 加成=属性一致加成×属性相克造成的倍率×击中要害的倍率×其他加成×随机数（随机数∈[0.85，1]）

                let c1 = 1,     // 属性一致性
                    c2 = 1,     // 属性相克倍率
                    c3 = rem,   // 随机数
                    c4 = 1;     // 道具带来的加成
                if (move.type === pm1.type1 || move.type === pm1.type2) c1 = 1.5;
                c2 = this.calcType(move.type, pm2);
                if (pm1.dj == 1 && move.category === '物理') c4 = 1.5;
                if (pm1.dj == 2 && move.category === '特殊') c4 = 1.5;
                if (pm1.dj == 3) c4 = 1.3;
                if (pm1.dj == 4 && move.category === '特殊') c4 = 1.1;
                if (pm1.dj == 5 && move.category === '物理') c4 = 1.1;
                if (pm1.dj == 6) c4 = 1.2;
                return Math.floor(num * c1 * c2 * c3 * c4);
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

    .icon-pk {
        background-size: auto 85%;
        background-position: 16px center;
        background-repeat: no-repeat;

        .md-list-item-text {
            text-align: right;
            display: inline-block !important;
        }

        &.icon-pk-ico1 {
            background-image: url("https://s1.52poke.wiki/wiki/7/7d/Dream_%E8%AE%B2%E7%A9%B6%E5%A4%B4%E5%B8%A6_Sprite.png");
        }

        &.icon-pk-ico2 {
            background-image: url("https://s1.52poke.wiki/wiki/6/6f/Dream_%E8%AE%B2%E7%A9%B6%E7%9C%BC%E9%95%9C_Sprite.png");
        }

        &.icon-pk-ico3 {
            background-image: url("https://s1.52poke.wiki/wiki/3/39/Dream_%E7%94%9F%E5%91%BD%E5%AE%9D%E7%8F%A0_Sprite.png");
        }

        &.icon-pk-ico4 {
            background-image: url("https://s1.52poke.wiki/wiki/4/48/Dream_%E5%8D%9A%E8%AF%86%E7%9C%BC%E9%95%9C_Sprite.png");
        }

        &.icon-pk-ico5 {
            background-image: url("https://s1.52poke.wiki/wiki/d/d0/Dream_%E5%8A%9B%E9%87%8F%E5%A4%B4%E5%B8%A6_Sprite.png");
        }

        &.icon-pk-ico6 {
            background-image: url("https://s1.52poke.wiki/wiki/2/22/Dream_%E8%BE%BE%E4%BA%BA%E5%B8%A6_Sprite.png");
        }

        &.icon-pk-ico7 {
            background-image: url("https://s1.52poke.wiki/wiki/7/75/Dream_%E8%BF%9B%E5%8C%96%E5%A5%87%E7%9F%B3_Sprite.png");
        }

        &.icon-pk-ico8 {
            background-image: url("https://s1.52poke.wiki/wiki/c/c0/Dream_%E7%AA%81%E5%87%BB%E8%83%8C%E5%BF%83_Sprite.png");
        }
    }
</style>
