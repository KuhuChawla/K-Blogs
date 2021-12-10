/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TagPreview } from './tagWidget';
// import { Link } from 'gatsby';
import { CardActionArea } from '@mui/material';
import { navigate } from 'gatsby';

// const card = (
//     <React.Fragment>
//         <CardContent>
//             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                 Word of the Day
//             </Typography>
//             <Typography variant="h5" component="div">
//                 be{bull}nev{bull}o{bull}lent
//             </Typography>
//             <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                 adjective
//             </Typography>
//             <Typography variant="body2">
//                 well meaning and kindly.
//                 <br />
//                 {'"a benevolent smile"'}
//             </Typography>
//         </CardContent>
//         <CardActions>
//             <Button size="small">Learn More</Button>
//         </CardActions>
//     </React.Fragment>
// );

export default function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 275, minHeight: 290 }}>
      <Card variant="outlined" style={{ height: 300, padding: 10 }}>
        <CardActionArea style={{ height: 300 }} onClick={() => navigate(props.link)}>
          <CardContent style={{ height: 300, alignItems: 'start', justifyContent: 'start' }}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {props.date}
            </Typography>
            <Typography variant="h5" component="div">
              {props.title}
            </Typography>
            {/* <Typography sx={{ mb: 1.5 }} color="text.secondary"> */}
            <TagPreview value={props.tags} />
            {/* </Typography> */}
            <Typography variant="body2">{props.desc}</Typography>
          </CardContent>

          {/* <CardActions style={{bottom:0}}>
                        <Link to= {props.link} itemProp = 'url'>
                        <Button size="small">Learn More</Button>
                        </Link>
                    </CardActions> */}
        </CardActionArea>
      </Card>
    </Box>
  );
}
