import { Text, ActionIcon, Box, Card, Container, CopyButton, Title, Tooltip, Flex, Center, Group, Stack, TextInput, Radio, Checkbox, Button } from "@mantine/core";
import { MdContentCopy, MdCheck } from "react-icons/md";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ErrorsList from '@/components/ErrorsList';
import { Head } from '@inertiajs/inertia-react';
import { router } from "@inertiajs/react";
import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ErrorCard from "../../components/ErrorCard";
import QuestionTitle from "../../components/QuestionTitle";
// import { useForm } from "@mantine/form";

const Show = ({poll}) => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    
    const RenderResponses = ({index, question}) => {
        const title = <QuestionTitle index={index} title={question.label} />
        switch (question.type) {
            case 'radio':
                return (
                    <Box>
                        {title}
                        <Stack>
                            {question.responses.map((response, index) => 
                                <Radio 
                                    size={'md'}
                                    color={'teal'}
                                    name={question.id} 
                                    key={index} 
                                    value={response.id} 
                                    label={response.label} 
                                    {...register(`${question.id}`, { required: "Champ obligatoire" })}
                                />
                            )}
                        </Stack>
                        {errors[question.id] && <ErrorCard error={errors[question.id].message}/>}
                    </Box>
                )

            case 'checkbox':
                return (    
                    <Box>
                        {title}
                        <Stack>
                                {question.responses.map((response, index) => 
                                    <Checkbox size={'md'}
                                        color={'teal'}
                                        name={`${question.id}`} 
                                        key={response.id} 
                                        value={response.id} 
                                        label={response.label} 
                                        {...register(`${question.id}`, { required: "Champ obligatoire" })}
                                    />
                                )}
                        </Stack>
                        {errors[question.id] && <ErrorCard error={errors[question.id].message}/>}
                    </Box>
                )

            case 'input':
                return (    
                    <Box>
                        <TextInput
                            label={title}
                            description={question.responses[0].label}
                            {...register(`${question.id}`, { required: "Champ obligatoire" })}
                        />
                        {errors[question.id] && <ErrorCard error={errors[question.id].message}/>}
                    </Box>
                )

            default:
                return <></>
        
        }
    }


    const handleData = (data) => {
        let body = {data: data, pollId: poll.id}
        const token = document.head.querySelector('meta[name="csrf-token"]').content
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': token },
            body: JSON.stringify(body)
        }

        fetch('/entry/submit', requestOptions)
            .then(res => res.json())
            .then(res => console.log(res))
    }


    return (
        <>
            <Head>
                <title>{poll.title}</title>
            </Head>
            <div className='min-h-screen'>
                <Navbar />
                <Container>
                    <Box my={'lg'}>
                        <Title order={1}>Sondage: {poll.title}</Title>
                    </Box>
                    <form onSubmit={handleSubmit(handleData)}>
                        {poll.questions.map((question, idx) => 
                            <Box key={idx} className="mt-2 shadow-md bg-gray-50 p-6 rounded-lg relative">
                                <RenderResponses index={idx + 1} question={question} />
                            </Box>
                        )}
                        <ErrorsList errors={errors} />
                        <Button type="submit" size='lg' fz={"md"} 
                                    radius={"md"} color='teal' 
                                    fullWidth mt={'lg'}>Soumettre</Button>
                    </form>

                </Container>
                <Footer className="relative" />
            </div>
        </>
    )
}

export default Show