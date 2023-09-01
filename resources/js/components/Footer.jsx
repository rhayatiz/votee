import { Container, Divider, Flex, Space, Text, Box } from "@mantine/core";
import moment from "moment/moment";

export default function Footer() {
    const year = moment().year()

    return (
        <footer className="w-full h-36 p-1 mt-24">
            <Container 
                className="bg-gradient-to-r from-slate-800 to-zinc-900 rounded-2xl shadow-lg
                            w-full h-full
                            text-white">
                <Flex direction={'column'} justify={'space-between'} className="h-full" p={'lg'}>
                    <Text></Text>
                    <Box>
                        <Divider />
                        <Flex justify={'space-between'}>
                            <Text fz={14} className="mt-1 font-light">votee — {year}</Text>
                            <Text fz={14} className="mt-1 font-light">Made with ♡ by{' '} 
                                <a  className="text-blue-300 hover:text-blue-100" href="https://github.com/rhayatiz" target="_blank">rhayatiz</a></Text>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </footer>
    )
}