import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
const Menu = [
    {
        label: 'Inbox',
        icon: <InboxIcon />,
        to:'/authenticated',
        isSubmenu: false,
    },
    {
        label: 'Excercise',
        icon: <MailIcon />,
        to:'/excercise',
        isSubmenu: false,
    },
    {
        label: 'Dashboard',
        icon: <InboxIcon />,
        to:'/dashboard',
        isSubmenu: false,
    },
    {
        label: 'Estimate',
        icon: <MailIcon />,
        to:'/estimate',
        isSubmenu: false,
    },
    {
        label: 'Mail',
        icon: <InboxIcon />,
        to:'/send',
        isSubmenu: true,
        subMenu:[
            {
                label: 'Send',
                icon: <MailIcon />,
                to:'/send',
            },
            {
                label: 'Received',
                icon: <MailIcon />,
                to:'/received',
            },
        ],
    },
    {
        label: 'Mail',
        icon: <InboxIcon />,
        to:'/send',
        isSubmenu: true,
        subMenu:[
            {
                label: 'Send',
                icon: <MailIcon />,
                to:'/send',
            },
            {
                label: 'Received',
                icon: <MailIcon />,
                to:'/received',
            },
        ],
    },
]

export default Menu;