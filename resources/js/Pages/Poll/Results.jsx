import { Text, Box, Card, Container, Title, Flex, Progress, Stack, List } from "@mantine/core";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/inertia-react';
import QuestionTitle from "../../components/QuestionTitle";
import { round } from "lodash";
import moment from "moment";

const Results = ({poll, entriesCount}) => {
    const createdAt = moment(poll.created_at).format("DD/MM/YYYY [à] HH:mm", "fr")
    const RenderQuestionAnswers = ({index, question}) => {
        if (question.type == 'radio') {
            return (
                <Card shadow="sm" radius={'md'} withBorder mb={'md'}>
                    <QuestionTitle index={index} title={question.label} />
                    {question.responses.map((response, idx) => 
                        <Stack key={idx} mb={'md'} spacing={'xs'}>
                            <Flex justify={'space-between'} className="relative -bottom-2">
                                <Text fz={'sm'}>{response.label}</Text>
                                <Text fz={'sm'} className="text-gray-800">({response.votes.length}) {round(((response.votes.length)/entriesCount)*100, 2)}%</Text>
                            </Flex>
                            <Progress color="teal" h={'md'} value={((response.votes.length)/entriesCount)*100} />
                        </Stack>
                    )}
                </Card>
            )
        } else if (question.type == 'checkbox') {
            return (
                <Card shadow="sm" radius={'md'} withBorder mb={'md'}>
                    <QuestionTitle index={index} title={question.label} />
                    {question.responses.map((response, idx) => 
                        <Stack key={idx} mb={'md'} spacing={'xs'}>
                            <Flex justify={'space-between'} className="relative -bottom-2">
                                <Text fz={'sm'}>{response.label}</Text>
                                <Text fz={'sm'} className="text-gray-800">({response.votes.length}) {round(((response.votes.length)/question.votes.length)*100, 2)}%</Text>
                            </Flex>
                            <Progress color="teal" h={'md'} value={((response.votes.length)/question.votes.length)*100} />
                        </Stack>
                    )}
                </Card>
            )
        } else {
            return (
                <Card shadow="sm" radius={'md'} withBorder mb={'md'}>
                    <QuestionTitle index={index} title={question.label} />
                    <List withPadding>
                        {question.responses[0].votes.map((entry, idx) => 
                            <List.Item key={idx}>{entry.input}</List.Item>
                        )}
                    </List>
                </Card>

            )
        }
    }

    return (
        <>
            <Head>
                <title>{poll.title}</title>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Créez vos sondages gratuitement et sans inscription sur Votee, diffusez votre sondage sur les réseaux et visualisez vos résultats." />
                <meta id="meta-description" name="description" content="Créez vos sondages gratuitement et sans inscription sur Votee, diffusez votre sondage sur les réseaux et visualisez vos résultats." />
                <meta id="og-title" property="og:title" content="Votee" />
            </Head>
            <div className='min-h-screen'>
                <Navbar />
                <Container>
                    <Box my={'lg'}>
                        <Title order={1} fz={'1.6rem'}>Sondage: {poll.title}</Title>
                        <Flex justify={'space-between'}>
                            <Text color="dimmed" fz={'xs'}>Créé le {createdAt}</Text>
                            <Text fz={'sm'}>{entriesCount} participants</Text>
                        </Flex>
                    </Box>

                        {poll.questions.map((question, idx) => 
                            <RenderQuestionAnswers key={idx} index={idx + 1} question={question} />
                        )}
                </Container>
                <Footer className="relative" />
            </div>
        </>
    )
}

export default Results