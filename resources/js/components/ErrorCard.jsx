import { Card, List, Text } from "@mantine/core";

export default function ErrorCard({error}) {
    return (
        <Card className='bg-red-50/80' mt={'md'} radius={'lg'} py={'sm'}>
            <List size={'sm'}>
                <List.Item><Text size={'sm'} fw={'sm'} className=' text-red-500'>{error}</Text></List.Item>
            </List>
        </Card>
    )
}