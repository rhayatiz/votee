import { Card, List, Text } from "@mantine/core";

export default function ErrorsList({errors}) {
    if (errors.length > 0)
        return (
            <Card className='bg-red-50/80' mt={'md'} radius={'lg'} py={'sm'}>
                <List size={'sm'}>
                    {errors.map((err, idx) => <List.Item key={idx}><Text size={'sm'} fw={'sm'} className=' text-red-500'>{err}</Text></List.Item>)}
                </List>
            </Card>
        )
}