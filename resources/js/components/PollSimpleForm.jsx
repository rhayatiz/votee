import { ActionIcon, Box, Button, Group, Stack, Text, TextInput } from "@mantine/core"
import { find, findIndex, pullAt } from "lodash"
import { useState } from "react"
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai"
import QuestionRow from "./QuestionRow"
import { randomId } from "@mantine/hooks"


export default function PollSimpleForm(props) {
    const form = props.form

    const AddQuestionButton = () => <Group position="right" mt="sm">
        <Button color="dark" className="bg-zinc-700 text-white" size="sm" onClick={() => addQuestion()} >
            <Text mr={"sm"} >Ajouter question</Text>
            <AiOutlinePlusCircle color="white" size={18} />
        </Button>
    </Group>

    const addQuestion = () => {
        let nextId = 1
        let questions = form.values.questions
        if (questions.length > 0) nextId = questions[questions.length - 1].id + 1
        let newQuestion = {
            id: nextId,
            key: randomId(),
            type: 'radio',
            label: '',
            answers: [
                { id: 1, key: randomId(), label: '' },
                { id: 2, key: randomId(), label: '' },
            ]
        }
        form.setFieldValue('questions', [...questions, newQuestion])
    }

    const removeQuestion = (id) => {
        form.setFieldValue('questions', form.values.questions.filter((question) => question.id != id))
    }

    return (
        <>
            <Box className="rounded-lg border border-red-700 mt-11">
                {form.values.questions.map((row, idx) => 
                    <QuestionRow key={row.key} row={row} idx={idx+1} questionIndex={idx}
                        removeQuestionHandler={removeQuestion} form={props.form} />)}
                <AddQuestionButton/>
            </Box>
        </>
    )
}