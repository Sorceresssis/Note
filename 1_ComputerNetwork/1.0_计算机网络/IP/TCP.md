# TCP

## TCP 为什么是“三次握手”

1. **确认客户端发送能力** 。
2. **确认服务端接收能力和发送能力** 。
3. **确认客户端接收能力** 。

## TCP 为什么是“四次挥手”

TCP 是全双工通信，双方的数据传输需要分别关闭，即要断开两个方向上的数据流。

### 四次挥手流程：

客户端 → 服务端：发送 FIN，请求关闭（我不发了）

服务端 → 客户端：ACK（我知道你不发了，但我还没发完）

服务端 → 客户端：FIN（我现在也发完了）

客户端 → 服务端：ACK（我知道你也不发了）

## TCP 如何实现可靠传输

| 机制                | 作用                   |
| ------------------- | ---------------------- |
| 三次握手            | 保证连接建立正常       |
| 序列号和确认号      | 保证数据有序和完整     |
| ACK 确认应答        | 保证数据已被接收       |
| 超时重传 & 快速重传 | 避免丢包造成数据丢失   |
| 滑动窗口            | 保证数据按序发送与接收 |
| 流量控制            | 避免接收方被压垮       |
| 拥塞控制            | 避免网络过载丢包       |
| 校验和              | 保证数据正确性         |
| 四次挥手            | 保证数据收尾完整       |
