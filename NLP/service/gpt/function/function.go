package function

import memory_gpt "GoTuber/MEMORY/NLPmodel/gpt"

//如果要做更多功能，比如搜索网站什么的，这里就容得下的入口。我建议把这里当入口，或者实现一些代码量比较小的函数。
//函数统一：func([]string) string。建议说明切片的每个索引所代表的含义。

// 获取记忆。索引0表示信息。
func getMemory(ms []string) string {
	chat := memory_gpt.Chat{
		Human: ms[0],
	}
	user, text := chat.GetMemory()
	return user + "说" + text
}
