function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
var lists = [
  {
    name: '七夕情人节',
    url: 'http://b197.photo.store.qq.com/psb?/V139cQJB0axwVi/h1o.lKn6BGgC*0*WRWFVHfU5vz0NZ9b0mPeIKruliuU!/b/dMUAAAAAAAAA&bo=OASgBQAAAAAAAL8!&rf=viewer_311',
    des: '渠首芳韵花艺位于淅川县九重镇交通路腾飞二店入口处，是淅川县九重镇唯一一家以优质的服务回报客户为宗旨的鲜花店。店铺地址：九重镇腾飞二店入口处'
  },
  {
    name: '浪漫花店',
    url: 'http://b191.photo.store.qq.com/psb?/V139cQJB0axwVi/YoyIssETadaYm73NHEMQ5Ld3AhwdUyOdaMcm678J7ic!/b/dL8AAAAAAAAA&bo=NgRUBQAAAAAAAEU!&rf=viewer_311',
    des: '渠首芳韵花艺位于淅川县九重镇交通路腾飞二店入口处，是淅川县九重镇唯一一家以优质的服务回报客户为宗旨的鲜花店。店铺地址：九重镇腾飞二店入口处'
  },
  {
    name: '店铺概况',
    url: 'http://b305.photo.store.qq.com/psb?/V139cQJB0axwVi/1Xkx.CQHEjSl*ala6OlG3zU3vFBZrHCO7PJlF87fRjg!/b/dDEBAAAAAAAA&bo=gAeAAwAAAAAAACI!&rf=viewer_311',
    des: '渠首芳韵花艺位于淅川县九重镇交通路腾飞二店入口处，是淅川县九重镇唯一一家以优质的服务回报客户为宗旨的鲜花店。店铺地址：九重镇腾飞二店入口处'
  },
  {
    name: '婚车装饰',
    url: 'http://b149.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/86Ir6wOeNzeV3IIxRxELnR8HsSS0wVE7Zz11UUKY*M4!/b/dJUAAAAAAAAA&bo=OASgBQAAAAARB6k!&rf=viewer_4',
    des: '珍稀品种，产地法国，1859年培育诞生。深紫色，花瓣在15至20片左右。以“太阳王”路易十四的名字命名，象征尊贵与权威。路易十四玫瑰是蔷薇属（Rosa）下的玫瑰种，具有观赏性和商业价值。可加工成精油，他那独特的香味是它所独有的。是拿破仑之妻约瑟芬皇后的最爱，四季开花，强香，开出来会呈黑色。'
  },
  {
    name: '开业大吉',
    url: 'http://b264.photo.store.qq.com/psb?/V139cQJB0axwVi/FoTOSzfebQ.k*7AS9*wUA1iSt3tC5198wJdSzmW.ocE!/b/dAgBAAAAAAAA&bo=gAc4BAAAAAAAAJ0!&rf=viewer_311',
    des: '店铺开业用花。'
  },
  {
    name: '情侣表白',
    url: 'http://b302.photo.store.qq.com/psb?/V139cQJB0axwVi/4toxGaJFoVoqOzcMJxrxkhav59uD5Xi24cdNOtt6QJI!/b/dC4BAAAAAAAA&bo=OASgBQAAAAAAAL8!&rf=viewer_311',
    des: '情侣表白，结婚纪念日。'
  },
  {
    name: '气球立柱',
    url: 'http://b339.photo.store.qq.com/psb?/V139cQJB0axwVi/rVE5uEPaPyaOr6ZUxPm4YZpItCCGqZAugl5P4T8JZz4!/b/dFMBAAAAAAAA&bo=BgRmAgAAAAAAAEA!&rf=viewer_311',
    des: '创意无限…… 宝宝宴最火热的气球立柱.'
  },
  {
    name: '天、地、空爆',
    url: 'http://b339.photo.store.qq.com/psb?/V139cQJB0axwVi/v46wRrI.4PRGO2vNUl.cFHHY4mbzoAND63OtfPBWgJ0!/b/dFMBAAAAAAAA&bo=OASgBQAAAAAAAL8!&rf=viewer_311',
    des: '结婚为什么要用天爆，地爆，空爆？因为爆破的瞬间真的很美很美每一个浪漫的婚礼都值得拥有这美丽的瞬间。'
  },
  {
    name: '气球婚礼',
    url: 'http://b302.photo.store.qq.com/psb?/V139cQJB0axwVi/JEdMnLWBaCHKK4MXv2LIwReKVB8.vCY7e*f5QBtr6vk!/b/dC4BAAAAAAAA&bo=VAY4BAAAAAAAAEg!&rf=viewer_311',
    des: '爆破的瞬间真的很美很美每一个浪漫的婚礼都值得拥有这美丽的瞬间'
  },
  {
    name: '亲人逝世',
    url: 'http://b304.photo.store.qq.com/psb?/V139cQJB0axwVi/2IU*cUVNCfczc3Mb4uP2RXcdBqiCfMi7SlHxb1vKaV4!/b/dDABAAAAAAAA&bo=NgSeBAAAAAARJ7g!&rf=viewer_4',
    des: '送老人家最后一程，祝老人家一路走好。'
  },
  {
    name: '紫罗兰',
    url: 'http://b310.photo.store.qq.com/psb?/V139cQJB0axwVi/S1ezee3xY1jEsVcdFF6N76YqjX99C5iVUlaN.Lu9ViU!/b/dDYBAAAAAAAA&bo=OASiBQAAAAAAAL0!&rf=viewer_311',
    des: '珍稀品种'
  },
  {
    name: '路易十四',
    url: 'http://b305.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/*f1v.xn1jKDUWKO36XI7PB13PGFoe1GVjMwupYnzJdo!/b/dDEBAAAAAAAA&bo=wAMABQAAAAARF.Y!&rf=viewer_4',
    des:'珍稀品种，产地法国，1859年培育诞生。深紫色，花瓣在15至20片左右。以“太阳王”路易十四的名字命名，象征尊贵与权威。路易十四玫瑰是蔷薇属（Rosa）下的玫瑰种，具有观赏性和商业价值。可加工成精油，他那独特的香味是它所独有的。是拿破仑之妻约瑟芬皇后的最爱，四季开花，强香，开出来会呈黑色。'
  },
  {
    name: '蓝色妖姬',
    url: 'http://b307.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/*uBeHgh8LnUVaT4mHSlZgCxU9QyTjgRt0NiSCCKz74c!/b/dDMBAAAAAAAA&bo=ygHKAQAAAAARFyA!&rf=viewer_4',
    des: '即玫瑰花（学名：Rosa rugosa）是蔷薇科蔷薇属植物，在日常生活中是蔷薇属一系列花大艳丽的栽培品种的统称。玫瑰果实可食，无糖，富含维他命C，常用于香草茶、果酱、果冻、果汁和面包等，亦有瑞典汤（Nyponsoppa）、蜂蜜酒（Rhodomel）。玫瑰原产是中国。在古时的汉语，“玫瑰”一词原意是指红色美玉。后来，一种野生蔷薇属植物Rosa rugosa，因果实又大又红艳，因而以“玫瑰”作为称呼。'
  },
  {
    name: '黑色玫瑰',
    url: 'http://b305.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/vehgos5YlWH4mGpx.4dlSPAFqwD8DC6LCV1P.4TSUiQ!/b/dDEBAAAAAAAA&bo=OASgBQAAAAARJ4k!&rf=viewer_4',
    des: '即玫瑰花（学名：Rosa rugosa）是蔷薇科蔷薇属植物，在日常生活中是蔷薇属一系列花大艳丽的栽培品种的统称。玫瑰果实可食，无糖，富含维他命C，常用于香草茶、果酱、果冻、果汁和面包等，亦有瑞典汤（Nyponsoppa）、蜂蜜酒（Rhodomel）。玫瑰原产是中国。在古时的汉语，“玫瑰”一词原意是指红色美玉。后来，一种野生蔷薇属植物Rosa rugosa，因果实又大又红艳，因而以“玫瑰”作为称呼。'
  },
  {
    name: '鲜花5',
    url: 'http://b306.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/9c4SpquvkbkcjPp.2Z*KJzCrl..X9r96pVDmRWpVsYg!/b/dDIBAAAAAAAA&bo=wAMABQAAAAARF.Y!&rf=viewer_4',
    des: '即玫瑰花（学名：Rosa rugosa）是蔷薇科蔷薇属植物，在日常生活中是蔷薇属一系列花大艳丽的栽培品种的统称。玫瑰果实可食，无糖，富含维他命C，常用于香草茶、果酱、果冻、果汁和面包等，亦有瑞典汤（Nyponsoppa）、蜂蜜酒（Rhodomel）。玫瑰原产是中国。在古时的汉语，“玫瑰”一词原意是指红色美玉。后来，一种野生蔷薇属植物Rosa rugosa，因果实又大又红艳，因而以“玫瑰”作为称呼。'
  },
  {
    name: '鲜花5',
    url: 'http://b305.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/MlyXcc4aEf66.Cdx2zDYejBU8vtOGjCfwxD0IX1gnPM!/b/dDEBAAAAAAAA&bo=OASgBQAAAAARJ4k!&rf=viewer_4',
    des: '保加利亚国花。代表花语：爱上你是我今生最大的幸福，想你是我最甜蜜的痛苦，和你在一起是我的骄傲，没有你的我就像一只迷失了航线的船。寓意为：我只钟情你一个。另外求婚的男士手捧香槟玫瑰给女方的意思是：我足以与另外你相配。香槟玫瑰还具有一定的食用价值。但这种玫瑰唯一不好的地方就是家庭生长存活率并不大'
  },
  {
    name: 'danxinwu',
    url: 'http://b307.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/2TADieMIkFNCBoCew8e0HEowAcVjj1fWozEWXqqwiV4!/b/dDMBAAAAAAAA&bo=OASgBQAAAAARJ4k!&rf=viewer_4',
    des: ''
  },
  {
    name: '黄色玫瑰',
    url: 'http://b306.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/7QLVF21qGOHMq7wek2hvZHjqZVu6SMn99cIuDMmgnRY!/b/dDIBAAAAAAAA&bo=OASgBQAAAAARF7k!&rf=viewer_4',
    des: '保加利亚国花。代表花语：爱上你是我今生最大的幸福，想你是我最甜蜜的痛苦，和你在一起是我的骄傲，没有你的我就像一只迷失了航线的船。寓意为：我只钟情你一个。另外求婚的男士手捧香槟玫瑰给女方的意思是：我足以与另外你相配。香槟玫瑰还具有一定的食用价值。但这种玫瑰唯一不好的地方就是家庭生长存活率并不大'
  },
  {
    name: '白玫瑰',
    url: 'http://b307.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/HyE9fP8NRUqG88J.19kGemV7WMK5nEPTBb7A.dWAzQU!/b/dDMBAAAAAAAA&bo=OASgBQAAAAARJ4k!&rf=viewer_4',
    des: '保加利亚国花。代表花语：爱上你是我今生最大的幸福，想你是我最甜蜜的痛苦，和你在一起是我的骄傲，没有你的我就像一只迷失了航线的船。寓意为：我只钟情你一个。另外求婚的男士手捧香槟玫瑰给女方的意思是：我足以与另外你相配。香槟玫瑰还具有一定的食用价值。但这种玫瑰唯一不好的地方就是家庭生长存活率并不大'
  },
  {
    name: '香槟玫瑰',
    url: 'http://b304.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/uwkB.2wSxC5P4DnfNmYGLb4yCaHy7wEFx3iKvsQG*l4!/b/dDABAAAAAAAA&bo=WgQ2BAAAAAARF0w!&rf=viewer_4',
    des: '保加利亚国花。代表花语：爱上你是我今生最大的幸福，想你是我最甜蜜的痛苦，和你在一起是我的骄傲，没有你的我就像一只迷失了航线的船。寓意为：我只钟情你一个。另外求婚的男士手捧香槟玫瑰给女方的意思是：我足以与另外你相配。香槟玫瑰还具有一定的食用价值。但这种玫瑰唯一不好的地方就是家庭生长存活率并不大'
  },
  {
    name: '刺玫花',
    url: 'http://b323.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/22UFvFf6UuZzVrA09c*fTrQG*g32owVKLFSPOcZfyMY!/b/dEMBAAAAAAAA&bo=WAIgAwAAAAARF1k!&rf=viewer_4',
    des: '最早来自荷兰是一种加工花卉。它是用一种对人体无害的染色剂和助染剂调合成着色剂，等白玫瑰快到成熟期时，将其切下来放进盛有着色剂的容色里，让花像吸水一样，将色剂吸入进行染色。据花卉专家介绍，目前世界上极少有自然生长的蓝色玫瑰花，现在市场上出售的“蓝色妖姬”都是人工染色后的产物。比较正规的“蓝色妖姬”是在花卉的成长期开始染色，颜色能均匀地附着在花瓣上，看上去比较自然；部分商贩直接将普通的白玫瑰花采摘后染成蓝色，颜色不自然，也容易掉色。主要在我国华北、西北和西南日本、朝鲜等地均有分布，在其他许多国家也被广泛种植。'
  },
]

module.exports = {
  formatTime: formatTime,
  lists: lists
}
