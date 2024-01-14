import { Text, ActionIcon, Box, Card, Container, CopyButton, Title, Tooltip, Flex, Center, Group, Stack, TextInput, Radio, Checkbox, Button } from "@mantine/core";
import { MdContentCopy, MdCheck } from "react-icons/md";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ErrorsList from '@/components/ErrorsList';
import { Head } from '@inertiajs/inertia-react';
import { router } from "@inertiajs/react";
import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
// import { useForm } from "@mantine/form";

const Show = ({poll}) => {
    const { register, formState: { errors }, handleSubmit, getValues, trigger } = useForm()
    const [errorArray, setErrorArray] = useState([])

    useEffect(() => {
        trigger()
    }, [])
    
    const QuestionTitle = ({index, title}) => {
        const idx = index ? index + '. ' : ''
        return (<Title mb={'lg'} order={4}>{idx}{title}</Title>)
    }

    const RenderResponses = ({question}) => {
        switch (question.type) {
            case 'radio':
                return (
                    <Box>
                        <QuestionTitle title={question.label} />
                        <Stack>
                            {question.responses.map((response, index) => 
                                <Radio 
                                    name={question.id} 
                                    key={index} 
                                    value={response.id} 
                                    label={response.label} 
                                    {...register(`${question.id}`, { required: "Champ obligatoire" })}
                                />
                            )}
                        </Stack>
                    </Box>
                )

            case 'checkbox':
                return (    
                    <Box>
                        <QuestionTitle title={question.label} />
                        <Stack>
                                {question.responses.map((response, index) => 
                                    <Checkbox 
                                        name={`${question.id}`} 
                                        key={response.id} 
                                        value={response.id} 
                                        label={response.label} 
                                        {...register(`${question.id}`, { required: "Champ obligatoire" })}
                                    />
                                )}
                        </Stack>
                    </Box>
                )

            case 'input':
                return (    
                    <TextInput
                        label={<QuestionTitle title={question.label} />}
                        description={question.responses[0].label}
                        {...register(`${question.id}`, { required: "Champ obligatoire" })}
                    />)

            default:
                return <></>
        
        }
    }


    const handleData = (e) => {
        e.preventDefault()
    }


    return (
        <>
            <Head>
                <title>{poll.title}</title>
            </Head>
            <Navbar />
            <Container>
                <Box my={'lg'}>
                    <Title order={1}>Sondage: {poll.title}</Title>
                </Box>
                <form onSubmit={handleData}>
                    {poll.questions.map((question, idx) => 
                        <Box key={idx} className="mt-2 shadow-md bg-gray-50 p-6 rounded-lg relative">
                            <RenderResponses question={question} />
                        </Box>
                    )}
                    <ErrorsList errors={errors} />
                    <Button type="submit" size='lg' fz={"md"} 
                                radius={"md"} color='teal' 
                                fullWidth mt={'lg'}>Soumettre</Button>
                </form>

            </Container>
            <Footer />
        </>
    )
}

export default Show