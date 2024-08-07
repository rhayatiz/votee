
import { createStyles, Header, Menu, Group, Center, Burger, Container, rem, Title, Image, List, Box, Card, Transition, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { TbChevronDown } from 'react-icons/tb';
import logo from '../../images/logo_light_theme.png'
import NabbarMobileMenu from './NavbarMobileMenu';

const useStyles = createStyles((theme) => ({
  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));


export default function Navbar() {
  const links = [
      {
        "link": "/",
        "label": "Accueil"
      },
      {
        "link": "/poll",
        "label": "Nouveau sondage"
      },
      // {
      //   "link": "/faq",
      //   "label": "FAQ"
      // },
      // {
      //   "link": "#2",
      //   "label": "Support",
      //   "links": [
      //     {
      //       "link": "/faq",
      //       "label": "FAQ"
      //     },
      //     {
      //       "link": "/demo",
      //       "label": "Book a demo"
      //     },
      //     {
      //       "link": "/forums",
      //       "label": "Forums"
      //     }
      //   ]
      // }
    ]

  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <a component='a' href={item.link} key={item.label}>{item.label}</a>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <TbChevronDown size="0.9rem"/>
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={56} mb={90} zIndex={900}>
      <Container>
        <div className={classes.inner}>
          <Center>
            <a href="/" className='no-underline text-black'>
              <Image src={logo} maw={100} />
            </a>
          </Center>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </div>
      </Container>
      <NabbarMobileMenu links={links} opened={opened} />

    </Header>
  );
}