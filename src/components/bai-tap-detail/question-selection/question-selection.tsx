import styles from './question-selection.module.scss';

const QuestionSelection = ({ onSelectQuestion, listQuestion }: any) => (
  <div className={`p-5 ${styles['question-selections-component']}`}>
    <div className="d-flex align-items-center flex-column">
      <h3>Chọn câu hỏi</h3>
      <div className="d-flex flex-row flex-wrap">
        {listQuestion?.map((e: any, i: number) => {
          return (
            onSelectQuestion && (
              <button
                className={` m-1  ${styles.item} ${e?.active && styles.active}`}
                onClick={() => {
                  onSelectQuestion(i);
                }}
                key={i}
              >
                {i + 1}
              </button>
            )
          );
        })}
      </div>
    </div>
  </div>
);

export default QuestionSelection;
