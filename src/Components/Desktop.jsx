import { Link } from "react-router-dom"
import "./Desktop.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';


export function Desktop(){
    return(
        <div className="desktop">
            {/*this is the og tooltip example code }
           {/* <Box sx={{ width: 500 }}>
            <Grid container justifyContent="center">
                <Grid item>
                <Tooltip title="Add" placement="top-start">
                    <Button>top-start</Button>
                </Tooltip>
                <Tooltip title="Add" placement="top">
                    <Button>top</Button>
                </Tooltip>
                <Tooltip title="Add" placement="top-end">
                    <Button>top-end</Button>
                </Tooltip>
                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <Grid item xs={6}>
                <Tooltip title="Add" placement="left-start">
                    <Button>left-start</Button>
                </Tooltip>
                <br />
                <Tooltip title="Add" placement="left">
                    <Button>left</Button>
                </Tooltip>
                <br />
                <Tooltip title="Add" placement="left-end">
                    <Button>left-end</Button>
                </Tooltip>
                </Grid>
                <Grid item container xs={6} alignItems="flex-end" direction="column">
                <Grid item>
                    <Tooltip title="Add" placement="right-start">
                    <Button>right-start</Button>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <Tooltip title="Add" placement="right">
                    <Button>right</Button>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <Tooltip title="Add" placement="right-end">
                    <Button>right-end</Button>
                    </Tooltip>
                </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <Grid item>
                <Tooltip title="Add" placement="bottom-start">
                    <Button>bottom-start</Button>
                </Tooltip>
                <Tooltip title="Add" placement="bottom">
                    <Button>bottom</Button>
                </Tooltip>
                <Tooltip title="Add" placement="bottom-end">
                    <Button>bottom-end</Button>
                </Tooltip>
                </Grid>
            </Grid>
            </Box> */}




            <Box sx={{ width: 1000 }}>
            {/* row 1 */}
            <Grid container justifyContent="space-between">
                <Grid item xs={0}>
                {/* <div className="thisisatool"> */}
                
                {/* <div className="tooltipcontainer">
                    <Tooltip className="tooltip" title="Add" placement="top-start">
                    <Link to="/page1">
                        <img src={iconA} className="icon"/>
                    </Link>
                    </Tooltip>
                </div> */}
           

           <div className="pretend_tooltip"> <Link to="/page1">
                        <img src={iconA} className="icon"/>
                    </Link>
            <span className="pretend_tooltiptext">go to page 1</span>
            </div>

                {/* <div className="example-container">
                
                <Link to="/page1" data-tooltip-id="my-tooltip-styles"
                    data-tooltip-content="Hello world!">
                        <img src={iconA} className="icon"/>
                    </Link>
                <Tooltip id="my-tooltip-styles"  className="example" />
                </div> */}
                
                {/* </div> */}
                </Grid>
                <Grid item>
                {/* <Tooltip title="Add" placement="top">
                <Link to="/page2">
                        <img src={iconA} className="icon"/>
                    </Link>
                </Tooltip> */}
                 <div className="pretend_tooltip"> <Link to="/page2">
                        <img src={iconA} className="icon"/>
                    </Link>
            <span className="pretend_tooltiptext">go to page 2</span>
            </div>
                </Grid>
                <Grid item>
                {/* <Tooltip title="this takes you to page 3" placement="top-end">
                <Link to="/page3">
                        <img src={iconA} className="icon"/>
                    </Link>
                </Tooltip> */}
                <div className="pretend_tooltip">
                     <Link to="/page3">
                        <img src={iconA} className="icon"/>
                    </Link>
                <span className="pretend_tooltiptext">go to page 3</span>
                </div>
                </Grid>
            </Grid>
            {/* <Grid container justifyContent="center">
                <Grid item>
                </Grid>
            </Grid> */}

            {/* middle row */}
            <Grid container justifyContent="space-between">
                <Grid item xs={0}>
                <Tooltip title="this is box d" placement="left">
                <Link to="/">
                        <img src={iconA} className="icon"/>
                    </Link>
                    </Tooltip>
                </Grid>
                <Grid item xs={0}>
                <Tooltip title="Add" placement="right">
                <Link to="/">
                        <img src={iconA} className="icon"/>
                    </Link>
                    </Tooltip>
                </Grid>
            </Grid>
            

            {/* bottom row */}
            <Grid container justifyContent="space-between" padding={0}>
                <Grid item>
                <Tooltip title="Add" placement="bottom-start">
                <Link to="/">
                        <img src={iconA} className="icon"/>
                    </Link>
                </Tooltip>
                </Grid>
                <Grid item>
                <Tooltip title="Add" placement="bottom">
                <Link to="/">
                        <img src={iconA} className="icon"/>
                    </Link>
                </Tooltip>
                </Grid>
                <Grid item>
                <Tooltip title="Add" placement="bottom-end">
                <Link to="/">
                        <img src={iconA} className="icon"/>
                    </Link>
                </Tooltip>
                </Grid>
            </Grid>

            </Box>
        </div>
    )
}