import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import noImage from '../download.jpeg';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardHeader
} from '@mui/material';
import '../App.css';

const Launchpad = (props) => {
  const [launchpadData, setLaunchpadData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  // const classes = useStyles();
  let {id} = useParams();

  useEffect(() => {
    console.log('Launchpad useEffect fired');
    async function fetchData() {
      try {
        const {data: launchpad} = await axios.get(
          `https://api.spacexdata.com/v4/launchpads/${id}`
        );
        setLaunchpadData(launchpad);
        setLoading(false);
        console.log(launchpad);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    );
  } else {
    return (
      <Card
        variant='outlined'
        sx={{
          maxWidth: 550,
          height: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: 5,
          border: '1px solid #1e8678',
          boxShadow:
            '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);'
        }}
      >
        <CardHeader
          title={launchpadData.name}
          sx={{
            borderBottom: '1px solid #1e8678',
            fontWeight: 'bold'
          }}
        />
        <CardMedia
          component='img'
          image={
            launchpadData.images && launchpadData.images.large
            ? launchpadData.images.large
            : noImage
          }
          title='launchpad image'
        />

        <CardContent>
          <Typography
            variant='body2'
            color='textSecondary'
            component='span'
            sx={{
              borderBottom: '1px solid #1e8678',
              fontWeight: 'bold'
            }}
          >
            <dl>
              <p>
                <dt className='title'>Full Name:</dt>
                {launchpadData && launchpadData.full_name ? (
                  <dd>{launchpadData.full_name}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Locality:</dt>
                {launchpadData && launchpadData.locality ? (
                  <dd>{launchpadData.locality}</dd>
                  ) : (
                    <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Region:</dt>
                {launchpadData && launchpadData.region ? (
                  <dd>{launchpadData.region}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Latitude:</dt>
                {launchpadData && launchpadData.latitude ? (
                  <dd>{launchpadData.latitude}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Longitude:</dt>
                {launchpadData && launchpadData.longitude ? (
                  <dd>{launchpadData.longitude}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Launch Attempts:</dt>
                {launchpadData && launchpadData.launch_attempts ? (
                  <dd>{launchpadData.launch_attempts}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Launch Successes:</dt>
                {launchpadData &&  launchpadData.launch_successes ? (
                  <dd>{launchpadData.launch_successes}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Rockets:</dt>
                {launchpadData && launchpadData.rockets && launchpadData.rockets.length > 0 ? (
                <dd>
                {launchpadData.rockets.map((rocket, index) => (
                    <Link key={index} to={`/rockets/${rocket}`}>{rocket}</Link>
                    ))}
                    </dd>
                ) : (
                    <dd>N/A</dd>
                )}
                </p>
                <p>
                <dt className='title'>Timezone:</dt>
                {launchpadData && launchpadData.timezone ? (
                  <dd>{launchpadData.timezone}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Launches:</dt>
                {launchpadData && launchpadData.launches && launchpadData.launches.length > 0 ? (
                <dd>
                {launchpadData.launches.map((launch, index) => (
                    <Link key={index} to={`/launches/${launch}`}>{launch}</Link>
                    ))}
                    </dd>
                ) : (
                    <dd>N/A</dd>
                )}
                </p>
                <p>
                <dt className='title'>Status:</dt>
                {launchpadData && launchpadData.status ? (
                  <dd>{launchpadData.status}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Details:</dt>
                {launchpadData && launchpadData.details ? (
                  <dd>{launchpadData.details}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
            </dl>
            <Link to='/launchpads/page/0'>Back to all Launchpads...</Link>
          </Typography>
        </CardContent>
      </Card>
    );
  }
};

export default Launchpad;