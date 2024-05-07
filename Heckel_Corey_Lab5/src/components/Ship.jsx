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

const Ship = (props) => {
  const [shipData, setShipData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  // const classes = useStyles();
  let {id} = useParams();

  useEffect(() => {
    console.log('Ship useEffect fired');
    async function fetchData() {
      try {
        const {data: ship} = await axios.get(
          `https://api.spacexdata.com/v4/ships/${id}`
        );
        setShipData(ship);
        setLoading(false);
        console.log(ship);
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
          title={shipData.serial}
          sx={{
            borderBottom: '1px solid #1e8678',
            fontWeight: 'bold'
          }}
        />
        <CardMedia
          component='img'
          image={
            shipData && shipData.image
            ? shipData.image
            : noImage
          }
          title='ship image'
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
                <dt className='title'>Last AIS Update:</dt>
                {shipData && shipData.last_ais_update ? (
                  <dd>{shipData.last_ais_update}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Legacy Id:</dt>
                {shipData && shipData.legacy_id ? (
                  <dd>{shipData.legacy_id}</dd>
                  ) : (
                    <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Model:</dt>
                {shipData && shipData.model ? (
                  <dd>{shipData.model}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Type:</dt>
                {shipData && shipData.type ? (
                  <dd>{shipData.type}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Roles:</dt>
                <dl>
                    {shipData.roles.map((role, index) => (
                    <p key={index}>
                        <dd>{role}</dd>
                    </p>
                    ))}
                </dl>
                </p>
              <p>
                <dt className='title'>IMO:</dt>
                {shipData && shipData.imo ? (
                  <dd>{shipData.imo}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>MMSI Landings:</dt>
                {shipData && shipData.mmsi ? (
                  <dd>{shipData.mmsi}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>ABS:</dt>
                {shipData &&  shipData.abs ? (
                  <dd>{shipData.abs}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Class:</dt>
                {shipData &&  shipData.class ? (
                  <dd>{shipData.class}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Mass (kg):</dt>
                {shipData &&  shipData.mass_kg ? (
                  <dd>{shipData.mass_kg}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Mass (lbs):</dt>
                {shipData &&  shipData.mass_lbs ? (
                  <dd>{shipData.mass_lbs}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Year Built:</dt>
                {shipData &&  shipData.year_built ? (
                  <dd>{shipData.year_built}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Home Port:</dt>
                {shipData &&  shipData.home_port ? (
                  <dd>{shipData.home_port}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Status:</dt>
                {shipData &&  shipData.status ? (
                  <dd>{shipData.status}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Speed (kn):</dt>
                {shipData &&  shipData.speed_kn ? (
                  <dd>{shipData.speed_kn}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Course Degree:</dt>
                {shipData &&  shipData.course_deg ? (
                  <dd>{shipData.course_deg}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Latitude:</dt>
                {shipData &&  shipData.latitude ? (
                  <dd>{shipData.latitude}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Longitude:</dt>
                {shipData &&  shipData.longitude ? (
                  <dd>{shipData.longitude}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Link:</dt>
                {shipData && shipData.link ? (
                  <dd>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href={shipData.link}
                    >
                      {shipData.link} Link
                    </a>
                  </dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Active:</dt>
                {shipData &&  shipData.active ? (
                  <dd>{shipData.active ? "true" : "false"}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Launches:</dt>
                {shipData && shipData.launches && shipData.launches.length > 0 ? (
                <dd>
                {shipData.launches.map((launch, index) => (
                    <Link key={index} to={`/launches/${launch}`}>{launch}</Link>
                    ))}
                    </dd>
                ) : (
                    <dd>N/A</dd>
                )}
                </p>
            </dl>
            <Link to='/ships/page/0'>Back to all Ships...</Link>
          </Typography>
        </CardContent>
      </Card>
    );
  }
};

export default Ship;