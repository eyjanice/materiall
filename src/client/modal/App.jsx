import React, { useEffect, useState } from 'react';
import { serverFunctions } from '../utils/serverFunctions';
import './App.css';

import { QuestionEditor } from './components/QuestionEditor';
import { LoadingPage } from './components/LoadingPage';

export function App() {
  const [data, setData] = useState();

  useEffect(() => {
    serverFunctions
      .getCheckedData()
      .then((serverResponse) => {
        setData(serverResponse[0]);
      })
      .catch(alert);
  }, []);

  if (!data) return <LoadingPage />;
  return <QuestionEditor data={data} />;
}

const TEST_DATA = [
  {
    false_sentences: [
      'least adult school classes are now virtual due to pandemic\n Older generation has difficulty in adopting new technologies',
      'fewest adult school classes are now virtual due to pandemic\n Older generation has difficulty in adopting new technologies',
      'Most juvenile school classes are now virtual due to pandemic\n Older generation has difficulty in adopting new technologies',
      'Most adult school classes are not now virtual due to pandemic\n Older generation has difficulty in adopting new technologies',
      "Most adult school classes aren't now virtual due to pandemic\n Older generation has difficulty in adopting new technologies",
      'Most adult school classes differ now virtual due to pandemic\n Older generation has difficulty in adopting new technologies',
      'Most adult school classes are now virtual undue to pandemic\n Older generation has difficulty in adopting new technologies',
      'Most adult school classes are now virtual due to pandemic\n new generation has difficulty in adopting new technologies',
      'Most adult school classes are now virtual due to pandemic\n young generation has difficulty in adopting new technologies',
      'Most adult school classes are now virtual due to pandemic\n Older generation abstain difficulty in adopting new technologies',
      'Most adult school classes are now virtual due to pandemic\n Older generation refuse difficulty in adopting new technologies',
      'Most adult school classes are now virtual due to pandemic\n Older generation lack difficulty in adopting new technologies',
      'Most adult school classes are now virtual due to pandemic\n Older generation has ease in adopting new technologies',
      'Most adult school classes are now virtual due to pandemic\n Older generation has difficulty in adopting worn technologies',
      'Most adult school classes are now virtual due to pandemic\n Older generation has difficulty in adopting old technologies',
    ],
    blank: {
      end: ' are now virtual due to pandemic.\n Older generation has difficulty in adopting new technologies.\n',
      blank_sentence:
        '_________________________ are now virtual due to pandemic.\n Older generation has difficulty in adopting new technologies.\n',
      answer: 'Most adult school classes',
      beginning: '',
    },
    text: 'Most adult school classes are now virtual due to pandemic. Older generation has difficulty in adopting new technologies.\n',
    mc_options: {
      generation: ['generations', 'kin', 'era', 'decade'],
      new: ['revamped', 'newest', 'newly', 'newer'],
      virtual: ['simulated', 'simulation', 'imaginary', 'simulate'],
      in: ['where', 'the', 'during', 'at'],
      Most: ['highly', 'particularly', 'one', 'less'],
      classes: ['electives', 'courses', 'class', 'semester'],
      'technologies\n': [],
      difficulty: ['difficulties', 'trouble', 'problem', 'problems'],
      are: ['were', "they're", 'these', 'is'],
      due: ['owing', 'attributed', 'because', 'necessitated'],
      school: ['elementary', 'schools', 'kindergarten', 'teacher'],
      'pandemic\n': [],
      now: ['still', 'already', 'currently', 'presently'],
      adopting: ['adopt', 'adopted', 'adoption', 'implementing'],
      has: ['had', 'recently', 'been', 'have'],
      to: [],
      adult: ['adults', 'adolescent', 'ages', 'teen'],
      Older: ['younger', 'newer', 'age', 'aged'],
    },
  },
  null,
];
