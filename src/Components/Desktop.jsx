import { Link } from "react-router-dom"
import "./Desktop.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import lainDad from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain-dad.jpeg';

export function Desktop(){
    return(
        <div className="desktop">
            <Box sx={{ width: 1000 }}>
            {/* row 1 */}
            <Grid container justifyContent="space-between">
                <Grid item xs={0}>
                <div className="pretend_tooltip"> 
                    <Link to="/page1">
                        <img src={iconA} className="icon"/>
                    </Link>
                    <div className="pretend_tooltiptext">go to page 1</div>
                </div>
                </Grid>

                <Grid item>
                <div className="pretend_tooltip"> 
                    <Link to="/page2">
                        <img src={iconA} className="icon"/>
                    </Link>
                    <div className="pretend_tooltiptext">go to page 2</div>
                </div>
                </Grid>

                <Grid item>
                <div className="pretend_tooltip">
                     <Link to="/page3">
                        <img src={iconA} className="icon"/>
                    </Link>
                    <div className="pretend_tooltiptext">go to page 3</div>
                </div>
                </Grid>
            </Grid>

            {/* middle row */}
            <Grid container justifyContent="space-between">
                <Grid item xs={0}>
                <div className="pretend_tooltip"> 
                    <Link to="/">
                        <img src={lainDad } className="icon"/>
                    </Link>
                    <div className="pretend_tooltiptext">this page doesnt exist (4)</div>
                </div>
                </Grid>
                
                <Grid item xs={0}>
                <div className="pretend_tooltip"> 
                    <Link to="/">
                        <img src={iconA} className="icon"/>
                    </Link>
                    <div className="pretend_tooltiptext">this page doesnt exist (5)</div>
                </div>
                </Grid>
            </Grid>
            

            {/* bottom row */}
            <Grid container justifyContent="space-between">
                <Grid item xs={0}>
                <div className="pretend_tooltip"> 
                    <Link to="/">
                        <img src={iconA} className="icon"/>
                    </Link>
                    <div className="pretend_tooltiptext">doesnt exist (6)</div>
                </div>
                </Grid>

                <Grid item>
                <div className="pretend_tooltip"> 
                    <Link to="/">
                        <img src={iconA} className="icon"/>
                    </Link>
                    <div className="pretend_tooltiptext">doesnt exist (7)</div>
                </div>
                </Grid>

                <Grid item>
                <div className="pretend_tooltip"> 
                    <Link to="/">
                        <img src={iconA} className="icon"/>
                    </Link>
                    <div className="pretend_tooltiptext">doesnt exist (8)</div>
                </div>
                </Grid>
            </Grid>

            </Box>
        </div>
    )
}
