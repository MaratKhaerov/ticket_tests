package helpers

import "math/rand"

var failedInterviewMsgList = []string{
	"К сожалению, мы не можем предложить вам позицию на этот раз, но благодарим за интерес к нашей компании",
	"После тщательного рассмотрения мы решили, что не сможем продвигаться дальше с вашей кандидатурой. Спасибо за участие",
	"Ваши навыки впечатляют, но на данный момент мы ищем кандидата с другим опытом. Благодарим за понимание",
	"Спасибо за время, проведенное с нами на собеседовании. К сожалению, мы выбрали другого кандидата",
	"Ваш опыт замечателен, однако мы решили отдать предпочтение кандидату, чьи навыки лучше соответствуют нашим текущим потребностям",
	"После внимательного рассмотрения всех кандидатов, мы вынуждены сообщить, что не сможем сделать вам предложение",
	"Мы ценим ваше желание работать у нас, но на данном этапе ваша кандидатура не подходит. Желаем успехов в будущих начинаниях",
	"Благодарим за интерес к нашей компании и время, потраченное на собеседование. К сожалению, мы должны сообщить вам об отказе",
	"После оценки всех кандидатур, мы пришли к выводу, что не можем предложить вам работу в нашей компании",
}

func GetReviewFailMsg() string {
	idx := rand.Intn(len(failedInterviewMsgList))
	return failedInterviewMsgList[idx]
}