<template>
    <div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-20">
                <md-field>
                    <label for="first-name">HP</label>
                    <md-input v-model="baseStat.hp" :disabled="true" type="number"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">努力值</label>
                    <md-input v-model="baseStat.hpNl"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field>
                    <label for="last-name">能力值</label>
                    <md-input v-model="baseStat.hp" :disabled="true"/>
                </md-field>


            </div>
            <div class="md-layout-item md-size-40">
                <md-checkbox v-model="baseStat.hpXg" value="1.1">加</md-checkbox>
                <md-checkbox v-model="baseStat.hpXg" value="0.9">减</md-checkbox>
            </div>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-20">
                <md-field>
                    <label for="first-name">攻击</label>
                    <md-input v-model="baseStat.attack" :disabled="true" type="number"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">努力值</label>
                    <md-input v-model="baseStat.attackNl"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field>
                    <label for="last-name">能力值</label>
                    <md-input v-model="baseStat.attack" :disabled="true"/>
                </md-field>
            </div>
            <div class="md-layout-item md-size-40">
                <md-checkbox v-model="baseStat.hpXg" value="1.1">加</md-checkbox>
                <md-checkbox v-model="baseStat.hpXg" value="0.9">减</md-checkbox>
            </div>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-20">
                <md-field>
                    <label for="first-name">防御</label>
                    <md-input v-model="baseStat.defense" :disabled="true" type="number"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">努力值</label>
                    <md-input v-model="baseStat.defenseNl"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field>
                    <label for="last-name">能力值</label>
                    <md-input v-model="baseStat.defense" :disabled="true"/>
                </md-field>
            </div>
            <div class="md-layout-item md-size-40">
                <md-checkbox v-model="baseStat.hpXg" value="1.1">加</md-checkbox>
                <md-checkbox v-model="baseStat.hpXg" value="0.9">减</md-checkbox>
            </div>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-20">
                <md-field>
                    <label for="first-name">特攻</label>
                    <md-input v-model="baseStat.spAttack" :disabled="true" type="number"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">努力值</label>
                    <md-input v-model="baseStat.spAttackNl"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field>
                    <label for="last-name">能力值</label>
                    <md-input v-model="baseStat.spAttack" :disabled="true"/>
                </md-field>
            </div>
            <div class="md-layout-item md-size-40">
                <md-checkbox v-model="baseStat.hpXg" value="1.1">加</md-checkbox>
                <md-checkbox v-model="baseStat.hpXg" value="0.9">减</md-checkbox>
            </div>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-20">
                <md-field>
                    <label for="first-name">特防</label>
                    <md-input v-model="baseStat.spDefense" :disabled="true" type="number"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">努力值</label>
                    <md-input v-model="baseStat.spDefenseNl"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field>
                    <label for="last-name">能力值</label>
                    <md-input v-model="baseStat.spDefense" :disabled="true"/>
                </md-field>
            </div>
            <div class="md-layout-item md-size-40">
                <md-checkbox v-model="baseStat.hpXg" value="1.1">加</md-checkbox>
                <md-checkbox v-model="baseStat.hpXg" value="0.9">减</md-checkbox>
            </div>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-20">
                <md-field>
                    <label for="first-name">速度</label>
                    <md-input v-model="baseStat.speed" :disabled="true" type="number"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field md-clearable>
                    <label for="last-name">努力值</label>
                    <md-input v-model="baseStat.speedNl"/>
                </md-field>
            </div>

            <div class="md-layout-item md-size-20">
                <md-field>
                    <label for="last-name">能力值</label>
                    <md-input v-model="baseStat.speed" :disabled="true"/>
                </md-field>
            </div>
            <div class="md-layout-item md-size-40">
                <md-checkbox v-model="baseStat.hpXg" value="1.1">加</md-checkbox>
                <md-checkbox v-model="baseStat.hpXg" value="0.9">减</md-checkbox>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                baseStat: {}
            }
        },
        props: ['data'],
        methods: {
            init(data) {
                this.baseStat = data;
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

<style scoped>
</style>
