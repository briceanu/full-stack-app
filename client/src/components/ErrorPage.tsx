import style from '../style/errorPage.module.scss';
// import access_denied from '../assets/access_denied.svg';
import access_denied from '../assets/access_denied.svg';

export interface ErrorProps {
  error: Error;
}

const ErrorPage: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className={style.error__container}>
      {error.message}

      <img
        src={access_denied}
        alt='access-denied'
        className={style.access_denied_img}
      />
    </div>
  );
};

export default ErrorPage;
