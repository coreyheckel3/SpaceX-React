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

const Payload = (props) => {
  const [payloadData, setPayloadData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  // const classes = useStyles();
  let {id} = useParams();

  useEffect(() => {
    console.log('Payload useEffect fired');
    async function fetchData() {
      try {
        const {data: payload} = await axios.get(
          `https://api.spacexdata.com/v4/payloads/${id}`
        );
        setPayloadData(payload);
        setLoading(false);
        console.log(payload);
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
          title={payloadData.name}
          sx={{
            borderBottom: '1px solid #1e8678',
            fontWeight: 'bold'
          }}
        />
        <CardMedia
          component='img'
          image={
            noImage
          }
          title='payload image'
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
            <dl>
            <dt className='title'>Dragon:</dt>
            {payloadData.dragon ? (
              <>
                <p>
                  <strong>Capsule:</strong> {payloadData.dragon.capsule || 'N/A'}<br />
                  <strong>Mass Returned kg:</strong> {payloadData.dragon.mass_returned_kg || 'N/A'} kg<br />
                  <strong>Mass Returned lbs:</strong> {payloadData.dragon.mass_returned_lbs || 'N/A'} lbs <br />
                  <strong>Flight Time:</strong> {payloadData.dragon.flight_time_sec || 'N/A'} s<br />
                  <strong>Manifest:</strong> {payloadData.dragon.manifest || 'N/A'}<br />
                  <strong>Water Landing:</strong> {payloadData.dragon.water_landing || 'N/A'}<br />
                  <strong>Land Landing:</strong> {payloadData.dragon.land_landing || 'N/A'}<br />
                </p>
              </>
            ) : (
              <p>No Dragon.</p>
            )}
          </dl>
              <p>
                <dt className='title'>Type:</dt>
                {payloadData && payloadData.type ? (
                  <dd>{payloadData.type}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Reused:</dt>
                {payloadData && payloadData.reused ? (
                  <dd>{payloadData.reused ? "true" : "false"}</dd>
                  ) : (
                    <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Launch:</dt>
                {payloadData && payloadData.launch ? (
                <dd>
                <Link to={`/launches/${payloadData.launch}`}>{payloadData.launch}</Link>
                </dd>
                ) : (
                    <dd>N/A</dd>
                )}
                </p>
                <dt className='title'>Customers:</dt>
                {payloadData.customers && payloadData.customers.length > 0 ? (
                  <dd>
                    {payloadData.customers.map((customer, index) => (
                      <ul key={index}>
                        <li>{customer}</li>
                      </ul>
                    ))}
                  </dd>
                ) : (
                  <dd>N/A</dd>
                )}
                <dt className='title'>Norad Ids:</dt>
                {payloadData && payloadData.norad_ids && payloadData.norad_ids.length > 0 ? (
                    <dd>
                    {payloadData.norad_ids.map((id, index) => (
                        <ul>
                            <li key={index}>{id}</li>
                        </ul>
                    ))}
                    </dd>
                  ) : (
                    <dd>N/A</dd>
                  )}
                <dt className='title'>Nationalities:</dt>
                {payloadData.nationalities && payloadData.nationalities.length > 0 ? (
                  <dd>
                    {payloadData.nationalities.map((nationality, index) => (
                      <ul key={index}>
                        <li>{nationality}</li>
                      </ul>
                    ))}
                  </dd>
                ) : (
                  <dd>N/A</dd>
                )}
                <dt className='title'>Manufacturers:</dt>
                {payloadData.manufacturers && payloadData.manufacturers.length > 0 ? (
                  <dd>
                    {payloadData.manufacturers.map((manufacturer, index) => (
                      <ul key={index}>
                        <li>{manufacturer}</li>
                      </ul>
                    ))}
                  </dd>
                ) : (
                  <dd>N/A</dd>
                )}

              <p>
                <dt className='title'>Mass Kg:</dt>
                {payloadData && payloadData.mass_kg ? (
                  <dd>{payloadData.mass_kg} kg</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Mass Lbs:</dt>
                {payloadData && payloadData.mass_lbs ? (
                  <dd>{payloadData.mass_lbs}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Orbit:</dt>
                {payloadData && payloadData.orbit ? (
                  <dd>{payloadData.orbit}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Reference System:</dt>
                {payloadData && payloadData.reference_system ? (
                  <dd>{payloadData.reference_system}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Regime:</dt>
                {payloadData &&  payloadData.regime ? (
                  <dd>{payloadData.regime}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
                <p>
                <dt className='title'>Longitutde:</dt>
                {payloadData && payloadData.longitude ? (
                  <dd>{payloadData.longitude}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Semi Major Axis:</dt>
                {payloadData && payloadData.semi_major_axis_km ? (
                  <dd>{payloadData.semi_major_axis_km}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Eccentricity:</dt>
                {payloadData && payloadData.eccentricity ? (
                  <dd>{payloadData.eccentricity}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Periapsis:</dt>
                {payloadData && payloadData.periapsis_km ? (
                  <dd>{payloadData.periapsis_km}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Apoapsis:</dt>
                {payloadData && payloadData.apoapsis_km ? (
                  <dd>{payloadData.apoapsis_km}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Inclination:</dt>
                {payloadData && payloadData.inclination_deg ? (
                  <dd>{payloadData.inclination_deg}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Period:</dt>
                {payloadData && payloadData.period ? (
                  <dd>{payloadData.period} min</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Lifespan:</dt>
                {payloadData && payloadData.lifespan ? (
                  <dd>{payloadData.lifespan} years</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Epoch:</dt>
                {payloadData && payloadData.epoch ? (
                  <dd>{payloadData.epoch}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Mean Notation:</dt>
                {payloadData && payloadData.mean_notation ? (
                  <dd>{payloadData.mean_notation}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Raan:</dt>
                {payloadData && payloadData.raan ? (
                  <dd>{payloadData.raan}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
            </dl>
            <Link to='/payloads/page/0'>Back to all Payloads...</Link>
          </Typography>
        </CardContent>
      </Card>
    );
  }
};

export default Payload;