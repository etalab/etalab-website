import { makeStyles } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";


export default function Home() {

    const { classes } = useStyles();

    return <h1 className={classes.root}>Hello World</h1>;
}

const useStyles = makeStyles({ "name": { Home } })(
    color => ({
        "root": {
            "color": color.decisions.text.active.blueFrance.default,
            "margin": fr.spacing("4w")
        }
    })
);
