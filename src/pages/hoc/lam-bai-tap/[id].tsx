import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import YesNoQuestion from '@/components/bai-tap-detail/questions/yes-no-question';
import api from '@/utils/service/api';

import QuestionSelection from '../../../components/bai-tap-detail/question-selection/question-selection';
import styles from './lam-bai-tap.module.scss';

const Index = () => {
  const router = useRouter();
  const [listQuestion, setListQuestion] = useState<any[]>([]);
  const [examInfo, setExamInfo] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [indexSubQuestion, setIndexSubQuestion] = useState(0);
  const listButton = [
    {
      style: styles.back,
      click: () => router.push('/hoc'),
    },
    {
      style: styles.home,
      click: () => router.push('/dashboard'),
    },
  ];

  const getListQuestion = async (unitId: string) => {
    if (!unitId) return;
    try {
      setLoading(true);
      const examExeRes = (await api.get(`exam-executions/${unitId}`))?.data;
      setExamInfo(examExeRes);
      if (examExeRes?.exam?.id) {
        const question = (
          await api.get(`exams/${examExeRes.exam.id}/questions`)
        )?.data;

        if (question && question[0]) {
          question[0].active = true;
        }

        setListQuestion(question);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  // initialize
  useEffect(() => {
    if (router?.query?.id && typeof router.query.id === 'string') {
      getListQuestion(router.query.id);
    }
  }, [router.query.id]);

  function onSelectQuestion(index: number) {
    console.log('onselect');
    const newListQuestion = JSON.parse(JSON.stringify(listQuestion))?.map(
      (el: any, i: number) =>
        index !== i ? { ...el, active: false } : { ...el, active: true }
    );
    setIndexSubQuestion(0);
    setIndexQuestion(index);
    setListQuestion(newListQuestion);
  }

  function setAnswer(value: any, index: any, indexSub: any) {
    const newListQuestion = JSON.parse(JSON.stringify(listQuestion));
    if (
      newListQuestion[index] &&
      newListQuestion[index].question?.gameType === '' &&
      newListQuestion[index].question?.children &&
      newListQuestion[index].question?.children[indexSub]
    ) {
      newListQuestion[index].question.children[indexSub].studenAnswer = value;
    }

    setListQuestion(newListQuestion);
  }

  return (
    <div className="page-container container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md">
          <div className="row px-5 pb-3 pt-5">
            <div className="col-sm-12 col-md d-flex flex-row">
              <div className="d-flex flex-row">
                {listButton &&
                  listButton.map((el, i) => (
                    <button
                      key={i}
                      onClick={el.click}
                      className={`${styles['nav-button']} ${el?.style} `}
                    />
                  ))}
              </div>
              <h2 className="w-100 text-center">{examInfo?.exam?.title}</h2>
            </div>
          </div>
          <div className="row px-5 pb-3">
            <div
              className={`col-sm-12 col-md p-5 ${styles['excercise-container']}`}
            >
              <h2>
                Bài {indexQuestion + 1}
                {listQuestion[indexQuestion] &&
                  listQuestion[indexQuestion]?.question?.gameType === '' &&
                  listQuestion[indexQuestion]?.question?.children && (
                    <span>
                      <span>{`.${indexSubQuestion + 1}`}</span>
                      {indexSubQuestion !== 0 && (
                        <button
                          onClick={() => {
                            setIndexSubQuestion(indexSubQuestion - 1);
                          }}
                          className={`${styles['nav-button']} ${styles.back} ${styles.prev} `}
                        />
                      )}
                      {listQuestion[indexQuestion].question.children.length -
                        1 >
                        indexSubQuestion && (
                        <button
                          onClick={() => {
                            setIndexSubQuestion(indexSubQuestion + 1);
                          }}
                          className={`${styles['nav-button']} ${styles.back} ${styles.next} `}
                        />
                      )}
                    </span>
                  )}
              </h2>
              {/* <button
                      key={i}
                      onClick={el.click}
                      className={`${styles['nav-button']} ${el?.style} `}
                    /> */}
              <div>
                {/* yes no type */}
                {listQuestion[indexQuestion] &&
                  listQuestion[indexQuestion]?.question?.gameType === '' &&
                  listQuestion[indexQuestion]?.question?.children &&
                  listQuestion[indexQuestion]?.question?.children[
                    indexSubQuestion
                  ]?.gameType === 'TrueOrFalse' && (
                    <YesNoQuestion
                      setAnswer={(value: any) => {
                        setAnswer(value, indexQuestion, indexSubQuestion);
                      }}
                      currentQuestion={
                        listQuestion[indexQuestion].question.children[
                          indexSubQuestion
                        ]
                      }
                    ></YesNoQuestion>
                  )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 mt-3">
          <QuestionSelection
            loading={loading}
            onSelectQuestion={onSelectQuestion}
            listQuestion={listQuestion}
          ></QuestionSelection>
        </div>
      </div>
    </div>
  );
};

export default Index;
