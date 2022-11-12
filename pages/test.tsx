import { makeStyles } from "tss-react/dsfr";
import { declareComponentKeys } from "i18nifty";
import { fr, useIsDark } from "@codegouvfr/react-dsfr";
import { useTranslation, useLang } from "i18n";

export default function Test() {

    const { classes } = useStyles();

    const { isDark, setIsDark } = useIsDark();

    const { t } = useTranslation({ Test });

    const { setLang, lang } = useLang();

    return (
        <>
            <button onClick={() => setIsDark(true)}>{t("set to dark mode")}</button>
            <button onClick={() => setIsDark(false)}>{t("set to light mode")}</button>
            <h2 className={classes.root}>{t("currently in what mode", { isDark })}</h2>
            <br/>
            <h2>{lang}</h2>
            {lang !== "fr" && <button onClick={() => setLang("fr")}>🇫🇷</button>}
            {lang !== "en" && <button onClick={() => setLang("en")}>🇺🇸</button>}
        </>
    );
}

const useStyles = makeStyles({ "name": { Test } })(
    color => ({
        "root": {
            "color": color.decisions.text.active.blueFrance.default,
            "margin": fr.spacing("4w")
        }
    })
);

export const { i18n } = declareComponentKeys<
    | { K: "currently in what mode"; P: { isDark: boolean; } }
    | "set to light mode"
    | "set to dark mode"
>()({ Test });
