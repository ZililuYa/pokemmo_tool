// 返回属性id
export function isProperty(type) {
    switch (type) {
        case '物理':
            return 91;
        case '特殊':
            return 92;
        case '变化':
            return 93;
        case '一般':
            return 1;
        case '飞行':
            return 2;
        case '火':
            return 3;
        case '超能力':
            return 4;
        case '水':
            return 5;
        case '虫':
            return 6;
        case '电':
            return 7;
        case '岩石':
            return 8;
        case '草':
            return 9;
        case '幽灵':
            return 10;
        case '冰':
            return 11;
        case '龙':
            return 12;
        case '格斗':
            return 13;
        case '恶':
            return 14;
        case '毒':
            return 15;
        case '钢':
            return 16;
        case '地面':
            return 17;
        case '妖精':
            return 18;
        default:
            return 20;
    }
}

// 计算个体
export function restrainCalc(list, index) {

    // 计算数值拔群
    function calc(i, num) {
        if (num === 0) {
            list[i] = 0;
        } else if (num === 1) {
            list[i] = list[i] * 2;
        } else if (num === -1) {
            list[i] = list[i] / 2;
        }
    }

    switch (index) {
        case 1: //一般
            calc(12, 1);
            calc(9, 0);
            return list;
        case 2: // 飞行
            calc(7, 1);
            calc(10, 1);
            calc(6, 1);
            calc(12, -1);
            calc(5, -1);
            calc(8, -1);
            calc(16, 0);
            return list;
        case 3: // 火
            calc(16, 1);
            calc(4, 1);
            calc(7, 1);
            calc(2, -1);
            calc(8, -1);
            calc(10, -1);
            calc(5, -1);
            calc(15, -1);
            calc(17, -1);
            return list;
        case 4: // 超能力
            calc(5, 1);
            calc(9, 1);
            calc(13, 1);
            calc(12, -1);
            calc(3, -1);
            return list;
        case 5: //水
            calc(6, 1);
            calc(8, 1);
            calc(2, -1);
            calc(4, -1);
            calc(10, -1);
            calc(15, -1);
            return list;
        case 6: // 虫
            calc(1, 1);
            calc(2, 1);
            calc(7, 1);
            calc(8, -1);
            calc(12, -1);
            calc(16, -1);
            return list;
        case 7: // 电
            calc(16, 1);
            calc(6, -1);
            calc(1, -1);
            calc(15, -1);
            return list;
        case 8: // 岩石
            calc(4, 1);
            calc(8, 1);
            calc(12, 1);
            calc(15, 1);
            calc(16, 1);
            calc(0, -1);
            calc(1, -1);
            calc(2, -1);
            calc(14, -1);
            return list;
        case 9: //  草
            calc(2, 1);
            calc(10, 1);
            calc(1, 1);
            calc(5, 1);
            calc(14, 1);
            calc(8, -1);
            calc(4, -1);
            calc(6, -1);
            calc(16, -1);
            return list;
        case 10:  // 幽灵
            calc(9, 1);
            calc(13, 1);
            calc(0, 0);
            calc(12, 0);
            calc(5, -1);
            calc(14, -1);
            return list;
        case 11: // 冰
            calc(2, 1);
            calc(7, 1);
            calc(12, 1);
            calc(15, 1);
            calc(10, -1);
            return list;
        case 12: // 龙
            calc(10, 1);
            calc(11, 1);
            calc(17, 1);
            calc(2, -1);
            calc(4, -1);
            calc(6, -1);
            calc(8, -1);
            return list;
        case 13: // 格斗
            calc(1, 1);
            calc(3, 1);
            calc(17, 1);
            calc(5, -1);
            calc(7, -1);
            calc(13, -1);
            return list;
        case 14:  // 恶
            calc(12, 1);
            calc(5, 1);
            calc(17, 1);
            calc(9, -1);
            calc(13, -1);
            calc(3, 0);
            return list;
        case 15: // 毒
            calc(16, 1);
            calc(3, 1);
            calc(14, -1);
            calc(5, -1);
            calc(8, -1);
            calc(12, -1);
            calc(17, -1);
            return list;
        case 16:  // 钢
            calc(2, 1);
            calc(12, 1);
            calc(17, -1);
            calc(0, -1);
            calc(8, -1);
            calc(1, -1);
            calc(10, -1);
            calc(3, -1);
            calc(5, -1);
            calc(7, -1);
            calc(11, -1);
            calc(15, -1);
            calc(17, -1);
            calc(14, 0);
            return list;
        case 17: // 地面
            calc(4, 1);
            calc(8, 1);
            calc(10, 1);
            calc(14, -1);
            calc(7, -1);
            calc(6, 0);
            return list;
        case 18: // 妖
            calc(14, 1);
            calc(15, 1);
            calc(5, -1);
            calc(12, -1);
            calc(13, -1);
            calc(11, 0);
            return list;
        default:
            return list;
    }
}
