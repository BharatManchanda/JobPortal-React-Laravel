import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { ThemeColor } from '../../../../Helpers/StyleConstant';
import PersonIcon from '@mui/icons-material/Person';

const Menu = [
    {
        label: 'Dashboard',
        icon: <DashboardIcon sx={{ color: ThemeColor.secondary }} />,
        to:'/admin/dashboard',
        isSubmenu: false,
    },
    {
        label: 'User',
        icon: <PersonIcon sx={{ color: ThemeColor.secondary }} />,
        to:'/admin/user',
        isSubmenu: false,
    },
    // {
    //     label: 'Dashboard',
    //     icon: <InboxIcon sx={{ color: ThemeColor.secondary }} />,
    //     to:'/dashboard',
    //     isSubmenu: false,
    // },
    // {
    //     label: 'Estimate',
    //     icon: <MailIcon sx={{ color: ThemeColor.secondary }} />,
    //     to:'/estimate',
    //     isSubmenu: false,
    // },
    // {
    //     label: 'Mail',
    //     icon: <InboxIcon sx={{ color: ThemeColor.secondary }} />,
    //     to:'/send',
    //     isSubmenu: true,
    //     subMenu:[
    //         {
    //             label: 'Send',
    //             icon: <MailIcon sx={{ color: ThemeColor.secondary }} />,
    //             to:'/send',
    //         },
    //         {
    //             label: 'Received',
    //             icon: <MailIcon sx={{ color: ThemeColor.secondary }} />,
    //             to:'/received',
    //         },
    //     ],
    // },
    // {
    //     label: 'Mail',
    //     icon: <InboxIcon sx={{ color: ThemeColor.secondary }} />,
    //     to:'/send',
    //     isSubmenu: true,
    //     subMenu:[
    //         {
    //             label: 'Send',
    //             icon: <MailIcon sx={{ color: ThemeColor.secondary }} />,
    //             to:'/send',
    //         },
    //         {
    //             label: 'Received',
    //             icon: <MailIcon sx={{ color: ThemeColor.secondary }} />,
    //             to:'/received',
    //         },
    //     ],
    // },
]

export default Menu;