import React from "react";
import Card from "@material-ui/core/Card";
import {
  CardHeader,
  createStyles,
  makeStyles,
  Theme,
  CardMedia,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

interface Props {
  recipes: Recipe[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bodyStyle: {
      padding: 30,
    },
    root: {
      width: 600,
      height: 150,
      display: "flex",
      background: "white",
      transition: "0.3s",
      boxShadow: "0 3px 5px 2px rgba(63, 81, 181, .3)",
      border: "1px solid lightgrey",
      "&:hover": {
        background: "#edeffa",
      },
    },
    cardStyleDetails: {
      display: "flex",
      flexDirection: "column",
    },
    media: {
      width: 150,
      height: 150,
      position: "absolute",
      marginTop: -4,
    },
    cardBody: {
      marginLeft: 160,
    },
    preview: {
      marginLeft: 15,
    },
    cardFooter: {
      textAlign: "center",
      marginLeft: 200,
      marginTop: 10,
    },
  })
);

export const RecipeList: React.FC<Props> = ({ recipes }) => {
  const classes = useStyles();
  return (
    <div className={classes.bodyStyle}>
      {recipes.map((recipe) => (
        <Grid
          container
          spacing={8}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Grid item xs={12}>
            <Card className={classes.root}>
              {/* todo in CardActionArea define routing to recipe */}
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/italian-meatballs-329-horizontal-2-1545406095.jpg"
                />
                <div className={classes.cardBody}>
                  <CardHeader title={recipe.headline} />
                  <div className={classes.preview}>
                    <Typography>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry...
                    </Typography>
                  </div>
                  <div className={classes.cardFooter}>
                    <Typography variant="body2">
                      Time: {recipe.time} min
                    </Typography>
                  </div>
                </div>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};
