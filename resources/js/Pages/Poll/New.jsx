import { Button, Container, Checkbox, TextInput, Select, Space, Box, PasswordInput, Title, Card, Text, List, Switch, Tooltip, LoadingOverlay, Modal, Anchor, Center, CopyButton, ActionIcon, Flex, Group } from '@mantine/core';
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
import { randomId, useClipboard, useDidUpdate } from "@mantine/hooks"
import { IoIosCheckmarkCircleOutline, IoMdCloseCircleOutline } from 'react-icons/io';
import { MdContentCopy, MdCheck } from 'react-icons/md';
import CopyToClipboard from 'react-copy-to-clipboard';

const New = () => {
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)
    const [opened, setOpened] = useState(false)
    const [copied, setCopied] = useState(false)
    const form = useForm({
        initialValues: {
            title: '',
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
        console.log('errors useeffect', errors)

        // if (errors.length == 0) {
        //     validate(form.values)
        //     console.log('errors useeffect', errors)
        // }
    }, [errors])
    

    function handleSubmit(values) {
        validate(form.values)
        // triggers validate in useeffect
        // setErrors([]) 
        console.log('errors', errors)
        // router.post('/poll', values)
    }

    const findQuestionIndex = (key) => {
        return form.values.questions.map(function(e) { return e.key; }).indexOf(key)
    }

    function validate(values) {
        setErrors([])
        let emptyInputs = false
        if (values.questions.length == 0) {
            setErrors(['Veuillez ajouter au moins une question'])
            return
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
            setErrors(['Veuillez renseigner les champs nécessaires'])
        } else {
            if (errors.length == 0) {
                let body = values
                const token = document.head.querySelector('meta[name="csrf-token"]').content
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': token },
                    body: JSON.stringify(body)
                }
        
                setLoading(true)
                fetch('/poll', requestOptions)
                    .then(res => res.json())
                    .then(res => {
                        if (res.success) {
                            console.log('res', res)
                            setOpened({
                                success: res.success,
                                message: res.result.message,
                                link: res.result.data.pollLink
                            })
                            return
                        }
                        setOpened({
                            message: res.message
                        })
                        console.log('opened', opened)
                    })
            }
        }
    }


    return (
        <>
            <Head>
                <title>Nouveau sondage</title>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Créez vos sondages gratuitement et sans inscription sur Votee, diffusez votre sondage sur les réseaux et visualisez vos résultats." />
                <meta id="meta-description" name="description" content="Créez vos sondages gratuitement et sans inscription sur Votee, diffusez votre sondage sur les réseaux et visualisez vos résultats." />
                <meta id="og-title" property="og:title" content="Votee" />
            </Head>
            <div className='min-h-screen'>
                <Navbar />
                <Container pos={"relative"}>
                    <LoadingOverlay visible={loading} overlayBlur={2} radius={""} />
                    <Title order={2}>Nouveau sondage</Title>
                    <Box className='shadow-lg rounded-xl
                            p-2 sm:p-8'>
                        <form className='py-4' onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                            <Box pos={'relative'}>
                                <Space my={'md'} />
                                <TextInput size='md' mb={'xl'} placeholder="Ex: questionnaire rentrée 2023" label="Titre du sondage" withAsterisk 
                                {...form.getInputProps('title')} />
                                <Space my={'xl'} />
                                <PollSimpleForm form={form}/>
                                
                                <Space my={'xl'} />
                                {/* <Card className='bg-gray-50/50' shadow='lg' radius={'md'}>
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
                                                {...form.getInputProps('password')}
                                                />
                                        </>
                                    }
                                </Card> */}
                                {errors.length > 0 &&
                                    <Card className='bg-red-50/80' mt={'md'} radius={'lg'} py={'sm'}>
                                        <List size={'sm'}>
                                            {errors.map((err, idx) => <List.Item key={idx}><Text size={'sm'} fw={'sm'} className=' text-red-500'>{err}</Text></List.Item>)}
                                        </List>
                                    </Card>
                                }
                            </Box>

                            <Button disabled={loading} size='lg' fz={"md"} 
                                radius={"md"} type='submit' color='teal' 
                                fullWidth mt={'lg'}>Créer</Button>
                        </form>
                    </Box>
                </Container>
                <Footer className={"relative"} />
                <Modal zIndex={999} radius={'lg'} opened={opened} onClose={() => {return}} withCloseButton={false} centered>
                        <Center className="flex flex-col py-3">
                            {opened.success
                                ? <IoIosCheckmarkCircleOutline size={50} className="text-teal-500" />
                                : <IoMdCloseCircleOutline size={50}  className="text-red-400" />
                            }
                            <Text my={'xl'} fz={'md'} className="text-gray-700" weight={600}>{opened.message}</Text>
                            <Text my={'xl'} fz={'md'} className="text-gray-700 px-3" weight={400}>Vous pouvez désormais visiter votre sondage sur le lien suivant</Text>

                            <Flex  className='font-light relative w-full border border-solid border-gray-200 py-2 rounded-sm justify-around'>
                                <Anchor href={opened.link}>{opened.link}</Anchor>
                                <Box className="relative left-2 bottom-[0.5]" >
                                <CopyToClipboard text={opened.link}
                                        onCopy={() => setCopied(true)}>
                                    <Tooltip label={copied ? 'Copié' : 'Copier'} withArrow position="right">
                                        <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle">
                                            {copied ? (
                                            <MdCheck size={16} />
                                            ) : (
                                            <MdContentCopy size={16} />
                                            )}
                                        </ActionIcon>
                                    </Tooltip>
                                    </CopyToClipboard>
                                </Box>
                            </Flex>

                            {opened.success
                                ? <> <Button  size='lg' fz={"md"} 
                                    radius={"md"} color='teal' 
                                    fullWidth mt={'lg'}
                                    variant="outline"
                                    component="a"
                                    href="/"
                                    >Accueil</Button>
                                </>
                                : <Button  size='lg' fz={"md"} 
                                            radius={"md"} color='teal' 
                                            fullWidth mt={'lg'}
                                            variant="outline"
                                            onClick={() => {setOpened(false); setLoading(false)}}
                                            >Réessayer</Button>
                            }
                        </Center> 
                </Modal>  
            </div>
        </>
    )
}

export default New