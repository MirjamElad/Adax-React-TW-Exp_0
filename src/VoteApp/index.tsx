import { trigger } from 'adax';
import { useSync } from 'adax-react';
import { getMood, voteFor, getResult } from './facade';

const panelStyles = 'bg-white rounded-xl shadow-lg mx-6 px-6 py-4 border-slate-300 my-2';
const itemStyle = 'p-2 text-3xl';

const ResultPanel = () => {
  const {
    data: { winnerName, winnerScore, runnerUpName, runnerUpScore },
  } = useSync(getResult, undefined);
  return (
    <div className={panelStyles}>
      <div className={itemStyle}>{`${winnerName}: (${winnerScore})`}</div>
      <div className={itemStyle}>{`${runnerUpName}: (${runnerUpScore})`}</div>
    </div>
  );
};

const cmpStyles = 'bg-white rounded-xl shadow-lg mx-6 px-6 py-4 my-2';
const btnStyles =
  'bg-blue-300 mt-4 px-4 py-2 rounded-lg border border-slate-500 shadow-2xl';

const FansGroup = ({ name }: { name: string }) => {
  const {
    data: { mood },
  } = useSync(getMood, { name: name });
  return (
    <div className={cmpStyles}>
      <h1>{`${name} FANS: ${mood}`}</h1>
      <button onClick={() => trigger(voteFor, { name: name })} className={btnStyles}>
        Click to Vote
      </button>
    </div>
  );
};

const cmpStyle =
  'flex justify-between p-2 bg-slate-100 text-black shadow-inner border border-slate-300';
export const VoteApp = () => (
  <div className={cmpStyle}>
    <div>
      <FansGroup name="Vue" />
      <FansGroup name="Angular" />
    </div>
    <ResultPanel />
  </div>
);
