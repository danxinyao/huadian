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
    name: '鲜花1',
    url: 'http://b358.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/8GDJAx7l4aD8pMQNvRgyoep88N0X7xk.GaM0ClvXoMc!/b/dGYBAAAAAAAA&bo=uAG2AQAAAAARBz4!&rf=viewer_4'
  },
  {
    name: '鲜花2',
    url: 'http://b305.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/*f1v.xn1jKDUWKO36XI7PB13PGFoe1GVjMwupYnzJdo!/b/dDEBAAAAAAAA&bo=wAMABQAAAAARF.Y!&rf=viewer_4'
  },
  {
    name: '鲜花3',
    url: 'http://b307.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/*uBeHgh8LnUVaT4mHSlZgCxU9QyTjgRt0NiSCCKz74c!/b/dDMBAAAAAAAA&bo=ygHKAQAAAAARFyA!&rf=viewer_4'
  },
  {
    name: '鲜花4',
    url: 'http://b305.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/vehgos5YlWH4mGpx.4dlSPAFqwD8DC6LCV1P.4TSUiQ!/b/dDEBAAAAAAAA&bo=OASgBQAAAAARJ4k!&rf=viewer_4'
  },
  {
    name: '鲜花5',
    url: 'http://b323.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/BZv6Cok8zSK*GwyPJ2gc6L205XAan6DtFpoZe04b9Sk!/b/dEMBAAAAAAAA&bo=uAG2AQAAAAARFy4!&rf=viewer_4'
  },
  {
    name: '鲜花5',
    url: 'http://b306.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/9c4SpquvkbkcjPp.2Z*KJzCrl..X9r96pVDmRWpVsYg!/b/dDIBAAAAAAAA&bo=wAMABQAAAAARF.Y!&rf=viewer_4'
  },
  {
    name: '鲜花5',
    url: 'http://b321.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/fVIL2XNs7xPgYw3sKp4V7NjdhsfkfqsQlJQtSWzBW6E!/b/dEEBAAAAAAAA&bo=vAK8AgAAAAARFyA!&rf=viewer_4'
  },
  {
    name: '鲜花5',
    url: 'http://b305.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/MlyXcc4aEf66.Cdx2zDYejBU8vtOGjCfwxD0IX1gnPM!/b/dDEBAAAAAAAA&bo=OASgBQAAAAARJ4k!&rf=viewer_4'
  },
  {
    name: 'danxinwu',
    url: 'http://b307.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/2TADieMIkFNCBoCew8e0HEowAcVjj1fWozEWXqqwiV4!/b/dDMBAAAAAAAA&bo=OASgBQAAAAARJ4k!&rf=viewer_4'
  },
  {
    name: 'danxinwu',
    url: 'http://b306.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/7QLVF21qGOHMq7wek2hvZHjqZVu6SMn99cIuDMmgnRY!/b/dDIBAAAAAAAA&bo=OASgBQAAAAARF7k!&rf=viewer_4'
  },
  {
    name: 'danxinwu',
    url: 'http://b307.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/HyE9fP8NRUqG88J.19kGemV7WMK5nEPTBb7A.dWAzQU!/b/dDMBAAAAAAAA&bo=OASgBQAAAAARJ4k!&rf=viewer_4'
  },
  {
    name: 'danxinwu',
    url: 'http://b304.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/uwkB.2wSxC5P4DnfNmYGLb4yCaHy7wEFx3iKvsQG*l4!/b/dDABAAAAAAAA&bo=WgQ2BAAAAAARF0w!&rf=viewer_4'
  },
  {
    name: 'danxinwu',
    url: 'http://b323.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/22UFvFf6UuZzVrA09c*fTrQG*g32owVKLFSPOcZfyMY!/b/dEMBAAAAAAAA&bo=WAIgAwAAAAARF1k!&rf=viewer_4'
  },
]

module.exports = {
  formatTime: formatTime,
  lists: lists
}
