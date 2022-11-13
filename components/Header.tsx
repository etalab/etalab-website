import { useId } from "react";
import { fr } from "@codegouvfr/react-dsfr";
import { declareComponentKeys } from "i18nifty";
import { useTranslation } from "i18n";


export function Header() {

	const { t } = useTranslation({ Header });

	const menuButtonId = useId();
	const modalId = useId();

	return (
		<header role="banner" className={fr.cx("fr-header")}>
			<div /*className={fr.cx("fr-header__body" as any)}*/>
				<div className={fr.cx("fr-container")}>
					<div className={fr.cx("fr-header__body-row")}>
						<div className={fr.cx("fr-header__brand", "fr-enlarge-link")}>
							<div className={fr.cx("fr-header__brand-top")}>
								<div className={fr.cx("fr-header__logo")}>
									<p className={fr.cx("fr-logo")}>
										{t("intitulé officiel")}
									</p>
								</div>
								<div className={fr.cx("fr-header__navbar")}>
									<button className={fr.cx("fr-btn--menu", "fr-btn")} data-fr-opened={false} aria-controls={modalId} aria-haspopup="menu" id={menuButtonId} title={t("menu")}>
										{t("menu")}
									</button>
								</div>
							</div>
							<div className={fr.cx("fr-header__service")}>
								<a href="/" title="Accueil - [À MODIFIER - Nom du site / service] - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
									<p className={fr.cx("fr-header__service-title")}>
										{t("nom du site / service")}
									</p>
								</a>
								<p /*className={fr.cx("fr-header__service-tagline" as any)}*/>
									{t("baseline - précisions sur l'organisation")}
								</p>
							</div>
						</div>
						<div className={fr.cx("fr-header__tools")}>
							<div className={fr.cx("fr-header__tools-links")}>
								<ul className={fr.cx("fr-btns-group")}>
									<li>
										<a className={fr.cx("fr-btn", "fr-icon-information-line")} href="[url - à modifier]">
											{t("qui sommes-nous")}
										</a>
									</li>
									<li>
										<a className={fr.cx("fr-btn", "fr-icon-mail-line")} href="[url - à modifier]">
											{t("nous contacter")}
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
					<button className={fr.cx("fr-btn--close", "fr-btn")} aria-controls={modalId} title={t("close")}>
						{t("close")}
					</button>
					<div className={fr.cx("fr-header__menu-links")}>
					</div>
				</div>
			</div>
		</header>
	);

}

export const { i18n } = declareComponentKeys<
	| { K: "intitulé officiel"; R: JSX.Element; }
	| "menu"
	| "nom du site / service"
	| "baseline - précisions sur l'organisation"
	| "qui sommes-nous"
	| "nous contacter"
	| "close"
>()({ Header });
