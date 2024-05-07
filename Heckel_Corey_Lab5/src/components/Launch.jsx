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

const Launch = (props) => {
  const [launchData, setLaunchData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  // const classes = useStyles();
  let {id} = useParams();

  useEffect(() => {
    console.log('Launch useEffect fired');
    async function fetchData() {
      try {
        const {data: launch} = await axios.get(
          `https://api.spacexdata.com/v4/launches/${id}`
        );
        setLaunchData(launch);
        setLoading(false);
        console.log(launch);
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
          title={launchData.serial}
          sx={{
            borderBottom: '1px solid #1e8678',
            fontWeight: 'bold'
          }}
        />
        <CardMedia
          component='img'
          image={
            launchData.links && launchData.links.patch && launchData.links.patch.small
            ? launchData.links.patch.small
            : noImage
          }
          title='launch image'
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
                <dt className='title'>Fairings:</dt>
                <strong>Reused:</strong> {launchData.fairings.reused ? "true" : "false"}<br />
                <strong>Recovery Attempt:</strong> {launchData.fairings.recovery_attempt ? "true" : "false"}<br />
                <strong>Recovered:</strong> {launchData.fairings.recovered ? "true" : "false"}<br />
                </p>
                <strong>Ships:</strong> {launchData.fairings.ships.length > 0 ? (
                  <ul>
                    {launchData.fairings.ships.map((ship, index) => (
                      <li key={index}><Link to={`/ships/${ship}`}>{ship}</Link></li>
                    ))}
                  </ul>
                ) : "N/A"}
            
              
              <p>
                <dt className='title'>Campaign:</dt>
                {launchData.links.reddit && launchData.links.reddit.campaign ? (
                  <dd>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href={launchData.links.reddit.campaign}
                    >
                      {launchData.name} Campaign
                    </a>
                  </dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Launch:</dt>
                {launchData.links.reddit && launchData.links.reddit.launch ? (
                  <dd>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href={launchData.links.reddit.launch}
                    >
                      {launchData.name} Launch
                    </a>
                  </dd>
                ) : (
                  <dd>N/A</dd>
                )}
                </p>
              <p>
                <dt className='title'>Media:</dt>
                {launchData.links.reddit && launchData.links.reddit.media ? (
                  <dd>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href={launchData.links.reddit.media}
                    >
                      {launchData.name} Media
                    </a>
                  </dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Recovery:</dt>
                {launchData.links.reddit && launchData.links.reddit.recovery ? (
                  <dd>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href={launchData.links.reddit.recovery}
                    >
                      {launchData.name} Recovery
                    </a>
                  </dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Presskit:</dt>
                {launchData.links && launchData.links.presskit ? (
                  <dd>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href={launchData.links.presskit}
                    >
                      {launchData.name} Presskit
                    </a>
                  </dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Webcast:</dt>
                {launchData.links && launchData.links.webcast ? (
                  <dd>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href={launchData.links.webcast}
                    >
                      {launchData.name} Webcast
                    </a>
                  </dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Article:</dt>
                {launchData.links && launchData.links.article ? (
                  <dd>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href={launchData.links.article}
                    >
                      {launchData.name} Article
                    </a>
                  </dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Wikipedia:</dt>
                {launchData.links && launchData.links.wikipedia ? (
                  <dd>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href={launchData.links.wikipedia}
                    >
                      {launchData.name} Wikipedia
                    </a>
                  </dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Rocket:</dt>
                {launchData && launchData.rocket ? (
                <dd>
                <Link to={`/rockets/${launchData.rocket}`}>{launchData.rocket}</Link>
                </dd>
                ) : (
                    <dd>N/A</dd>
                )}
                </p>
                <p>
                <dt className='title'>Success:</dt>
                {launchData && launchData.success ? (
                  <dd>{launchData.success ? "true" : "false"}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
                <dt className='title'>Failures:</dt>
                {launchData && launchData.failures && launchData.failures.length > 0 ? (
                <ul>
                {launchData.failures.map((failure, index) => (
                    <li key={index}>
                    <strong>Time:</strong> {failure.time || 'N/A'}<br />
                    <strong>Altitude:</strong> {failure.altitude || 'N/A'}<br />
                    <strong>Reason:</strong> {failure.reason || 'N/A'}
                    </li>
                ))}
                </ul>
            ) : (
                <p>No failures recorded.</p>
            )}
              <p>
                <dt className='title'>Details:</dt>
                {launchData && launchData.details ? (
                  <dd>{launchData.details}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
                <dt className='title'>Crew:</dt>
                {launchData && launchData.crew && launchData.crew.length > 0 ? (
                    <dd>
                    {launchData.crew.map((member, index) => (
                        <ul>
                            <li key={index}>{member}</li>
                        </ul>
                    ))}
                    </dd>
                  ) : (
                    <dd>N/A</dd>
                  )}
                <p>
                <dt className='title'>Ships:</dt>
                {launchData && launchData.ships && launchData.ships.length > 0 ? (
                    <dd>
                    {launchData.ships.map((ship, index) => (
                        <Link key={index} to={`/ships/${ship}`}>{ship}</Link>
                    ))}
                    </dd>
                ) : (
                    <dd>N/A</dd>
                )}
                </p>
                <p>
                <dt className='title'>Payloads:</dt>
                {launchData && launchData.payloads && launchData.payloads.length > 0 ? (
                    <dd>
                    {launchData.payloads.map((payload, index) => (
                        <Link key={index} to={`/payloads/${payload}`}>{payload}</Link>
                    ))}
                    </dd>
                ) : (
                    <dd>N/A</dd>
                )}
                </p>
                <p>
                <dt className='title'>Launch Pad:</dt>
                {launchData && launchData.launchpad ? (
                    <dd>
                    <Link to={`/launchpads/${launchData.launchpad}`}>{launchData.launchpad}</Link>
                    </dd>
                ) : (
                    <dd>N/A</dd>
                )}
                </p>
                <p>
                <dt className='title'>Date:</dt>
                {launchData && launchData.date_utc ? (
                  <dd>{launchData.date_utc}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
                <dt className='title'>Cores:</dt>
                {launchData && launchData.cores && launchData.cores.length > 0 ? (
                <ul>
                {launchData.cores.map((core, index) => (
                    <li key={index}>
                    <Link to={`/cores/${core.core}`}>{core.core}</Link><br />
                    <strong>Flight:</strong> {core.flight || 'N/A'}<br />
                    <strong>Gridfins:</strong> {core.gridfins ? "true" : "false" }<br />
                    <strong>Legs:</strong> {core.legs ? "true" : "false"}<br />
                    <strong>Reused:</strong> {core.reused ? "true" : "false"}<br />
                    <strong>Landing Attempt:</strong> {core.landing_attempt ? "true" : "false"}<br />
                    <strong>Landing Success:</strong> {core.landing_success || 'N/A'}<br />
                    <strong>Landing Type:</strong> {core.landing_type || 'N/A'}<br />
                    <strong>Landpad:</strong> {core.landpad || 'N/A'}
                    </li>
                ))}
                </ul>
            ) : (
                <p>No cores recorded.</p>
            )}
            </dl>
            <Link to='/launches/page/0'>Back to all Launches...</Link>
          </Typography>
        </CardContent>
      </Card>
    );
  }
};

export default Launch;