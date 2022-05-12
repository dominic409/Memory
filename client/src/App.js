import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'

import Posts from './components/Posts/posts'
import Form from './components/Form/form'

import memories from './images/memories.png'

import makeStyles from './styles'

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = makeStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant='h3' align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="Memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer}  container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>

              <Posts setCurrentId={setCurrentId} />

            </Grid> 
            <Grid item xs={12} sm={4}>

              <Form currentId={currentId} setCurrentId={setCurrentId} />
 
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
