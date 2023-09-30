import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import errorImage from '../../images/not-found.jpg';

const ErrorPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // const error = useRouteError();
  // console.error(error);
  return (
    <div className="text-center">
      <h1 className="h4 text-muted">{t('nf_page.page_nf')}</h1>
      <h1>Sorry! Error has occcured</h1>
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
        <img src={errorImage} height="200" width="200" alt="Лого" />

      </div>
      <p className="text-muted">
        {t('nf_page.go_to_main_page.text')}
        <a href="/" onClick={navigate('/')}>
          {' '}
          {t('nf_page.go_to_main_page.link')}
        </a>
      </p>
    </div>
  );
};
export default ErrorPage;
