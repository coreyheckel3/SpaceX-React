import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoreListCard from './CoreListCard';
import { Grid, Button } from '@mui/material';
import { useParams, useNavigate, Link } from 'react-router-dom';

import './Card.css';

const CoreList = () => {
  const [loading, setLoading] = useState(true);
  const [coreData, setCoreData] = useState([]);
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
      const { data } = await axios.post('https://api.spacexdata.com/v4/cores/query', {
        query: {},
        options: {
          limit,
          page,
          totalPages
        },
      });
      setCoreData(data.docs);
      setTotalPages(data.totalPages);
      setLoading(false);
      if (pageNumber !== undefined && (parseInt(pageNumber) < 0 || parseInt(pageNumber) > data.totalPages)) {
        navigate('/404', { replace: true });
      } else {
        navigate(`/cores/page/${page}`, { replace: true });
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
      <Grid container spacing={2} sx={{ flexGrow: 1, flexDirection: 'row'}}>
        {coreData.map((core) => (
          <CoreListCard core={core} key={core.id} />
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

export default CoreList;
