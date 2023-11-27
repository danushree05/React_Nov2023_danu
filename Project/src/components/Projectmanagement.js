import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Typography, Grid, Container,Button } from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
import { Link } from 'react-router-dom';

const Projectmanagement = () => {
    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 800 },
    });

    return (
        <animated.div style={{ ...fadeIn, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 16, marginTop: '50px' }}>
            {/* Section 1: Projects Text */}
            <Typography variant="h2" align="center" gutterBottom>
                Projects
            </Typography>
            <Typography variant="h4" align="center" paragraph>
                Organize tasks and tackle work together in a shared hub.
            </Typography>

            {/* Section 2: Image */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                {/* Replace 'image-link.jpg' with the actual link to your image */}
                <img
                    src="https://assets.asana.biz/transform/b37bf456-1505-41ae-b41d-ed0c0db7c807/web-features-projects-header-2x-En-us?io=transform:fill,width:1240&format=webp"
                    alt="Project Management"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </div>

            {/* Section 3: Icon and Text Grid */}
            <Grid container spacing={2} style={{ justifyContent: 'center', marginBottom: '20px' ,marginTop:'50px',background:'#E8E8E8',height: '50vh',alignItems:'center'}}>
                {/* Replace 'icon-link1' with the actual link to your icon */}
                <Grid item xs={12} md={4}>
                    <Container style={{ textAlign: 'center' }}>
                        <img
                            src="https://assets.asana.biz/m/2712bea2ccd44514/original/Manage-users-features.svg"
                            alt="Icon 1"
                            style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                        />
                        <Typography variant="body1">
                            Organize your way Customize project sections and switch between layouts: gantt, list,
                            calendar, board, or timeline.
                        </Typography>
                    </Container>
                </Grid>

                {/* Replace 'icon-link2' with the actual link to your icon */}
                <Grid item xs={12} md={4}>
                    <Container style={{ textAlign: 'center' }}>
                        <img
                            src="https://assets.asana.biz/m/417e79dadb1bc26c/original/Status-icon.svg"
                            alt="Icon 2"
                            style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                        />
                        <Typography variant="body1">
                            Move faster Kick off instantly with project templates, and add automations to reduce
                            manual work.
                        </Typography>
                    </Container>
                </Grid>

                {/* Replace 'icon-link3' with the actual link to your icon */}
                <Grid item xs={12} md={4}>
                    <Container style={{ textAlign: 'center' }}>
                        <img
                            src="https://assets.asana.biz/m/61d492178a74e9ce/original/features-support-icon-1.svg"
                            alt="Icon 3"
                            style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                        />
                        <Typography variant="body1">
                            Keep work on track Use automatic reporting to see how your project is performing in
                            real-time.
                        </Typography>
                    </Container>
                </Grid>
            </Grid>
            <Typography variant='h3'sx={{marginTop:'40px'}}>
            Build your project
            </Typography>
            <Typography variant='h4' sx={{marginTop:'20px'}}>

Create a shared hub for collaborative work with these features.
            </Typography>
            <Grid container spacing={2} style={{ justifyContent: 'center', marginTop: '50px' }}>
            {/* Box 1 */}
            <Grid item xs={12} sm={6} md={3}>
                <Container style={{ textAlign: 'center', padding: '20px', background: '#E8E8E8', borderRadius: '8px' }}>
                    {/* Replace 'icon-link1' with the actual link to your icon */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/721/721644.png"
                        alt="Icon 1"
                        style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                    />
                    <Typography variant="h5">Templates</Typography>
                    <Typography variant="body2">Standardize your team’s best practices with ready-made guides for projects and tasks.</Typography>
                </Container>
            </Grid>

            {/* Box 2 */}
            <Grid item xs={12} sm={6} md={3}>
                <Container style={{ textAlign: 'center', padding: '20px', background: '#E8E8E8', borderRadius: '8px' }}>
                    {/* Replace 'icon-link2' with the actual link to your icon */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/839/839860.png"
                        alt="Icon 2"
                        style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                    />
                    <Typography variant="h6">Tasks</Typography>
                    <Typography variant="body2">Break work into bite-size pieces with clear owners and due dates.</Typography>
                </Container>
            </Grid>

            {/* Box 3 */}
            <Grid item xs={12} sm={6} md={3}>
                <Container style={{ textAlign: 'center', padding: '20px', background: '#E8E8E8', borderRadius: '8px' }}>
                    {/* Replace 'icon-link3' with the actual link to your icon */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                        alt="Icon 3"
                        style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                    />
                    <Typography variant="h6">Project views</Typography>
                    <Typography variant="body2">Organize your work as a list, calendar, timeline, Gantt chart, or Kanban board.</Typography>
                </Container>
            </Grid>

            {/* Box 4 */}
            <Grid item xs={12} sm={6} md={3}>
                <Container style={{ textAlign: 'center', padding: '20px', background: '#E8E8E8', borderRadius: '8px' }}>
                    {/* Replace 'icon-link4' with the actual link to your icon */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/4228/4228921.png"
                        alt="Icon 4"
                        style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                    />
                    <Typography variant="h6">Custom Fields</Typography>
                    <Typography variant="body2">Add labels to tasks so you can sort, filter, and automatically report on work.</Typography>
                </Container>
            </Grid>
        </Grid>
            <Grid container spacing={2} style={{ justifyContent: 'center', marginTop: '50px' }}>
            {/* Box 1 */}
            <Grid item xs={12} sm={6} md={3}>
                <Container style={{ textAlign: 'center', padding: '20px', background: '#E8E8E8', borderRadius: '8px' }}>
                    {/* Replace 'icon-link1' with the actual link to your icon */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/7050/7050554.png"
                        alt="Icon 1"
                        style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                    />
                    <Typography variant="h5">Rules</Typography>
                    <Typography variant="body2">Automate routine tasks to get more done, faster.Organize tasks and tackle</Typography>
                </Container>
            </Grid>

            {/* Box 2 */}
            <Grid item xs={12} sm={6} md={3}>
                <Container style={{ textAlign: 'center', padding: '20px', background: '#E8E8E8', borderRadius: '8px' }}>
                    {/* Replace 'icon-link2' with the actual link to your icon */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/3447/3447545.png"
                        alt="Icon 2"
                        style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                    />
                    <Typography variant="h6">Forms</Typography>
                    <Typography variant="body2">Standardize work requests so your team has the information they need from the start.</Typography>
                </Container>
            </Grid>

            {/* Box 3 */}
            <Grid item xs={12} sm={6} md={3}>
                <Container style={{ textAlign: 'center', padding: '20px', background: '#E8E8E8', borderRadius: '8px' }}>
                    {/* Replace 'icon-link3' with the actual link to your icon */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/2645/2645897.png"
                        alt="Icon 3"
                        style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                    />
                    <Typography variant="h6">Status updates</Typography>
                    <Typography variant="body2">Craft project updates in minutes with time-saving automations.</Typography>
                </Container>
            </Grid>

            {/* Box 4 */}
            <Grid item xs={12} sm={6} md={3}>
                <Container style={{ textAlign: 'center', padding: '20px', background: '#E8E8E8', borderRadius: '8px' }}>
                    {/* Replace 'icon-link4' with the actual link to your icon */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/2930/2930617.png"
                        alt="Icon 4"
                        style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                    />
                    <Typography variant="h6">Reporting dashboards</Typography>
                    <Typography variant="body2">Uncover the state of your team’s work with real-time data</Typography>
                </Container>
            </Grid>
        </Grid>
        <Grid container spacing={2} style={{ justifyContent: 'center', marginTop: '50px' ,display: 'flex', alignItems: 'center'}}>
            {/* Image on the Left */}
            <Grid item xs={12} md={6}>
                <Container style={{ textAlign: 'center',display: 'flex', alignItems: 'center'}}>
                    <img
                        src="https://assets.asana.biz/transform/165e2255-86da-40d0-8edd-56c0e2ba947d/features-projects-ui-1?io=transform:fill,width:960&format=webp"  // Replace with the actual link to your image
                        alt="Section Image"
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                </Container>
            </Grid>

            {/* Text on the Right */}
            <Grid item xs={12} md={6}>
                <Container style={{ padding: '20px',  borderRadius: '8px' }}>
                    <Typography variant="h4" textAlign="center" gutterBottom>
                    Make it yours
                    </Typography>
                    <Typography variant="body1">
                    Choose a color: Customize your project icon to set it apart from other work. 

Create sections: Organize tasks however you want with custom sections. 

Save your layout: Create a template from any project to save your best practices for the future.

See projects your way: Surface the most relevant information for your team by creating multiple custom views within a project.
                    </Typography>
                </Container>
            </Grid>
        </Grid>
        <Grid container spacing={2} style={{ justifyContent: 'center', marginTop: '50px' ,display: 'flex', alignItems: 'center'}}>
           

            {/* Text on the Right */}
            <Grid item xs={12} md={6}>
                <Container style={{ padding: '20px',  borderRadius: '8px' }}>
                    <Typography variant="h4" textAlign="center" gutterBottom>
                    
                    Work together
                    </Typography>
                    <Typography variant="body1">
Build your project overview: Assign roles, create a project brief, and add resources so everyone is on the same page. 

Manage communications: Choose which project members get notified when you add tasks, publish status updates, or send messages.

Collaborate with external partners: Share read-only links so people outside Asana can view your project securely.


                    </Typography>
                </Container>
            </Grid>
             {/* Image on the Left */}
             <Grid item xs={12} md={6}>
                <Container style={{ textAlign: 'center',display: 'flex', alignItems: 'center'}}>
                    <img
                        src="https://assets.asana.biz/transform/431b8a36-8bd7-491c-8708-d8497f7219f1/features-projects-ui-2?io=transform:fill,width:960&format=webp"  // Replace with the actual link to your image
                        alt="Section Image"
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                </Container>
            </Grid>
        </Grid>
        <div style={{ backgroundColor: '#000', color: '#fff', textAlign: 'center', padding: '50px 0',width:'100%',marginTop:'20px',height:'20vh' }}>
            <Container>
                <Typography variant="h4" gutterBottom>
                    One project, across teams
                </Typography>
                <Typography variant="body1" paragraph>
                    Work together in one hub, no matter which team you’re on.
                </Typography>
                <Button component={Link} to="/getstarted" variant="contained" color="primary">
                    Get Started
                </Button>
            </Container>
        </div>
        </animated.div>
    );
};

export default Projectmanagement;
