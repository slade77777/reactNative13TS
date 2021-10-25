import {ANSWER_QUESTION} from '../actions/answerAction';

const initialAnswers = {
  answer1: null,
  answer2: null,
};

export default function answerReducer(
  state: any = initialAnswers,
  action: any,
) {
  switch (action.type) {
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.data.key]: action.data.value,
      };
    default:
      return state;
  }
}
