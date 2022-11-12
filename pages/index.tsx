import { makeStyles } from "tss-react/dsfr";
import { fr, useIsDark } from "@codegouvfr/react-dsfr";


export default function Home() {

    const { classes } = useStyles();

    const { isDark, setIsDark } = useIsDark();

    return (
        <>
            <button onClick={() => setIsDark(true)}>Set to 🌑</button>
            <button onClick={() => setIsDark(false)}>Set to 🌕</button>
            <h1 className={classes.root}>Currently in {isDark ? "dark" : "light"} mode</h1>
        </>
    );
}

const useStyles = makeStyles({ "name": { Home } })(
    color => ({
        "root": {
            "color": color.decisions.text.active.blueFrance.default,
            "margin": fr.spacing("4w")
        }
    })
);
