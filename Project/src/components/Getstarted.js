import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Getstarted = () => {
    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 800 },
    });

    return (
        <animated.div style={{ ...fadeIn, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 16, marginTop: '150px' }}>
            <Typography variant="h2" gutterBottom>
                You're one click away<br />from less busywork
            </Typography>

            <Button
                variant="contained"
                style={{ backgroundColor: '#4285f4', color: '#fff', marginBottom: 10 }}
                startIcon={<GoogleIcon style={{ marginRight: 10 }} />}
            >
                Sign in with Google
            </Button>

            <TextField
                label="Company Name"
                variant="outlined"
                size="medium"
                style={{ marginBottom: 10 }}
            />

            <Divider style={{ width: '50%', marginBottom: 10 }} />

            <Typography variant="caption" style={{ fontSize: 12, color: '#888' }}>
                By signing up, I agree to the Asana Privacy Policy and Terms of Service.
            </Typography>

            {/* Centered Container */}
            <div style={{alignItems: 'center'}}>
            <List style={{ textAlign: 'center',alignItems: 'center', width: '100%' }}>
                <ListItem disablePadding>
                    <CheckCircleIcon style={{  marginRight: 10 }} />
                    <Typography variant="body1">
                        Get access to unlimited tasks, projects, and storage.
                    </Typography>
                </ListItem>

                <ListItem disablePadding>
                    <CheckCircleIcon style={{  marginRight: 10 }} />
                    <Typography variant="body1">
                        See different views like list, board, and calendar.
                    </Typography>
                </ListItem>

                <ListItem disablePadding>
                    <CheckCircleIcon style={{  marginRight: 10 }} />
                    <Typography variant="body1">
                        Invite your teammates to explore Asana.
                    </Typography>
                </ListItem>
            </List>
            </div>
        </animated.div>
    );
};

export default Getstarted;
