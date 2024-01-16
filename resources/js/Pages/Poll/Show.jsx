import { Text, ActionIcon, Box, Card, Container, CopyButton, Title, Tooltip, Flex, Center, Group, Stack, TextInput, Radio, Checkbox, Button, Modal, Anchor, LoadingOverlay } from "@mantine/core";
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
import { IoMdCloseCircleOutline, IoIosCheckmarkCircleOutline } from "react-icons/io"

const Show = ({poll}) => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [loading, setLoading] = useState(false)
    const [opened, setOpened] = useState(false)
    
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

        setLoading(true)
        fetch('/entry/submit', requestOptions)
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    console.log('res', res)
                    setOpened({
                        success: res.success,
                        message: res.result.message,
                        link: res.result.data.resultsLink
                    })
                    return
                }
                setOpened({
                    message: res.message
                })
                console.log('opened', opened)
            })

    }


    return (
        <>
            <Head>
                <title>{poll.title}</title>
            </Head>
            <div className='min-h-screen'>
                <Navbar />
                <Container>
                    <Box my={'lg'} pos={'relative'}>
                        <LoadingOverlay visible={loading} overlayBlur={2} />
                        <Title order={1}>Sondage: {poll.title}</Title>
                        <form onSubmit={handleSubmit(handleData)} className="relative">
                            {poll.questions.map((question, idx) => 
                                <Box key={idx} className="mt-2 shadow-md bg-gray-50 p-6 rounded-lg relative">
                                    <RenderResponses index={idx + 1} question={question} />
                                </Box>
                            )}
                            <ErrorsList errors={errors} />
                            <Button type="submit" size='lg' fz={"md"} 
                                        radius={"md"} color='teal' 
                                        disabled={loading}
                                        fullWidth mt={'lg'}>Soumettre</Button>
                        </form>
                    </Box>

                </Container>
                <Footer className="relative" />

                <Modal zIndex={600} radius={'lg'} opened={opened} onClose={() => {return}} withCloseButton={false} centered>
                        <Center className="flex flex-col py-3">
                            {opened.success
                                ? <IoIosCheckmarkCircleOutline size={50} className="text-teal-500" />
                                : <IoMdCloseCircleOutline size={50}  className="text-red-400" />
                            }
                            <Text my={'xl'} fz={'md'} className="text-gray-700" weight={600}>{opened.message}</Text>
                            {opened.success
                                ? <> <Button  size='lg' fz={"md"} 
                                    radius={"md"} color='teal' 
                                    fullWidth mt={'lg'}
                                    variant="outline"
                                    component="a"
                                    href="/"
                                    >Accueil</Button>
                                    <Anchor mt={'md'} href={opened.link} fz={'sm'} color="dimmed">Voir résultats</Anchor>
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

export default Show