<template>
    <div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-10">
                <md-field>
                    <!--                    <label for="first-name">HP</label>-->
                    <!--                    <md-input v-model="baseStat.hp" :disabled="true" type="number"/>-->
                    {{baseStat.hp}}
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">HP个体</label>
                    <md-input v-model="baseStat.hpGt"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">努力值</label>
                    <md-input v-model="baseStat.hpNl"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-10">
                <md-field class="nl-field">
                    {{hpCalc(baseStat.hp, baseStat.hpGt, baseStat.hpNl, 'hp')}}
                </md-field>
            </div>
            <div class="md-layout-item md-size-40">
                <!--                <md-checkbox v-model="baseStat.hpXg" value="1.1">加</md-checkbox>-->
                <!--                <md-checkbox v-model="baseStat.hpXg" value="0.9">减</md-checkbox>-->
            </div>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-10">
                <md-field>
                    {{baseStat.attack}}
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">攻击个体</label>
                    <md-input v-model="baseStat.attackGt"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">努力值</label>
                    <md-input v-model="baseStat.attackNl"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-10">
                <md-field class="nl-field">
                    {{qtCalc(baseStat.attack,baseStat.attackGt, baseStat.attackNl,baseStat.attackXg, 'attack')}}
                </md-field>
            </div>
            <div class="md-layout-item md-size-40">
                <md-checkbox v-model="baseStat.attackXg" value="1.1">加</md-checkbox>
                <md-checkbox v-model="baseStat.attackXg" value="0.9">减</md-checkbox>
            </div>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-10">
                <md-field>
                    {{baseStat.defense}}
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">防御个体</label>
                    <md-input v-model="baseStat.defenseGt"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">努力值</label>
                    <md-input v-model="baseStat.defenseNl"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-10">
                <md-field class="nl-field">
                    {{qtCalc(baseStat.defense,baseStat.defenseGt, baseStat.defenseNl,baseStat.defenseXg, 'defense')}}
                </md-field>
            </div>
            <div class="md-layout-item md-size-40">
                <md-checkbox v-model="baseStat.defenseXg" value="1.1">加</md-checkbox>
                <md-checkbox v-model="baseStat.defenseXg" value="0.9">减</md-checkbox>
            </div>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-10">
                <md-field>
                    {{baseStat.spAttack}}
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">特攻个体</label>
                    <md-input v-model="baseStat.spAttackGt"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">努力值</label>
                    <md-input v-model="baseStat.spAttackNl"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-10">
                <md-field class="nl-field">
                    {{qtCalc(baseStat.spAttack,baseStat.spAttackGt, baseStat.spAttackNl,baseStat.spAttackXg,
                    'spAttack')}}
                </md-field>
            </div>
            <div class="md-layout-item md-size-40">
                <md-checkbox v-model="baseStat.spAttackXg" value="1.1">加</md-checkbox>
                <md-checkbox v-model="baseStat.spAttackXg" value="0.9">减</md-checkbox>
            </div>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-10">
                <md-field>
                    {{baseStat.spDefense}}
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">特防个体</label>
                    <md-input v-model="baseStat.spDefenseGt"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">努力值</label>
                    <md-input v-model="baseStat.spDefenseNl"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-10">
                <md-field class="nl-field">
                    {{qtCalc(baseStat.spDefense,baseStat.spDefenseGt, baseStat.spDefenseNl,baseStat.spDefenseXg,
                    'spDefense')}}
                </md-field>
            </div>
            <div class="md-layout-item md-size-40">
                <md-checkbox v-model="baseStat.spDefenseXg" value="1.1">加</md-checkbox>
                <md-checkbox v-model="baseStat.spDefenseXg" value="0.9">减</md-checkbox>
            </div>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-10">
                <md-field>
                    {{baseStat.speed}}
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">速度个体</label>
                    <md-input v-model="baseStat.speedGt"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">努力值</label>
                    <md-input v-model="baseStat.speedNl"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-10">
                <md-field class="nl-field">
                    {{qtCalc(baseStat.speed,baseStat.speedGt, baseStat.speedNl,baseStat.speedXg, 'speed')}}
                </md-field>
            </div>
            <div class="md-layout-item md-size-40">
                <md-checkbox v-model="baseStat.speedXg" value="1.1">加</md-checkbox>
                <md-checkbox v-model="baseStat.speedXg" value="0.9">减</md-checkbox>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                baseStat: {},
                calcData: {},
            }
        },
        props: ['data', 'level', 'setData'],
        methods: {
            init(data) {
                this.baseStat = data;
            },
            hpCalc(zz, gt, nl, name) {
                if (!gt || !nl || !this.level) return '*';
                let level = parseInt(this.level);
                gt = parseInt(gt);
                nl = parseInt(nl);
                let num = Math.floor((zz * 2 + gt + (nl / 4)) * level / 100 + 10 + level);
                let calcData = this.calcData;
                calcData[name] = num;
                this.setData(calcData);
                this.calcData = calcData;
                return num;
            },
            qtCalc(zz, gt, nl, xg, name) {
                if (!gt || !nl || !this.level) return '*';
                let level = parseInt(this.level);
                gt = parseInt(gt);
                nl = parseInt(nl);
                if (!xg) xg = 1;
                let num = Math.floor(((zz * 2 + gt + (nl / 4)) * level / 100 + 5) * xg);
                let calcData = this.calcData;
                calcData[name] = num;
                this.setData(calcData);
                this.calcData = calcData;
                return num;
            }
        },
        mounted() {
            this.init(this.$props.data);
        },
        watch: {
            data(data) {
                this.init(data);
            }
        }

    }
</script>

<style>
    .nl-field {
        color: #ff9489;
        font-weight: bold;
    }
</style>
