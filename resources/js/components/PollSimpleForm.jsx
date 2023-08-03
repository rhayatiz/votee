import { ActionIcon, Box, Group, Text, TextInput } from "@mantine/core"
import { randomId } from "@mantine/hooks"
import { find, findIndex, pullAt } from "lodash"
import { useState } from "react"
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai"

export default function PollSimpleForm(props) {
    const [questions, setQuestions] = useState([{
        id: 1,
        key: randomId()
    }])

    const QuestionRow = ({row, idx}) => (
        <Box className="mt-1">
            <TextInput 
                label={`Question ${idx}`}
                placeholder="Question"
                rightSection={<ActionIcon onClick={() => removeQuestion(row.id)} variant="transparent" color="red"><AiOutlineCloseCircle size={16} /></ActionIcon>}
                />
        </Box>
    )

    const addQuestion = () => {
        let nextId = 1
        if (questions.length > 0) nextId = questions[questions.length - 1].id + 1
        let newQuestion = {
            key: randomId(),
            id: nextId
        }
        setQuestions([...questions, newQuestion])
    }

    const removeQuestion = (id) => {
        setQuestions(questions.filter((question) => question.id != id))
    }

    return (
        <>
            <Box className="rounded-lg border border-red-700">
                {questions.map((row, idx) => <QuestionRow key={row.key} row={row} idx={idx+1} />)}
                <Group position="right">
                    <ActionIcon variant="transparent" mt={"sm"} onClick={() => addQuestion()} size={'lg'}>
                        <AiOutlinePlusCircle color="black" size={23} /></ActionIcon>
                </Group>
            </Box>
        </>
    )
}