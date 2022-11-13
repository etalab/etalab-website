import { fr } from "@codegouvfr/react-dsfr";
import { useId } from "react";


export default function Home() {

    const menuButtonId = useId();
    const modalId = useId();

    return (<div>

        <header role="banner" className={fr.cx("fr-header")}>
            <div /*className={fr.cx("fr-header__body" as any)}*/>
                <div className={fr.cx("fr-container")}>
                    <div className={fr.cx("fr-header__body-row")}>
                        <div className={fr.cx("fr-header__brand", "fr-enlarge-link")}>
                            <div className={fr.cx("fr-header__brand-top")}>
                                <div className={fr.cx("fr-header__logo")}>
                                    <p className={fr.cx("fr-logo")}>
                                        Intitulé
                                        <br />officiel
                                    </p>
                                </div>
                                <div className={fr.cx("fr-header__navbar")}>
                                    <button className={fr.cx("fr-btn--menu", "fr-btn")} data-fr-opened="false" aria-controls={modalId} aria-haspopup="menu" id={menuButtonId} title="Menu">
                                        Menu
                                    </button>
                                </div>
                            </div>
                            <div className={fr.cx("fr-header__service")}>
                                <a href="/" title="Accueil - [À MODIFIER - Nom du site / service] - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                                    <p className={fr.cx("fr-header__service-title")}>
                                        Nom du site / service
                                    </p>
                                </a>
                                <p /*className={fr.cx("fr-header__service-tagline" as any)}*/>baseline - précisions sur l‘organisation</p>
                            </div>
                        </div>
                        <div className={fr.cx("fr-header__tools")}>
                            <div className={fr.cx("fr-header__tools-links")}>
                                <ul className={fr.cx("fr-btns-group")}>
                                    <li>
                                        <a className={fr.cx("fr-btn", "fr-icon-add-circle-line")} href="[url - à modifier]">
                                            Créer un espace
                                        </a>
                                    </li>
                                    <li>
                                        <a className={fr.cx("fr-btn", "fr-icon-lock-line")} href="[url - à modifier]">
                                            Se connecter
                                        </a>
                                    </li>
                                    <li>
                                        <a className={fr.cx("fr-btn", "fr-icon-account-line")} href="[url - à modifier]">
                                            S’enregistrer
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={fr.cx("fr-header__menu", "fr-modal")} id={modalId} aria-labelledby={menuButtonId}>
                <div className={fr.cx("fr-container")}>
                    <button className={fr.cx("fr-btn--close", "fr-btn")} aria-controls={modalId} title="Fermer">
                        Fermer
                    </button>
                    <div className={fr.cx("fr-header__menu-links")}>
                    </div>
                </div>
            </div>
        </header>


    </div>);
}
