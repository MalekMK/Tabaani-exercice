import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    width: 300 ,
    height: 300,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Box p={2} >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.data.url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography color="textSecondary" component="p">
            {props.data.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
