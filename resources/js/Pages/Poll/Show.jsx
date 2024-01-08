import { Text, ActionIcon, Box, Card, Container, CopyButton, Title, Tooltip, Flex, Center, Group, Stack, TextInput, Radio, Checkbox, Button } from "@mantine/core";
import { MdContentCopy, MdCheck } from "react-icons/md";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/inertia-react';
import { router } from "@inertiajs/react";

const Show = ({poll}) => {
    console.log('poll', poll)

    const QuestionTitle = ({index, title}) => {
        const idx = index ? index + '. ' : ''
        return (<Title mb={'lg'} order={4}>{idx}{title}</Title>)
    }

    const RenderResponses = ({question}) => {
        switch (question.type) {
            case 'radio':
                return (
                    <Radio.Group mb={'xl'}
                        size="md"
                        name="eeeee"
                        label={<QuestionTitle title={question.label} />}
                    >
                        <Stack>
                            {question.responses.map((response, index) => 
                                <Radio key={index} value={response.id} label={response.label} />
                            )}
                        </Stack>
                    </Radio.Group>
                )

            case 'checkbox':
                return (    
                    <Checkbox.Group mb={'xl'}
                        size="md"
                        name="zz"
                        label={<QuestionTitle title={question.label} />}
                    >
                        <Stack>
                            {question.responses.map((response, index) => 
                                <Checkbox key={index} value={response.id} label={response.label} />
                            )}
                        </Stack>
                    </Checkbox.Group>)

            case 'input':
                return (    
                    <TextInput
                        label={<QuestionTitle title={question.label} />}
                        description={question.responses[0].label}
                    />)

            default:
                return <></>
        
        }
    }

    const handleSubmit = () => (
        router.post('/vote/submit')
    )

    return (
        <>
            <Head>
                <title>{poll.title}</title>
            </Head>
            <Navbar />
            <Container>
                <Box>
                    <Title order={2}>Sondage: {poll.title}</Title>
                </Box>
                <form>
                    {poll.questions.map((question, idx) => 
                        <Box key={idx} className="mt-2 shadow-md bg-gray-50 p-6 rounded-lg relative">
                            <RenderResponses question={question} />
                        </Box>
                    )}

                    <Button onClick={handleSubmit} size='lg' fz={"md"} 
                                radius={"md"} color='teal' 
                                fullWidth mt={'lg'}>Soumettre</Button>
                </form>

            </Container>
            <Footer />
        </>
    )
}

export default Show