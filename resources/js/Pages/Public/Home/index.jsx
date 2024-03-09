import React, {Fragment} from 'react';
import { Button, Grid, InputAdornment, Rating, TextField, Typography } from '@mui/material';
import HomeBanner from './Component/HomeBanner';
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import CategoryCard from './Component/Catgories';
import PopularJob from './Component/PopularJob';
import Testimonal from './Component/Testimonal';
import JobSteps from './Component/JobSteps';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Home(){
    return(
        <Fragment>
            <Grid container sx={{
                background: '#E7F2FF',
                height: '500px',
                marginTop: '60px',
            }}
            >
                <Grid lg={6} item p={5} display={'flex'} alignItems={'flex-start'} flexDirection={'column'} justifyContent={'center'}>
                    <Typography variant='h4' lineHeight={1.5} fontWeight={'bolder'}>There are <span style={{color:'blue'}}>1,26,366</span> job<br /><span style={{color:'blue'}}>opportunities</span> for you</Typography>
                    <Typography variant='caption' mt={2}>Find Jobs, Employment and Career opportunities</Typography>
                    <Box display={'flex'} alignItems={'center'} width={'100%'}>
                        <TextField
                            label="Search"
                            id="search-job"
                            sx={{ mt: 2, width:'50%' }}
                            size='small'
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <SearchIcon/>
                                </InputAdornment>,
                            }}
                        />
                        <Button sx={{mt:2, ml:2}} variant='contained'>Find Job</Button>
                    </Box>
                </Grid>
                <Grid lg={6} item mt={10} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                    <HomeBanner />
                </Grid>
            </Grid>
            <Grid container spacing={5} p={3}>
                <Grid item lg={12} mt={3} >
                    <Typography variant='h4' textAlign={'center'} fontWeight={'bold'}>Find Jobs in <span style={{color:'blue'}}>Categories</span></Typography>
                </Grid>
                {
                    Array(9).fill("").map((value, index) => {
                        return <Grid key={index} item lg={4}>
                            <CategoryCard />
                        </Grid>
                    })
                }
            </Grid>
            
            <Grid container spacing={2} p={3}>
                <Grid item lg={12} mt={3} >
                    <Typography variant='h4' textAlign={'center'} fontWeight={'bolder'}>Polpular <span style={{color:'blue'}}>Jobs</span></Typography>
                </Grid>
                <Grid item lg={3}>
                    <PopularJob />
                </Grid>
                <Grid item lg={3}>
                    <PopularJob />
                </Grid>
                <Grid item lg={3}>
                    <PopularJob />
                </Grid>
                <Grid item lg={3}>
                    <PopularJob />
                </Grid>
            </Grid>

            <Grid container spacing={1} p={3}>
                <Grid item lg={12} mt={3} >
                    <Typography variant='h4' textAlign={'center'} fontWeight={'bolder'}><span style={{color:'blue'}}>Testimonals</span> of our customers</Typography>
                    <Typography textAlign={'center'} component={'div'} fontWeight={'bolder'} variant={"caption"} color={'#536269'}>Here from our customer what they say about our services</Typography>
                </Grid>
                <Grid item lg={4} mt={2}>
                    <Testimonal />
                </Grid>
                <Grid item lg={4} mt={2}>
                    <Testimonal />
                </Grid>
                <Grid item lg={4} mt={2}>
                    <Testimonal />
                </Grid>
            </Grid>
            <Grid container spacing={1} p={3}>
                <Grid item lg={12} mt={3}>
                    <Typography variant='h4' textAlign={'center'} fontWeight={'bolder'}>Our <span style={{color:'blue'}}>Partners</span></Typography>
                </Grid>
                <Grid item lg={6} sx={{paddingLeft:'120px !important', paddingTop:'120px !important'}}>
                    <Typography variant='h4' fontWeight={'bolder'} color={'blue'}>Easy Steps to Apply</Typography>
                    <Typography color={'text-secondary'} fontWeight={'bolder'}>Apply to your dream jobs in just 3 easy steps</Typography>
                    <Box display={'flex'} mt={2}>
                        <CheckCircleIcon sx={{marginRight:'10px', color: 'blue'}} />
                        <Typography>Search for relevant jobs in your field</Typography>
                    </Box>
                    <Box display={'flex'} mt={2}>
                        <CheckCircleIcon sx={{marginRight:'10px', color: 'blue'}} />
                        <Typography>Fill application form and attach resume</Typography>
                    </Box>
                    <Box display={'flex'} mt={2}>
                        <CheckCircleIcon sx={{marginRight:'10px', color: 'blue'}} />
                        <Typography>Use our experts advice and follow up</Typography>
                    </Box>
                </Grid>
                <Grid item lg={6} textAlign={'center'}>
                    <JobSteps />
                </Grid>
            </Grid>
            <Grid p={10} mx={25} mt={10} sx={{background:'#84baf9', borderRadius:'20px'}} >
                <Typography variant='h2' textAlign={'center'} color={'white'} fontWeight={'bolder'}>Start Your <span style={{color:'blue'}}>Professional</span> Career with us</Typography>
                <Typography textAlign={'center'} mt={4} fontWeight={'bolder'}>Join our team and make your dream come true</Typography>
                <Box textAlign={'center'} mt={5}>
                    <Button variant='contained'>Join Now</Button>
                </Box>
            </Grid>
            <Grid container spacing={1} p={3}>
                <Grid item lg={12} mt={1} mb={5}>
                    <Typography variant='h4' textAlign={'center'} fontWeight={'bolder'}><span style={{color:'blue'}}>About</span></Typography>
                    <Typography variant='h4' textAlign={'center'} fontWeight={'bolder'} fontSize={18}>Know Us</Typography>
                    <Typography textAlign={'center'} variant='subtitle1' m={10} my={0} p={4}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus.
                    </Typography>
                </Grid>
            </Grid>
            {/* <Box component="main" sx={{ p: 10 }}>
                <Typography textAlign={'justify'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
                    fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
                    aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
                    cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
                    at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
                    Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
                    numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
                    asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
                    assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
                    soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
                    ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
                    soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
                    Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
                    delectus quo eius exercitationem tempore. Delectus sapiente, provident
                    corporis dolorum quibusdam aut beatae repellendus est labore quisquam
                    praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
                    deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
                    fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
                    recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
                    debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
                    praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
                    voluptate iure labore, repellendus beatae quia unde est aliquid dolor
                    molestias libero. Reiciendis similique exercitationem consequatur, nobis
                    placeat illo laudantium! Enim perferendis nulla soluta magni error,
                    provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
                    iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
                    Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
                    reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
                    cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
                    consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
                    Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
                    dolores sunt inventore perferendis, aut sapiente modi nesciunt.
                </Typography>
            </Box> */}
        </Fragment>
    );
}