import { Button, Container, Checkbox, TextInput, Select, Space, Box, PasswordInput, Title, Card, Text, List, Switch } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Head } from '@inertiajs/inertia-react';
import { notifications } from '@mantine/notifications';
import PollSimpleForm from '../../components/PollSimpleForm';
import PollImageForm from '../../components/PollImageForm';
import { AiOutlineUnlock } from 'react-icons/ai'
import Footer from '../../components/Footer';
import { router } from '@inertiajs/react'
import { useForm } from '@mantine/form';
import { randomId, useDidUpdate } from "@mantine/hooks"

const New = () => {
    const [errors, setErrors] = useState(false)
    const form = useForm({
        initialValues: {
            title: 'random question?',
            isProtected: false,
            password: '',
            questions: [
                {
                    id: 1,
                    key: randomId(),
                    type: 'radio',
                    label: '',
                    answers: [
                        { id: 1, key: randomId(), label: '' },
                        { id: 2, key: randomId(), label: '' },
                    ]
                }
            ]
        },

        validate: {
            title: (v) => v == '' ? 'Veuillez renseigner le titre du sondage' : null
        },
    });

    useEffect(() => {
        if (errors.length == 0) {
            validate(form.values)
        }
    }, [errors])
    

    function handleSubmit(values) {
        // triggers validate in useeffect
        setErrors([]) 
        router.post('/poll', values)
    }

    const findQuestionIndex = (key) => {
        return form.values.questions.map(function(e) { return e.key; }).indexOf(key)
    }

    function validate(values) {
        let newErrors = [...errors]
        let emptyInputs = false
        if (values.questions.length == 0) {
            setErrors([...newErrors, 'Veuillez ajouter au moins une question'])
        }
        values.questions.forEach(question => {
            let questionIndex = findQuestionIndex(question.key)
            let questionError = null
            if (question.label == "") {
                questionError = ' '
                emptyInputs = true
            } 
            form.setFieldValue(`questions.${questionIndex}.error`, questionError)
            if (question.answers.length > 0) {
                question.answers.forEach(answer => {
                    let answerError = null
                    let answerIndex = question.answers.map(function(e) { return e.key; }).indexOf(answer.key)
                    if (answer.label == "") {
                        answerError = ' '
                        emptyInputs = true
                    } 
                    form.setFieldValue(`questions.${questionIndex}.answers.${answerIndex}.error`, answerError)
                })
            }
        })
        if (emptyInputs) {
            setErrors([...newErrors, 'Veuillez renseigner les champs nécessaires'])
        }
    }

    return (
        <>
            <Head>
                <title>Nouveau sondage</title>
            </Head>
            <Navbar />
            <Container>
                <Title order={2}>Nouveau sondage</Title>
                <Box className='shadow-lg rounded-xl
                        p-2 sm:p-8'>
                    <form className='py-4' onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                        <Space my={'md'} />
                        <TextInput size='md' placeholder="Questionnaire rentrée" label="Titre" withAsterisk 
                           {...form.getInputProps('title')} />
                        <Space my={'md'} />
                        <PollSimpleForm form={form}/>
                        
                        <Space my={'xl'} />
                        <Card className='bg-gray-50/50' shadow='lg' radius={'md'}>
                            <Switch
                                size={'sm'}
                                label={<Text fz={'sm'} weight={300}><AiOutlineUnlock className='relative top-[0.9px]' />{' '}Protégez les résultats avec un mot de passe</Text>}
                                color="teal"
                                {...form.getInputProps('isProtected', {type: 'checkbox'})}
                            />
                            {form.values.isProtected &&
                                <>
                                    <Space my={'md'} />
                                    <PasswordInput
                                        placeholder="Mot de passe"
                                        label="Mot de passe"
                                        description="Ce code vous permettra d'accéder aux résultats du sondage"
                                        withAsterisk
                                        />
                                </>
                            }
                        </Card>
                        {errors.length > 0 &&
                            <Card className='bg-red-50/80' mt={'md'} radius={'lg'} py={'sm'}>
                                <List size={'sm'}>
                                    {errors.map((err, idx) => <List.Item key={idx}><Text size={'sm'} fw={'sm'} className=' text-red-500'>{err}</Text></List.Item>)}
                                </List>
                            </Card>
                        }
                        <Button size='lg' fz={"md"} radius={"md"} type='submit' color='teal' fullWidth mt={'lg'}>Créer</Button>
                    </form>
                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default New