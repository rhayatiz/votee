import { Card, Flex, Transition } from "@mantine/core";

export default function NabbarMobileMenu({links, opened}) {
    const MobileNavbarLink = ({link}) => (
        <a className='hover:bg-white/5 hover:backdrop-blur-sm hover:shadow-sm cursor-pointer
                       text-gray-800 font-semibold no-underline px-2 py-4 
                       rounded-md' 
          href={link.link} >{link.label}</a>
        
    )

    return (
      <Transition mounted={opened} transition="scale-y" duration={120} timingFunction="ease">
      {(transitionStyles) => 
            <Card withBorder shadow='lg'
                style={transitionStyles}
                className='top-[56] rounded-b-2xl bg-gray-50/50 backdrop-blur-sm z-10 p-8 pt-2 w-screen
                border-red-800 border-2'>
                <Flex direction={'column'} justify={'space-around'} mt={20} h={160}>
                {links.map((link, idx) => <MobileNavbarLink key={idx} link={link} />)}
                </Flex>
            </Card>
      }
    </Transition>
    )
}