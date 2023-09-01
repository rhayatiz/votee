import { Flex, Group, SegmentedControl, Text } from "@mantine/core";
import { BsCursorText } from 'react-icons/bs'
import { BiRadioCircleMarked, BiSelectMultiple } from 'react-icons/bi'

export default function QuestionType({changeHandler}) {
    const data = [
        { value: 'radio', label: (
            <Flex><BiRadioCircleMarked className="relative top-[2px] mr-1" /><Text fz={'xs'} weight={300}>Unique</Text></Flex>
        ) },
        { value: 'checkbox', label: (
            <Flex><BiSelectMultiple className="relative top-[2px] mr-1" /><Text fz={'xs'} weight={300}>Multiple</Text></Flex>
        ) },
        { value: 'input', label: (
            <Flex><BsCursorText className="relative top-[2px] mr-1" /><Text fz={'xs'} weight={300}>Saisie</Text></Flex>
        ) },
    ]
    return (
        <SegmentedControl onChange={changeHandler} size="sm" data={data} />
    )
}