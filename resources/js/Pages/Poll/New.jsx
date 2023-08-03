import { Button, Container, Checkbox, TextInput, Select, Space, Box, PasswordInput, Title } from '@mantine/core';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Head } from '@inertiajs/inertia-react';
import { notifications } from '@mantine/notifications';
import PollSimpleForm from '../../components/PollSimpleForm';
import PollImageForm from '../../components/PollImageForm';

const New = () => {
    const [type, setType] = useState('')
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
                        <TextInput placeholder="Mon sondage..." label="Titre" withAsterisk />
                        <Space my={'md'} />
                        <Select
                            onChange={setType}
                            data={['Simple', 'Images']}
                            label="Type de sondage"
                            placeholder="Choisir un type"
                            withAsterisk
                            />
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
                        
                        <Checkbox
                            checked={isSecret}
                            label="Protégez les résultats avec un mot de passe"
                            color="teal"
                            onChange={(event) => setIsSecret(event.currentTarget.checked)}
                            />
                        {isSecret &&
                            <>
                                <Space my={'md'} />
                                <PasswordInput
                                    placeholder="Mot de passe"
                                    label="Mot de passe"
                                    description="Ce code vous permettra de visualiser les résultats de votre sondage"
                                    withAsterisk
                                    />
                            </>
                        }
                        <Button type='submit' color='teal' fullWidth mt={'lg'}>Créer</Button>
                    </form>
                </Box>
            </Container>
        </>
    )
}

export default New