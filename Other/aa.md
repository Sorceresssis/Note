# Satus Vs State

State 表达的是形态，而 Status 表达的是从一种形态转换成另一种形态的过程中，那些有显著特征的离散中间值。

举一个旅馆房间的例子，一个房间可以是婚房、普通房、豪华总统房，这些都是用 State 来表达。把一个普通房改造成豪华总统房，这个过程就有设计、材料准备、工人就位、施工、验收等步骤，这个时候就用 Status 来表达。那么，区分点在哪？区分点就在于一个房间当用 State 描述时，它是个彼此独立的枚举值，可以没有前后顺序的在婚房、普通房、豪华总统房之间来回转换。而当使用 Status 时，是存在前后状态依赖关系的一个变化量，不能没有做设计就施工，也不能没施工就验收。

所以，State 和 Status 的核心区别，就是它们的枚举值之间是否有依赖关系，没有依赖关系的用 State，有依赖关系的用 Status。


## pixiv

图片的ID
http://www.pixiv.net/member_illust.php?mode=medium&illust_id=
画师的ID
http://www.pixiv.net/member.php?id=
