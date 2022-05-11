import React,{useContext} from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img4 from '../images/img4.jpg'
import img3 from '../images/img3.jpg';
import NewsCard from './NewsCard/NewsCard';
import useStyles from './styles.js';
import {authContext} from '../../App'


import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news',img:`${img1}` },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news',img:`${img2}` },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5',img:`${img3}`  },
  { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN',img:`${img4}` },
];



const NewsCards = ({ articles, activeArticle }) => {
 
  const userinformation= useContext(authContext);
  console.log(userinformation);
  const classes = useStyles();

  if (!articles.length) {
    return (
      <>


<div className={classes.root}>
      <AppBar position="static" style={{ backgroundImage: "linear-gradient(to right,#1995ff,#1eb6e5)",marginBottom:'20px' }}>
        <Toolbar variant="dense" style={{display:'flex',justifyContent:'space-between'}}>
          {/* <IconButton edge="start" 
            className={classes.menuButton} 
            color="info" aria-label="menu">
              <MenuIcon />
          </IconButton> */}
          
          <Typography variant="h6" color="inherit">
          {userinformation.oauth===true?userinformation.loginStatus.user.displayName:userinformation.loginStatus.display_name}
          </Typography>
          <Typography variant="h6" color="inherit">
          <a className="nav-link" href="#" onClick={(e)=>{
          e.preventDefault();
          userinformation.handlelogout();
          window.location.reload();
        }}><i class="fas fa-sign-out-alt"></i></a>
         
          </Typography>

         
          
        </Toolbar>
      </AppBar>
    </div>
       
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}> 
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={6} lg={6} className={classes.infoCard}>
              <div className={classes.card} style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)) ,url(${infoCard.img})`,backgroundPosition:'center',backgroundSize:'cover',color:'white',fontWeight:'bolder' }}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
      </>
    
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
