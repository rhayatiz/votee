import { Text, TextInput } from "@mantine/core";
import { BsCursorText } from 'react-icons/bs'
import { ImCheckboxUnchecked, ImRadioUnchecked } from 'react-icons/im'

export default function AnswerRow({type, row, idx, removeAnswerHandler}) {

    const answerTypeIcon = type == 'checkbox'
                        ? <ImCheckboxUnchecked />
                        : type == 'radio'
                            ? <ImRadioUnchecked />
                            : <BsCursorText />

    const answerPlaceholder = type == 'input' ? `Label` : `Reponse ${idx}`
    
    return (
        <>
            <TextInput mt={'xs'}
                placeholder={answerPlaceholder}
                icon={answerTypeIcon}
                />
        </>
    )
}