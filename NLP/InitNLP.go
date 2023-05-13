package NLP

import (
	"GoTuber/NLP/config"
	"GoTuber/NLP/service"
	"GoTuber/NLP/service/gpt"
)

func InitNLP() {
	service.HandelMsg.IsUse = false
	go service.ChooseMessage()
	service.ReadToGetFlag <- true
	go service.HandelMessage()
	config.InitNLPConfig()
	if config.NLPCfg.Nlp.UseGPT == true {
		config.InitGPTConfig()
		gpt.InitRole()
	}
}
