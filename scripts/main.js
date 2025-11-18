// 测试数据
const testData = {
dimensions: [
{
id: 'childhood',
name: '童年期创伤',
description: '童年时期可能遭受的各种创伤经历',
questions: [
{
id: 1,
text: '在您的童年时期，是否经常受到身体上的惩罚或虐待？',
options: [
{ value: 0, text: '从未有过' },
{ value: 1, text: '偶尔发生' },
{ value: 2, text: '经常发生' },
{ value: 3, text: '总是发生' }
]
},
{
id: 2,
text: '您是否在童年时期遭受过性方面的侵犯或不当接触？',
options: [
{ value: 0, text: '从未有过' },
{ value: 1, text: '发生过一次' },
{ value: 2, text: '发生多次' },
{ value: 3, text: '长期持续' }
]
},
{
id: 3,
text: '您的童年监护人是否经常对您进行情感上的羞辱、贬损或威胁？',
options: [
{ value: 0, text: '从未有过' },
{ value: 1, text: '偶尔发生' },
{ value: 2, text: '经常发生' },
{ value: 3, text: '总是发生' }
]
},
{
id: 4,
text: '您的童年家庭是否经常充满争吵、暴力或不稳定的情况？',
options: [
{ value: 0, text: '从未有过' },
{ value: 1, text: '偶尔发生' },
{ value: 2, text: '经常发生' },
{ value: 3, text: '总是发生' }
]
}
]
},
{
id: 'emotional',
name: '情感创伤',
description: '成人后可能遭受的情感关系创伤',
questions: [
{
id: 5,
text: '您是否曾经经历过伴侣的背叛或欺骗，让您感到深深的伤害？',
options: [
{ value: 0, text: '从未有过' },
{ value: 1, text: '有过一次' },
{ value: 2, text: '有过多次' },
{ value: 3, text: '经常发生' }
]
},
{
id: 6,
text: '您是否曾经被亲密的人严重伤害、羞辱或攻击？',
options: [
{ value: 0, text: '从未有过' },
{ value: 1, text: '有过一次' },
{ value: 2, text: '有过多次' },
{ value: 3, text: '经常发生' }
]
},
{
id: 7,
text: '您是否曾经经历过长期的情感操控或精神虐待？',
options: [
{ value: 0, text: '从未有过' },
{ value: 1, text: '时间较短' },
{ value: 2, text: '时间较长' },
{ value: 3, text: '持续多年' }
]
},
{
id: 8,
text: '您是否曾经被重要的人遗弃或突然失去亲密关系？',
options: [
{ value: 0, text: '从未有过' },
{ value: 1, text: '有过一次' },
{ value: 2, text: '有过多次' },
{ value: 3, text: '经常发生' }
]
}
]
},
{
id: 'interpersonal',
name: '人际关系创伤',
description: '社交和人际关系中的负面经历',
questions: [
{
id: 9,
text: '您是否曾经遭受过严重的校园霸凌或职场欺凌？',
options: [
{ value: 0, text: '从未有过' },
{ value: 1, text: '偶尔发生' },
{ value: 2, text: '经常发生' },
{ value: 3, text: '长期持续' }
]
},
{
id: 10,
text: '您是否曾经在社交场合经常被嘲笑、排斥或边缘化？',
options: [
{ value: 0, text: '从未有过' },
{ value: 1, text: '偶尔发生' },
{ value: 2, text: '经常发生' },
{ value: 3, text: '总是发生' }
]
},
{
id: 11,
text: '您是否曾经因为外貌、身份或背景而遭受歧视或不公平对待？',
options: [
{ value: 0, text: '从未有过' },
{ value: 1, text: '偶尔发生' },
{ value: 2, text: '经常发生' },
{ value: 3, text: '总是发生' }
]
},
{
id: 12,
text: '您是否曾经被迫处于被人际关系孤立或排挤的状态？',
options: [
{ value: 0, text: '从未有过' },
{ value: 1, text: '有过一次' },
{ value: 2, text: '有过多次' },
{ value: 3, text: '长期经历' }
]
}
]
},
{
id: 'acute',
name: '急性创伤',
description: '突发事件造成的创伤体验',
questions: [
{
id: 13,
text: '您是否曾经经历过严重的意外事故或灾难事件？',
options: [
{ value: 0, text: '从未有过' },
{ value: 1, text: '经历过一次' },
{ value: 2, text: '经历过多次' },
{ value: 3, text: '长期影响' }
]
},
{
id: 14,
text: '您是否曾经目击过严重的暴力事件或死亡场面？',
options: [
{ value: 0, text: '从未有过' },
{ value: 1, text: '目击过一次' },
{ value: 2, text: '目击过多次' },
{ value: 3, text: '长期影响' }
]
},
{
id: 15,
text: '您是否曾经被诊断患有严重的身体疾病或经历过生命危险？',
options: [
{ value: 0, text: '从未有过' },
{ value: 1, text: '有过一次' },
{ value: 2, text: '有过多次' },
{ value: 3, text: '慢性疾病' }
]
},
{
id: 16,
text: '您是否曾经经历过重大的经济损失或财务危机？',
options: [
{ value: 0, text: '从未有过' },
{ value: 1, text: '有过一次' },
{ value: 2, text: '有过多次' },
{ value: 3, text: '长期困扰' }
]
}
]
},
{
id: 'chronic',
name: '慢性压力',
description: '长期持续的压力和创伤状态',
questions: [
{
id: 17,
text: '您是否经历过长期的职场压力、工作虐待或失业困难？',
options: [