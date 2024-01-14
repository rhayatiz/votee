import { Container, Divider, Flex, Space, Text, Box } from "@mantine/core";
import { FiExternalLink } from "react-icons/fi";
import moment from "moment/moment";

export default function Footer({className}) {
    const year = moment().year()

    return (
        <footer className={`w-full h-36 p-1 mt-24 ${className}`}>
            <Container 
                className="bg-gradient-to-r from-slate-800 to-zinc-900 rounded-xl shadow-lg
                            w-full h-full
                            text-white">
                <Flex direction={'column'} justify={'space-between'} className="h-full" p={'lg'}>
                    <Text></Text>
                    <Box>
                        <Divider />
                        <Flex justify={'space-between'}>
                            <Text fz={12} className="mt-1 font-light">votee — {year}</Text>
                            <Text fz={12} className="mt-1 font-light">
                                <a  className="text-blue-300 hover:text-blue-100 relative" href="https://github.com/rhayatiz" target="_blank">
                                    rhayatiz{' '}<FiExternalLink className="relative top-0.5" /></a></Text>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </footer>
    )
}