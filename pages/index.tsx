
import { fr } from "@codegouvfr/react-dsfr";
import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { useStyles } from "tss-react/dsfr";

export default function Home() {

    const { css } = useStyles();

    return (
        <Alert
            className={css({ "margin": fr.spacing("10v") })}
            severity="warning"
            title="WARNING: This website is under construction"
            description="It will be available soon"
        />
    );
}
