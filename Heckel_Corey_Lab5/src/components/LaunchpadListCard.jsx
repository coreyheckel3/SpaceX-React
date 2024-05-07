import React from 'react';
import noImage from '../download.jpeg';
import {Link} from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@mui/material';

function LaunchpadListCard({launchpad}) {
  const regex = /(<([^>]+)>)/gi;
  return (
    <Grid item xs={12} sm={7} md={5} lg={4} xl={3} key={launchpad.id}>
      <Card
        variant='outlined'
        sx={{
          maxWidth: 250,
          height: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: 5,
          border: '1px solid #1e8678',
          boxShadow:
            '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);'
        }}
      >
        <CardActionArea>
          <Link to={`/launchpads/${launchpad.id}`}>
            <CardMedia
              sx={{
                height: '100%',
                width: '100%'
              }}
              component='img'
              image={
                launchpad.images.large && launchpad.images.large[0]
                  ? launchpad.images.large[0]
                  : noImage
              }
              title='launchpad image'
            />

            <CardContent>
              <Typography
                sx={{
                  borderBottom: '1px solid #1e8678',
                  fontWeight: 'bold'
                }}
                gutterBottom
                variant='h6'
                component='h3'
              >
                {launchpad.name}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {launchpad.details
                  ? launchpad.details.replace(regex, '').substring(0, 139) + '...'
                  : 'No Details'}
                <span>More Info</span>
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default LaunchpadListCard;