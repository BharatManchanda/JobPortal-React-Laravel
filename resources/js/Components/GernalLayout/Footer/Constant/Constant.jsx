import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { ThemeColor } from '../../../../Helpers/StyleConstant';
import { IconButton } from '@mui/material';

const SocialMedia = [
    {
        icon: <IconButton aria-label="facebook" size="large">
                <FacebookIcon sx={{
                    color: ThemeColor.secondary,
                    background: ThemeColor.white,
                    borderRadius:'50%',
                    padding:'5px',
                     }} />
            </IconButton>
    },
    {
        icon: <IconButton aria-label="instagram" size="large">
                <InstagramIcon sx={{
                    color: ThemeColor.secondary,
                    background: ThemeColor.white,
                    borderRadius:'50%',
                    padding:'5px',
                    }} />
            </IconButton>,
    },
    {
        icon: <IconButton aria-label="youtube" size="large">
                <YouTubeIcon sx={{
                    color: ThemeColor.secondary,
                    background: ThemeColor.white,
                    borderRadius:'50%',
                    padding:'5px',
                    }} />
            </IconButton>
    },
    {
        icon:  <IconButton aria-label="linkedin" size="large">
                <LinkedInIcon sx={{
                    color: ThemeColor.secondary,
                    background: ThemeColor.white,
                    borderRadius:'50%',
                    padding:'5px',
                    }} />
            </IconButton>
    },
    {
        icon:  <IconButton aria-label="twitter" size="large">
                <TwitterIcon sx={{
                    color: ThemeColor.secondary,
                    background: ThemeColor.white,
                    borderRadius:'50%',
                    padding:'5px',
                    }} />
            </IconButton>
    }
];

const FooterLinkStep1 = [
    {
        to:'aboutus',
        component:'',
        label:'About us'
    },
    {
        to:'careers',
        component:'',
        label:'Careers'
    },
    {
        to:'employer-home',
        component:'',
        label:'Employer home'
    },
    {
        to:'sitemap',
        component:'',
        label:'Sitemap'
    },
];
const FooterLinkStep2 = [
    {
        to:'help-center',
        component:'',
        label:'Help center'
    },
    {
        to:'summer-notice',
        component:'',
        label:'Summer notice'
    },
    {
        to:'grievance',
        component:'',
        label:'Grievance'
    },
    {
        to:'report-issue',
        component:'',
        label:'Report issue'
    },
];
const FooterLinkStep3 = [
    {
        to:'privacy-policy',
        component:'',
        label:'Privacy policy'
    },
    {
        to:'term-condions',
        component:'',
        label:'Term condions'
    },
    {
        to:'fraud-alert',
        component:'',
        label:'Fraud alert'
    },
    {
        to:'trust-safety',
        component:'',
        label:'Trust safety'
    },
];
const Constants = { SocialMedia, FooterLinkStep1, FooterLinkStep2, FooterLinkStep3 };
export default Constants;