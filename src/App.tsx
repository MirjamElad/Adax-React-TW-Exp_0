import { Intro, ImplementationOverview } from './Docs';
import { VoteApp } from './VoteApp';
export default function App() {
  return (
    <div className="p-4">
      <Intro />
      <VoteApp />
      <ImplementationOverview />
    </div>
  );
}
