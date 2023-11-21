import { ActionIcon, Box, Button, Flex, Group, Stack, Text, TextInput } from "@mantine/core";
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai"
import QuestionType from "./QuestionType"
import { useState } from "react";
import { randomId } from "@mantine/hooks";
import AnswerRow from "./AnswerRow";

export default function QuestionRow({row, idx, removeQuestionHandler, form, questionIndex}) {
    const typeChangeHandler = (type) => {
        if (type == 'input') {
            form.setFieldValue(`questions.${questionIndex}.answers`, [{ id: 1, key: randomId(), label: '' }])
        } else {
            form.setFieldValue(`questions.${questionIndex}.answers`, [
                { id: 1, key: randomId(), label: '' },
                { id: 2, key: randomId(), label: '' },
            ])
        }
        form.setFieldValue(`questions.${questionIndex}.type`, type)
    }

    const inputChangeHandler = (e) => {
        const questions = [...form.values.questions]
        questions[questionIndex].label = e.target.value
        form.setFieldValue('questions', questions)
    }

    const addAnswer = () => {
        const answers = form.values.questions[questionIndex].answers
        let nextId = 1
        if (answers.length > 0) nextId = answers[answers.length - 1].id + 1
        let newAnswer = {
            key: randomId(),
            id: nextId
        }
        form.setFieldValue(`questions.${questionIndex}.answers`, [...answers, newAnswer])
    }

    const removeAnswer = (id) => {
        let answers = form.values.questions[questionIndex].answers
        var answerIndex = answers.map(function(e) { return e.id; }).indexOf(id)
        answers.splice(answerIndex, 1)
        form.setFieldValue(`questions.${questionIndex}.answers`, [...answers])
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
                    onChange={(e) => inputChangeHandler(e)}
                    error={row.error || null}
                    />
                <Flex className="flex-col md:flex-row" justify={'space-between'}>
                    <Text fz={'sm'} weight={400}>Réponses</Text>
                    <Group>
                        <Text fz={'xs'} weight={300}>Type de réponse</Text>
                        <QuestionType changeHandler={typeChangeHandler} />
                    </Group>
                </Flex>
                <Box className="relative -top-2">
                    {form.values.questions[questionIndex].answers.map((answerRow, index) => 
                        <AnswerRow key={answerRow.key} type={form.values.questions[questionIndex].type} questionKey={row.key} row={answerRow} index={index} idx={answerRow.id} form={form} removeAnswerHandler={removeAnswer}  />)}
                    {form.values.questions[questionIndex].type != "input" &&
                        <AddAnswerRow />}
                </Box>
            </Stack>

        </Box>
    )
}