import { ActionIcon, Center, Flex, Text, TextInput } from "@mantine/core";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCursorText } from 'react-icons/bs'
import { ImCheckboxUnchecked, ImRadioUnchecked } from 'react-icons/im'

export default function AnswerRow({type, row,index, idx, removeAnswerHandler, form}) {

    const answerTypeIcon = type == 'checkbox'
                        ? <ImCheckboxUnchecked />
                        : type == 'radio'
                            ? <ImRadioUnchecked />
                            : <BsCursorText />

    const answerPlaceholder = type == 'input' ? `Label` : `Reponse ${index + 1}`
    return (
        <>
            <Flex>
                <TextInput mt={'xs'} className="flex-1"
                    placeholder={answerPlaceholder}
                    icon={answerTypeIcon}
                    withAsterisk
                    />
                {index != 0 && index != 1 &&
                    <Center>
                        <ActionIcon onClick={() => removeAnswerHandler(idx)}>
                           <AiOutlineCloseCircle className="relative top-[2px] left-1 text-red-700" size={18} />
                        </ActionIcon>
                    </Center>
                }
            </Flex>
        </>
    )
}