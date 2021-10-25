export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export const answerQuestion = (key: string, value: string) => {
  console.log(key, value);
  return {
    type: ANSWER_QUESTION,
    data: {
      key,
      value,
    },
  };
};
