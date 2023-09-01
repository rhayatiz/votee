import { ActionIcon, Box, Button, Group, Stack, Text, TextInput } from "@mantine/core"
import { randomId } from "@mantine/hooks"
import { find, findIndex, pullAt } from "lodash"
import { useState } from "react"
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai"
import QuestionRow from "./QuestionRow"

export default function PollSimpleForm(props) {
    const [questions, setQuestions] = useState([{
        id: 1,
        key: randomId()
    }])

    const AddQuestionButton = () => <Group position="right" mt="sm">
        <Button color="dark" className="bg-zinc-700 text-white" size="sm" onClick={() => addQuestion()} >
            <Text mr={"sm"} >Ajouter question</Text>
            <AiOutlinePlusCircle color="white" size={18} />
        </Button>
    </Group>

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
                {questions.map((row, idx) => <QuestionRow key={row.key} row={row} idx={idx+1} removeQuestionHandler={removeQuestion}  />)}
                <AddQuestionButton/>
            </Box>
        </>
    )
}