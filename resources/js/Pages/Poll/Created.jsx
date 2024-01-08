import { Text, ActionIcon, Box, Card, Container, CopyButton, Title, Tooltip, Flex, Center } from "@mantine/core";
import { MdContentCopy, MdCheck } from "react-icons/md";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/inertia-react';

const Created = ({link}) => {
    return (
        <>
            <Head>
                <title>Nouveau sondage</title>
            </Head>
            <Navbar />
            <Container>
                <Box>
                    <Title order={2}>Succès</Title>
                    <Card shadow="md" padding={'xl'} radius={'lg'} className="bg-slate-100">
                        <Text weight={300} align="center">Votre sondage à bien été créé, partagez le lien suivant pour pouvoir recueillir vos votes.</Text>
                        <Center mt={'lg'}>
                            <Flex className="bg-gray-50 shadow-sm rounded-xl" py={"md"} px={'xl'}>
                                <Text fz={'sm'}>{link}</Text>
                                <CopyButton position="relative" value={link} timeout={2000}>
                                    {({ copied, copy }) => (
                                        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                                        <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
                                            {copied ? <MdCheck className="relative bottom-1" size="1rem" /> : <MdContentCopy className="relative bottom-1" size="1rem" />}
                                        </ActionIcon>
                                        </Tooltip>
                                    )}
                                </CopyButton>
                            </Flex>
                        </Center>
                    </Card>
                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default Created