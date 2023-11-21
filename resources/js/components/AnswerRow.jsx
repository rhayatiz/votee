import { ActionIcon, Center, Flex, Text, TextInput } from "@mantine/core";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCursorText } from 'react-icons/bs'
import { ImCheckboxUnchecked, ImRadioUnchecked } from 'react-icons/im'

export default function AnswerRow({type, row,index, idx, removeAnswerHandler, form, questionKey}) {
    const answerTypeIcon = type == 'checkbox'
                        ? <ImCheckboxUnchecked />
                        : type == 'radio'
                            ? <ImRadioUnchecked />
                            : <BsCursorText />

    const answerPlaceholder = type == 'input' ? `Label` : `Reponse ${index + 1}`

    const findQuestionIndex = (key, questions) => {
        return questions.map(function(e) { return e.key; }).indexOf(key)
    }

    const inputChangeHandler = (key, answerKey, e) => {
        const questions = [...form.values.questions]
        // find question in array of questions
        var index = findQuestionIndex(key, questions)
        // questions[index].label = e.target.value
        // find answer in answers array
        var answerIndex = questions[index].answers.map(function(e) { return e.key; }).indexOf(answerKey)
        let answers = [...form.values.questions[index].answers]
        answers[answerIndex].label = e.target.value
        form.setFieldValue(`questions.${index}.answers`, answers)
    }

    return (
        <>
            <Flex>
                <TextInput mt={'xs'} className="flex-1"
                    onChange={(e) => inputChangeHandler(questionKey, row.key, e)}
                    placeholder={answerPlaceholder}
                    icon={answerTypeIcon}
                    withAsterisk
                    />
                {index != 0 && index != 1 &&
                    <Center>
                        <ActionIcon onClick={() => removeAnswerHandler(idx)}>
                           <AiOutlineCloseCircle className="relative top-[2px] left-1 text-red-700" size={18} />
                        </ActionIcon>
                    </Center>
                }
            </Flex>
        </>
    )
}