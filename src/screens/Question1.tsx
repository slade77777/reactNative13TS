import React from 'react';
import CustomTextInput from '../components/CustomTextInput';
import QuestionTemple from '../components/QuestionTemple';
import {connect} from 'react-redux';
import {answerQuestion} from '../redux/actions/answerAction';

const Question1 = ({
  store,
  answerQuestion,
}: {
  store: any;
  answerQuestion: (key: string, val: string) => void;
}) => {
  console.log(store);
  return (
    <QuestionTemple nextScreen={'Question2'}>
      <CustomTextInput
        title={'Câu 1: 1 + 1 = ?'}
        changeText={(val: string) => answerQuestion('answer1', val)}
        value={store.answers.answer1}
      />
    </QuestionTemple>
  );
};

const mapStateToProps = (store: any) => {
  return {store};
};

export default connect(mapStateToProps, {answerQuestion})(Question1);
