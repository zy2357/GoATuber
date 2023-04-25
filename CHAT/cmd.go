package main

import (
	"GoTuber/CHAT/bilichat"
	config2 "GoTuber/CHAT/config"
	"GoTuber/MESSAGE"
)

func main() {
	go MESSAGE.GetMessage()
	config2.InitCHATConfig()
	if config2.ChatCfg.Select.Bilibili {
		bilichat.InitBiliChat()
	} else if config2.ChatCfg.Select.YouTube {
		//TODO:以后再说吧
	}
}
