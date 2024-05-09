import cls from "./NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { TextHolder } from "@/shared/ui/TextHolder";
import { ColumnStack } from "@/shared/ui/Stack";
import { useNavigate } from "react-router-dom";
import { getRouteMain } from "@/shared/consts/routerConsts";
import { Button } from "@/shared/ui/Button";
import { Glyph } from "@/shared/ui/Glyph";
import Astronaut from "@/shared/assets/icons/astronaut.svg?react";
import { PageContainer } from "@/widgets/PageContainer";

const NotFoundPage = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const goHome = () => {
		navigate(getRouteMain());
	};
	return (
		<PageContainer>
			<ColumnStack gap="8" align="center">
				<TextHolder variant="error" title={"404 PAGE NOT FOUND"} />
				<div style={{ margin: 50 }}></div>
				<Glyph SvgImage={Astronaut} className={cls.astronaut} />
				<div className={cls.starsBackground}></div>
				<div style={{ margin: 20 }}></div>
				<TextHolder title={"Oops! Lost in Space..."} />
				<TextHolder
					text={t(
						"Unfortunately the page you were looking for could not be found."
					)}
				/>
				<TextHolder
					text={t(
						"It may be temporarily unavailable, moved or no longer exist."
					)}
				/>
				<TextHolder
					text={t("Check the URL you entered for any mistakes and try again.")}
				/>
				<TextHolder
					text={t(
						"Alternatively, search for whatever is missing or take a look around the rest of our site."
					)}
				/>
				<Button onClick={goHome} className={cls.homeButton}>
					{t("Take Me Home")}
				</Button>
			</ColumnStack>
		</PageContainer>
	);
};

export default memo(NotFoundPage);
