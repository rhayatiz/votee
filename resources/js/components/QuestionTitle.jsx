import { Title } from "@mantine/core"

export default function QuestionTitle({title, index}) {
    const idx = index ? index + '. ' : ''
    return (<Title mb={'lg'} order={4}>{idx}{title}</Title>)
}