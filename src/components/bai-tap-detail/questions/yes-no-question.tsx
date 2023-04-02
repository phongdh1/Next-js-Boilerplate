import Image from 'next/image';

import dung from '../../../../public/assets/images/dung.png';
import sai from '../../../../public/assets/images/sai.png';
import styles from './yes-no-question.module.scss';

const YesNoQuestion = ({ currentQuestion, setAnswer }: any) => {
  console.log(currentQuestion);
  return (
    <div className={styles['yes-no-question-container']}>
      <div className={styles['picture-container']}>
        {currentQuestion?.pictureUrl && (
          <img src={currentQuestion.pictureUrl} width="200px" height="200px" />
        )}
      </div>

      {currentQuestion?.title?.split('//')?.map((el: string) => (
        <h3 key={el}>{el}</h3>
      ))}
      <div className="d-flex justify-content-center mt-5 flex-row">
        <button
          className={`btn btn-link m-0 p-0 ${
            (currentQuestion?.studenAnswer === true && styles.active) || ''
          }`}
          onClick={() => {
            setAnswer(true);
          }}
        >
          <Image
            itemType="button"
            src={dung}
            className={styles['btn-image']}
            alt="Đúng"
          />
        </button>
        <button
          className={`btn btn-link m-0 p-0 ${
            (currentQuestion?.studenAnswer === false && styles.active) || ''
          }`}
          onClick={() => {
            setAnswer(false);
          }}
        >
          <Image
            itemType="button"
            src={sai}
            className={styles['btn-image']}
            alt="Sai"
          />
        </button>
      </div>
    </div>
  );
};
export default YesNoQuestion;
