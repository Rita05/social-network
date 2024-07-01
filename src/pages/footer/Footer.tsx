//styles
import { FooterAppName, FooterHelp, FooterSection } from "./Footer.styled"

export const Footer = () => {
	return (
		<FooterSection>
			<FooterAppName>© PearlNet</FooterAppName>
			<FooterHelp href="mailto:m_redub@mail.ru" target={"_blank"}>Поддержка</FooterHelp>
		</FooterSection>
	)
}