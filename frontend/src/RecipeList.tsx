import React from "react";
import Card from "@material-ui/core/Card";
import {
  CardHeader,
  createStyles,
  makeStyles,
  Theme,
  CardMedia,
  Typography,
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
      display: "flex",
    },
    cardStyleDetails: {
      display: "flex",
      flexDirection: "column",
    },
    media: {
      width: 151,
      height: 151,
    },
    cardFooter: {
      textAlign: "center",
      marginTop: 50,
      marginLeft: 300,
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
              <CardMedia
                className={classes.media}
                image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/italian-meatballs-329-horizontal-2-1545406095.jpg"
              />
              <div>
                <CardHeader title={recipe.name} />
                <div className={classes.cardFooter}>
                  <Typography variant="body2">
                    Time: {recipe.time} min
                  </Typography>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};
