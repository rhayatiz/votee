import { ActionIcon, Box, Button, Flex, Group, Stack, Text, TextInput } from "@mantine/core";
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai"
import QuestionType from "./QuestionType"
import { useState } from "react";
import { randomId } from "@mantine/hooks";
import AnswerRow from "./AnswerRow";

export default function QuestionRow({row, idx, removeQuestionHandler, form}) {
    const [answerType, setAnswerType] = useState('radio')
    const [answers, setAnswers] = useState([
        { id: 1, key: randomId() },
        { id: 2, key: randomId() },
    ])

    const typeChangeHandler = (type) => {
        if (type == 'input') {
            setAnswers([{ id: 1, key: randomId() }])
        } else {
            setAnswers([
                { id: 1, key: randomId() },
                { id: 2, key: randomId() },
            ])
        }
        setAnswerType(type)
    }

    const inputChangeHandler = (key, e) => {
        const questions = [...form.values.questions]
        var index = questions.map(function(e) { return e.key; }).indexOf(key)
        questions[index].label = e.target.value
        form.setFieldValue('questions', questions)
    }

    const addAnswer = () => {
        let nextId = 1
        if (answers.length > 0) nextId = answers[answers.length - 1].id + 1
        let newAnswer = {
            key: randomId(),
            id: nextId
        }
        setAnswers([...answers, newAnswer])
    }

    const removeAnswer = (id) => {
        console.log('removing answer', id)
        console.log('answers', answers)
        setAnswers(answers.filter((answer) => answer.id != id))
    }

    const AddAnswerRow = () => <Group position="right" mt="sm">
        <Button color="dark" className="bg-zinc-500 hover:bg-zinc-600 text-white" size="xs" onClick={() => addAnswer()} >
            <Text fz={"xs"} mr={"xs"}>Ajouter réponse</Text>
            <AiOutlinePlusCircle color="white" size={16} />
        </Button>
    </Group>

    return (
        <Box className="mt-2 shadow-md bg-gray-50 px-4 py-2 rounded-lg relative">
            <Group position="right" pos={'absolute'} className="top-1 right-12">
                <ActionIcon  onClick={() => removeQuestionHandler(row.id)} variant="transparent" color="red">
                    <Flex><Text fz={'sm'} weight={400}>Retirer</Text><AiOutlineCloseCircle className="relative top-[2px] left-1" size={16} /></Flex>
                </ActionIcon>
            </Group>
            <Stack>
                <TextInput
                    label={`Question ${idx}`}
                    placeholder="Quel est votre plat préféré ?"
                    onChange={(e) => inputChangeHandler(row.key, e)}
                    />
                <Flex className="flex-col md:flex-row" justify={'space-between'}>
                    <Text fz={'sm'} weight={400}>Réponses</Text>
                    <Group>
                        <Text fz={'xs'} weight={300}>Type de réponse</Text>
                        <QuestionType changeHandler={typeChangeHandler} />
                    </Group>
                </Flex>
                <Box className="relative -top-2">
                    {answers.map((row, index) => 
                        <AnswerRow type={answerType} key={row.key} row={row} index={index} idx={row.id} form={form} removeAnswerHandler={removeAnswer}  />)}
                    <AddAnswerRow />
                </Box>
            </Stack>

        </Box>
    )
}