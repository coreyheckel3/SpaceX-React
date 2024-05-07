import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LaunchListCard from './LaunchListCard';
import { Grid, Button } from '@mui/material';
import { useParams, useNavigate, Link } from 'react-router-dom';

import '../App.css';

const LaunchList = () => {
  const [loading, setLoading] = useState(true);
  const [launchData, setLaunchData] = useState([]);
  const [totalPages, setTotalPages] = useState();
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
      const { data } = await axios.post('https://api.spacexdata.com/v4/launches/query', {
        query: {},
        options: {
          limit,
          page,
          totalPages,
        },
      });
      setLaunchData(data.docs);
      setTotalPages(data.totalPages);
      console.log(data.totalPages)
      setLoading(false);
      if (pageNumber !== undefined && (parseInt(pageNumber) < 0 || parseInt(pageNumber) > data.totalPages)) {
        navigate('/404', { replace: true });
        console.log(totalPages)
        console.log(pageNumber)
      } else {
        navigate(`/launches/page/${page}`, { replace: true });
        console.log(totalPages)
        console.log(pageNumber)
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
        {launchData.map((launch) => (
          <LaunchListCard launch={launch} key={launch.id} />
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

export default LaunchList;