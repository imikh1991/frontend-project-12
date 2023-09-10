import { useRouteError } from 'react-router-dom';
import errorImage from '../images/not-found.jpg';
import Header from '../components/Header';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Header />
      <h1>Sorry! Error has occcured</h1>
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
        <img src={errorImage} height="200" width="200" alt="Письмо с сердечком" />

      </div>
      <p>
        <i>Но вы можете перейти на главную страницу </i>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
