import { useNavigate } from 'react-router-dom';
import { PATH } from '../../../app/App';

//icons
import errorPageIcon from '../../../assets/icons/error-page.svg';

//styles
import { BackButton, ErrorContent, ErrorImage, ErrorMessage, ErrorSection, ErrorText, ErrorTitle } from "./ErrorPage.styled";

export const ErrorPage = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(PATH.PROFILE);
  }

  return (
    <ErrorSection>
      <ErrorContent>
        <ErrorImage src={errorPageIcon} />
        <ErrorText>
          <ErrorTitle>Упс!</ErrorTitle>
          <ErrorMessage>Страница не найдена</ErrorMessage>
          <BackButton
            onClick={goBack}
          >
            {'Назад'}
          </BackButton>
        </ErrorText>
      </ErrorContent>
    </ErrorSection>
  );
}