import { Button, Container, Checkbox, TextInput, Select, Space, Box, PasswordInput, Title, Card, Text, List } from '@mantine/core';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Head } from '@inertiajs/inertia-react';
import { notifications } from '@mantine/notifications';
import PollSimpleForm from '../../components/PollSimpleForm';
import PollImageForm from '../../components/PollImageForm';
import { AiOutlineUnlock } from 'react-icons/ai'
import Footer from '../../components/Footer';
import { router } from '@inertiajs/react'
import { useForm } from '@mantine/form';
import { randomId } from "@mantine/hooks"

const New = () => {
    const [errors, setErrors] = useState(['error example'])
    const form = useForm({
        initialValues: {
            title: 'random question?',
            isProtected: false,
            password: '',
            questions: [
                {
                    id: 1,
                    key: randomId(),
                    type: 'unique',
                    label: ''
                }
            ]
        },

        validate: {
            title: (v) => v == '' ? 'Veuillez renseigner le titre du sondage' : null
        },
    });

    function handleSubmit(values) {
        // router.post('/poll')

        console.log('values', values)
        console.log('values.questions', values.questions)
    }

    return (
        <>
            <Head>
                <title>Nouveau sondage</title>
            </Head>
            <Navbar />
            <Container>
                <Title  order={2}>Nouveau sondage</Title>
                <Box className='shadow-lg rounded-xl
                        p-2 sm:p-8'>
                    <form className='py-4' onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                        <Space my={'md'} />
                        <TextInput size='md' placeholder="Questionnaire rentrée" label="Titre" withAsterisk 
                           {...form.getInputProps('title')} />
                        <Space my={'md'} />
                        <PollSimpleForm form={form}/>
                        
                        <Space my={'xl'} />
                        <Card className='border-[1px] border-gray-200 shadow-sm'>
                            <Checkbox
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

                        <Card className='bg-red-50/80' mt={'md'} radius={'lg'} py={'sm'}>
                            <List size={'sm'}>
                                {errors.map((err) => <List.Item><Text size={'sm'} fw={'sm'} className=' text-red-500'>{err}</Text></List.Item>)}
                            </List>
                        </Card>

                        <Button size='lg' fz={"md"} radius={"md"} type='submit' color='teal' fullWidth mt={'lg'}>Créer</Button>
                    </form>
                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default New