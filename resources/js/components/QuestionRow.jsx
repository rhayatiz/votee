import { ActionIcon, Box, Flex, Group, Stack, Text, TextInput } from "@mantine/core";
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai"
import QuestionType from "./QuestionType"
import { useState } from "react";
import { randomId } from "@mantine/hooks";
import AnswerRow from "./AnswerRow";

export default function QuestionRow({row, idx, removeQuestionHandler}) {
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
        setAnswers(answers.filter((answer) => answer.id != id))
    }

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
                    />
                <Flex className="flex-col md:flex-row" justify={'space-between'}>
                    <Text fz={'sm'} weight={400}>Réponses</Text>
                    <Group>
                        <Text fz={'xs'} weight={300}>Type de réponse</Text>
                        <QuestionType changeHandler={typeChangeHandler} />
                    </Group>
                </Flex>
                <Box className="relative -top-2">
                    {answers.map((row, idx) => <AnswerRow type={answerType} key={row.key} row={row} idx={idx+1} removeAnswerHandler={removeAnswer}  />)}
                </Box>
            </Stack>

        </Box>
    )
}