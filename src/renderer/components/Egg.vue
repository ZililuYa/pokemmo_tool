<template>
    <div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item">

                <md-field>
                    <label>素材单价</label>
                    <md-input v-model="pm" type="number"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item">
                <md-field>
                    <label>不变石单价</label>
                    <md-input v-model="bb" type="number"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item">
                <md-field>
                    <label>遗传道具单价</label>
                    <md-input v-model="xq" type="number"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item">
                <md-field>
                    <label>指定性别单价</label>
                    <md-input v-model="xb" type="number" ></md-input>
                </md-field>
            </div>
        </div>
        <md-table>
            <md-table-row>
                <md-table-head>描述</md-table-head>
                <md-table-head>最多花费</md-table-head>
                <md-table-head>说明</md-table-head>
            </md-table-row>

            <md-table-row v-for="(i, k) in data">
                <md-table-cell>{{i.name}}</md-table-cell>
                <md-table-cell><b>{{calc({index: k}).zNum}}</b></md-table-cell>
                <md-table-cell>{{calcExp({index: k})}}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>
<script>
    export default {
        name: 'hello',
        data() {
            return {
                pm: 10000,
                bb: 7000,
                xq: 10000,
                xb: 5000,
                columns: [
                    {
                        title: '描述',
                        key: 'name'
                    },
                    {
                        title: '最多花费',
                        key: 'age',
                        render: (h, params) => {
                            let p = this.calc(params)
                            return h('div', [
                                h('strong', p.zNum)
                            ])
                        }
                    },
                    {
                        title: '说明',
                        render: (h, params) => {
                            let p = this.calcExp(params)
                            return h('div', [
                                h('strong', p)
                            ])
                        }
                    }
                ],
                data: [{
                    name: '1V'
                }, {
                    name: '2V'
                }, {
                    name: '3V'
                }, {
                    name: '4V'
                }, {
                    name: '5V'
                }, {
                    name: '6V'
                }, {
                    name: '1V[对性格]'
                }, {
                    name: '2V[对性格]'
                }, {
                    name: '3V[对性格]'
                }, {
                    name: '4V[对性格]'
                }, {
                    name: '5V[对性格]'
                }, {
                    name: '6V[对性格]'
                }]
            }
        },
        mounted() {
        },
        methods: {
            calcExp(row) {
                if (row.index <= 5) {
                    if (row.index === 0) {
                        return '一共需要 ' + (row.index + 1) + ' 个素材'
                    }
                    let vNum = this.calcNumber(row.index)
                    let vP = this.calcVp(vNum)
//          return zNum / 1000 + ' K'
                    return '一共需要 ' + vNum + ' 个素材、 ' + vP + ' 个遗传道具、指定性别 ' + (vNum - 1) + ' 次'
                } else {
                    let i = row.index - 6
                    let t = row.index - 5
                    let dNum = 0
                    let dP = 0
//          let dPm = 0
                    while (i >= 0) {
                        let obj = this.calc({index: i})
                        dNum += obj.vNum
                        dP += obj.vP
//            dPm += obj.zNum
                        i = i - 1
                    }
//          dPm = dPm + (t * this.xq) + (t * this.bb)
                    return '一共需要 ' + dNum + ' 个素材、 ' + (dP + t - 1) + ' 个遗传道具、' + t + '个不变石、指定性别 ' + (dNum - 1) + ' 次'
                }
            },
            calc(row) {
                if (row.index <= 5) {
                    if (row.index === 0) {
                        return {vNum: 1, vP: 1, zNum: this.pm}
                    }
                    let vNum = this.calcNumber(row.index)
                    let vP = this.calcVp(vNum)
                    let zNum = vP * this.xq + vNum * this.pm + ((vNum - 1) * this.xb)
//          return zNum / 1000 + ' K'
                    return {vNum, vP, zNum}
                } else {
                    let i = row.index - 6
                    let t = row.index - 5
                    let dNum = 0
                    let dP = 0
                    let dPm = 0
                    while (i >= 0) {
                        let obj = this.calc({index: i})
                        dNum += parseInt(obj.vNum)
                        dP += parseInt(obj.vP)
                        dPm += parseInt(obj.zNum)
                        i = i - 1
                    }
                    dPm = parseInt(dPm) + parseInt(t * this.xq) + parseInt(t * this.bb)
                    return {vNum: dNum, vP: dP, zNum: dPm}
                }
//        return '6'
            },
            calcNumber(num) {
                return Math.pow(2, num)
            },
            calcVp(num) {
                if (num / 2 < 2) {
                    return 2
                }
                return num + this.calcVp(num / 2)
            }
        }
    }
</script>

<style>
</style>
