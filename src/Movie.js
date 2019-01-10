
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import { StarBorder } from '@material-ui/icons';
import PropTypes from 'prop-types';
import NavBar from './NavBar'

const style = {
  post: {
    maxWidth: '40px',
    maxHeight: '40px',
    border: 'solid',
    borderWidth: 'thin',
    borderRadius: '5px',
    backgroundColor: 'white',
  },
  picture: {
    width: '100%',
    height: '50%',
  },
}
let request = new XMLHttpRequest()

const API_KEY = 'f1be4bafe6f7cb0cb84f5948c5b75497'
const API_URL = 'https://api.themoviedb.org/3/movie/popular?page=1&api_key=' + API_KEY;

const Movie = (props) => {
  let movies  // should contain the movies
  request.open("GET", API_URL, true)  // opens the api url
  const {
    title,
    image,
  } = props
  

  return (
    


    <div >
    
     <NavBar/>
     <GridList cellHeight={200} spacing={20} cols={3}>
        <Grid container justify="center" alignItems="left" direction="column">
        {() => {    // should parse the movies and create new Grid for each movie
              request.onload = function () {
                movies = JSON.parse(this.response)
                movies.forEach(movie => {
                  return (
                    <div>
                      <Grid item xs={12}>
                           <h2>{movie.title}</h2>
                      </Grid>

                      <Grid item xs={12}> 
                        {/*Here is the url for each movie poster image*/}
                        <img src={"https://api.themoviedb.org/" + movie.poster_path}></img>
                     </Grid>

                    </div>
                  )
                })
              }
        }
        }
        </Grid>
      </GridList>

   </div>
  )
}

Movie.propTypes = {
    classes: PropTypes.object.isRequired,
}

Movie.defaultProps = {
  title: 'title',
  image: 'image',
}

export default withStyles(style)(Movie);
