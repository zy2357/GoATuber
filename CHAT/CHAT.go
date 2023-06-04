package CHAT

import (
	"GoTuber/CHAT/bilichat"
	config2 "GoTuber/CHAT/config"
	"GoTuber/CHAT/direct_input"
)

func InitChat() {
	config2.InitCHATConfig()
	if config2.ChatCfg.Select.Bilibili {
		bilichat.InitBiliChat()
	} else if config2.ChatCfg.Select.YouTube {
		//TODO:以后再说吧
	} else if config2.ChatCfg.Select.Direct {
		direct_input.GetMessage()
	}
}
