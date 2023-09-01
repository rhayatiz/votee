import { Button, Container, Checkbox, TextInput, Select, Space, Box, PasswordInput, Title, Card, Text } from '@mantine/core';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Head } from '@inertiajs/inertia-react';
import { notifications } from '@mantine/notifications';
import PollSimpleForm from '../../components/PollSimpleForm';
import PollImageForm from '../../components/PollImageForm';
import { AiOutlineUnlock } from 'react-icons/ai'
import Footer from '../../components/Footer';

const New = () => {
    const [type, setType] = useState('Simple')
    const [isSecret, setIsSecret] = useState(false)

    return (
        <>
            <Head>
                <title>votee - Nouveau sondage</title>
            </Head>
            <Navbar />
            <Container>
                <Title  order={2}>Nouveau sondage</Title>
                <Box className='shadow-lg rounded-xl
                        p-2 sm:p-8'>
                    <form className='py-4'>
                        {/* <Select
                            size='md'
                            onChange={setType}
                            data={[
                                {value: 'Simple', label: 'Simple', disabled: false},
                                {value: 'Images', label: 'Images', disabled: true},
                            ]}
                            label="Type de sondage"
                            placeholder="Choisir un type"
                            withAsterisk
                            /> */}
                        <Space my={'md'} />
                        <TextInput size='md' placeholder="Questionnaire rentrée" label="Titre" withAsterisk />
                        <Space my={'md'} />
                        {type == 'Simple' &&
                            <>
                                <Space my={'md'} />
                                <PollSimpleForm />
                            </>
                        }
                        {type == 'Images' &&
                            <>
                                <Space my={'md'} />
                                <PollImageForm />
                            </>
                        }
                        
                        <Space my={'xl'} />
                        <Card className='border-[1px] border-gray-200 shadow-sm'>
                            <Checkbox
                                size={'sm'}
                                checked={isSecret}
                                label={<Text fz={'sm'} weight={300}><AiOutlineUnlock className='relative top-[0.9px]' />{' '}Protégez les résultats avec un mot de passe</Text>}
                                color="teal"
                                onChange={(event) => setIsSecret(event.currentTarget.checked)}
                            />
                            {isSecret &&
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

                        <Button type='submit' color='teal' fullWidth mt={'lg'}>Créer</Button>
                    </form>
                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default New