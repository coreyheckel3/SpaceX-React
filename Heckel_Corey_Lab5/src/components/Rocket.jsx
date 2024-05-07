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

const Rocket = (props) => {
  const [rocketData, setRocketData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  // const classes = useStyles();
  let {id} = useParams();

  useEffect(() => {
    console.log('Rocket useEffect fired');
    async function fetchData() {
      try {
        const {data: rocket} = await axios.get(
          `https://api.spacexdata.com/v4/rockets/${id}`
        );
        setRocketData(rocket);
        setLoading(false);
        console.log(rocket);
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
          title={rocketData.name}
          sx={{
            borderBottom: '1px solid #1e8678',
            fontWeight: 'bold'
          }}
        />
        <CardMedia
          component='img'
          image={
            rocketData.flickr_images && rocketData.flickr_images[0]
            ? rocketData.flickr_images[0]
            : noImage
          }
          title='rocket image'
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
                <dt className='title'>Height (m):</dt>
                {rocketData.height && rocketData.height.meters ? (
                  <dd>{rocketData.height.meters}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Height (ft):</dt>
                {rocketData.height && rocketData.height.feet ? (
                  <dd>{rocketData.height.feet}</dd>
                  ) : (
                    <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Diameter (m):</dt>
                {rocketData.diameter && rocketData.diameter.meters ? (
                  <dd>{rocketData.diameter.meters}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Diameter (ft):</dt>
                {rocketData.diameter && rocketData.diameter.feet ? (
                  <dd>{rocketData.diameter.feet}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Mass (kg):</dt>
                {rocketData.mass && rocketData.mass.kg ? (
                  <dd>{rocketData.mass.kg}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Mass (lb):</dt>
                {rocketData.mass && rocketData.mass.lb ? (
                  <dd>{rocketData.mass.lb}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
            <dt className='title'>First Stage:</dt>
            <dl>
                <p>
                <dt>Thrust Sea Level:</dt>
                <dd>
                    <strong>kN:</strong> {rocketData.first_stage.thrust_sea_level.kN || 'N/A'}, 
                    <strong>lbf:</strong> {rocketData.first_stage.thrust_sea_level.lbf || 'N/A'}
                </dd>
                </p>
                <p>
                <dt>Thrust Vacuum:</dt>
                <dd>
                    <strong>kN:</strong> {rocketData.first_stage.thrust_vacuum.kN || 'N/A'}, 
                    <strong>lbf:</strong> {rocketData.first_stage.thrust_vacuum.lbf || 'N/A'}
                </dd>
                </p>
                <p>
                <dt>Reusable:</dt>
                <dd>{rocketData.first_stage.reusable ? "true" : "false"}</dd>
                </p>
                <p>
                <dt>Engines:</dt>
                <dd>{rocketData.first_stage.engines || 'N/A'}</dd>
                </p>
                <p>
                <dt>Fuel Amount (tons):</dt>
                <dd>{rocketData.first_stage.fuel_amount_tons || 'N/A'}</dd>
                </p>
                <p>
                <dt>Burn Time (sec):</dt>
                <dd>{rocketData.first_stage.burn_time_sec || 'N/A'}</dd>
                </p>
            </dl>
            <dt className='title'>Second Stage:</dt>
            <dl>
                <p>
                <dt>Thrust:</dt>
                <dd>
                    <strong>kN:</strong> {rocketData.second_stage.thrust.kN || 'N/A'}, 
                    <strong>lbf:</strong> {rocketData.second_stage.thrust.lbf || 'N/A'}
                </dd>
                </p>
                <dt>Payloads:</dt>
                <dd>
                    <ul>
                    <li>
                        <strong>Composite Fairing:</strong>
                        <ul>
                        <li>
                            <strong>Height:</strong> {rocketData.second_stage.payloads.composite_fairing.height.meters || 'N/A'} meters / {rocketData.second_stage.payloads.composite_fairing.height.feet || 'N/A'} feet
                        </li>
                        <li>
                            <strong>Diameter:</strong> {rocketData.second_stage.payloads.composite_fairing.diameter.meters || 'N/A'} meters / {rocketData.second_stage.payloads.composite_fairing.diameter.feet || 'N/A'} feet
                        </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Option 1:</strong> {rocketData.second_stage.payloads.option_1 || 'N/A'}
                    </li>
                    </ul>
                </dd>
                <p>
                <dt>Reusable:</dt>
                <dd>{rocketData.second_stage.reusable ? "true" : "false"}</dd>
                </p>
                <p>
                <dt>Engines:</dt>
                <dd>{rocketData.second_stage.engines || 'N/A'}</dd>
                </p>
                <p>
                <dt>Fuel Amount (tons):</dt>
                <dd>{rocketData.second_stage.fuel_amount_tons || 'N/A'}</dd>
                </p>
                <p>
                <dt>Burn Time (sec):</dt>
                <dd>{rocketData.second_stage.burn_time_sec || 'N/A'}</dd>
                </p>
            </dl>
            <dt className='title'>Engines:</dt>
            <dl>
                <p>
                <dt>ISP:</dt>
                <dd>
                    <strong>Sea Level:</strong> {rocketData.engines.isp.sea_level || 'N/A'}, 
                    <strong>Vacuum:</strong> {rocketData.engines.isp.vacuum || 'N/A'}
                </dd>
                </p>
                <p>
                <dt>Thrust Sea Level:</dt>
                <dd>
                    <strong>kN:</strong> {rocketData.engines.thrust_sea_level.kN || 'N/A'}, 
                    <strong>lbf:</strong> {rocketData.engines.thrust_sea_level.lbf || 'N/A'}
                </dd>
                </p>
                <p>
                <dt>Thrust Vacuum:</dt>
                <dd>
                    <strong>kN:</strong> {rocketData.engines.thrust_vacuum.kN || 'N/A'}, 
                    <strong>lbf:</strong> {rocketData.engines.thrust_vacuum.lbf|| 'N/A'}
                </dd>
                </p>
                <p>
                <dt>Number:</dt>
                <dd>{rocketData.engines.number || 'N/A'}</dd>
                </p>
                <p>
                <dt>Type:</dt>
                <dd>{rocketData.engines.type || 'N/A'}</dd>
                </p>
                <p>
                <dt>Version:</dt>
                <dd>{rocketData.engines.version || 'N/A'}</dd>
                </p>
                <p>
                <dt>Layout:</dt>
                <dd>{rocketData.engines.layout || 'N/A'}</dd>
                </p>
                <p>
                <dt>Engine Loss Max:</dt>
                <dd>{rocketData.engines.engine_loss_max || 'N/A'}</dd>
                </p>
                <p>
                <dt>Propellant 1:</dt>
                <dd>{rocketData.engines.propellant_1 || 'N/A'}</dd>
                </p>
                <p>
                <dt>Propellant 2:</dt>
                <dd>{rocketData.engines.propellant_2 || 'N/A'}</dd>
                </p>
                <p>
                <dt>Thrust to Weight:</dt>
                <dd>{rocketData.engines.thrust_to_weight || 'N/A'}</dd>
                </p>
            </dl>
            <dt className='title'>Landing Legs:</dt>
            <dl>
                <p>
                <dt>Number:</dt>
                <dd>{rocketData.landing_legs.number || 'N/A'}</dd>
                </p>
                <p>
                <dt>Material:</dt>
                <dd>{rocketData.landing_legs.material || 'N/A'}</dd>
                </p>
            </dl>
            <dt className='title'>Payload Weights:</dt>
            <dl>
                {rocketData.payload_weights.map((payload, index) => (
                <p key={index}>
                    <dt>ID:</dt>
                    <dd>{payload.id || 'N/A'}</dd>
                    <dt>Name:</dt>
                    <dd>{payload.name || 'N/A'}</dd>
                    <dt>Kilograms:</dt>
                    <dd>{payload.kg || 'N/A'}</dd>
                    <dt>Pounds:</dt>
                    <dd>{payload.lb || 'N/A'}</dd>
                </p>
                ))}
            </dl>
              <p>
                <dt className='title'>Type:</dt>
                {rocketData &&  rocketData.type ? (
                  <dd>{rocketData.type}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
                <p>
                <dt className='title'>Active:</dt>
                {rocketData && rocketData.active ? (
                  <dd>{rocketData.active ? "true" : "false"}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Stages:</dt>
                {rocketData && rocketData.stages ? (
                  <dd>{rocketData.stages}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Boosters:</dt>
                {rocketData && rocketData.boosters ? (
                  <dd>{rocketData.boosters}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Cost Per Launch:</dt>
                {rocketData && rocketData.cost_per_launch ? (
                  <dd>{rocketData.cost_per_launch}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Success Rate:</dt>
                {rocketData && rocketData.success_rate_pct ? (
                  <dd>{rocketData.success_rate_pct} %</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>First Flight:</dt>
                {rocketData && rocketData.first_flight ? (
                  <dd>{rocketData.first_flight}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Country:</dt>
                {rocketData && rocketData.country ? (
                  <dd>{rocketData.country}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Company:</dt>
                {rocketData && rocketData.company ? (
                  <dd>{rocketData.company}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Active:</dt>
                {rocketData && rocketData.active ? (
                  <dd>{rocketData.active}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Wikipedia:</dt>
                {rocketData && rocketData.wikipedia ? (
                  <dd>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href={rocketData.wikipedia}
                    >
                      {rocketData.name} Wikipedia
                    </a>
                  </dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Description:</dt>
                {rocketData && rocketData.description ? (
                  <dd>{rocketData.description}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
            </dl>
            <Link to='/rockets/page/0'>Back to all Rockets...</Link>
          </Typography>
        </CardContent>
      </Card>
    );
  }
};

export default Rocket;