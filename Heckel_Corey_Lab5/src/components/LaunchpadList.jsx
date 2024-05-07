import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LaunchpadListCard from './LaunchpadListCard';
import { Grid, Button } from '@mui/material';
import { useParams, useNavigate, Link } from 'react-router-dom';
import NotFound from './NotFound';
import '../App.css';

const LaunchpadList = () => {
  const [loading, setLoading] = useState(true);
  const [launchpadData, setLaunchpadData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const { page: pageNumber } = useParams();
  const navigate = useNavigate();
  const limit = 10;

  useEffect(() => {
    setPage(parseInt(pageNumber) || 1);
  }, [pageNumber]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post('https://api.spacexdata.com/v4/launchpads/query', {
        query: {},
        options: {
          limit,
          page,
          totalPages,
        },
      });
      setLaunchpadData(data.docs);
      setTotalPages(data.totalPages);
      setLoading(false);
      if (page !== undefined && (parseInt(page) < 0 || parseInt(page) > data.totalPages)) {
        navigate('/404', { replace: true });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  

  return (
    <div>
       <Link to="/">Return to all listings</Link>
      <br />
      <br />
      <Grid container spacing={2} sx={{ flexGrow: 1, flexDirection: 'row' }}>
        {launchpadData.map((launchpad) => (
          <LaunchpadListCard launchpad={launchpad} key={launchpad.id} />
        ))}
      </Grid>
      <br />
      <Button onClick={handlePrevPage} disabled={page === 1}>
        Previous Page
      </Button>
      <Button onClick={handleNextPage} disabled={page === totalPages}>
        Next Page
      </Button>
    </div>
  );
};

export default LaunchpadList;