import Parser from 'html-react-parser';

const introText = `The example app allows FANS to vote for either Blue or Red. 
Notice when voting for either the results panel to the right shows the updated score.
On the left side, Both "FANS" areas show their respective mood with an emoji.
If it's a tie both moods are neutral 😐. Otherwise, the winning team displays 😃 and the losing one 🤬.
Click/Vote to see the results pannel update immediately. 
On the other hand, the "FANS" areas only updates if there is a "change of mood".`;

export const Intro = () => (
  <p className="mb-2">
    <div><b>A simple app to introduce ADAX</b></div>
    {introText}
  </p>
);

const overviewIntro = `ADAX is simple, tiny & non opinionated. 
Let's see how it's been used in our little app.`;

const state = `Simple data (candidatesList) that fully describes everything necessary to know about the app at any point in time.`;

const facade = `The app's state/data can only be queried or written-to through functions defined in the facade.`;

const UI = Parser(`On the left: 2 FANS-areas for Blue and Red respectively. 
On the right: 1 result-panel view for the score.<br />
FANS-area needs a query to get the mood (check <b>getMood</b>) and a mutation to increment the vote (check <b>voteFor</b>).
The result-panel needs a query to get the current score (check <b>getResult</b>).<br />
<b>NB</b>: In this simple example, all query & write functions are found in  "./src/VoteApp/<b>facade.ts</b>")
`);

const adaxTouch = Parser(`So far, we've only seen vanilla Typescript for the state/logic part and React for the UI part.
To make the app interactive, we need the UI to update itself when (and only when) necessary. 
All query functions used in views need to be re-run for the UI views to update themselves.
To make this automatic, we wrap the query functions with <b>useSync</b> and wrap the write functions with <b>trigger</b>. <br />
Have a second look inside the React views (in: <i>&quot;./src/VoteApp/index.tsx&quot;</i>) how queries are wrapped in <b>useSync</b> and writes/actions are wrapped in <b>trigger</b>.<br />
<div>Optionally, if we want strict control on when queries are re-run and views updated. 
We can use addRule to specify what write function should cause what query functions to re-run. 
In addition to the write and the query functions, the addRule accepts a third optional argument skip to programatically condition 
when query is to be skiped (i.e. we bypass the rule). Exp, we do not always re-run getMood whenever voteFor is triggered, but only when the mood changes. 
This is programmatically controled with the skip argument in the addRule. I.e: skipMoodChangeAfterVote.
For convenience, we placed all query, write, rules & skip functions in "./src/VoteApp/facade.ts") <br />
<b>NB</b>: There are other ways to ensure views are only updated when necessary without involving rules at all. 
All such options will be expplained in detailed documentation later on!</div>
`);

export const ImplementationOverview = () => (
  <p className="mt-3">
    <div>
      <b>Implementation Overview</b>
      <i>(Code in: &quot;./src/VoteApp&quot;)</i>
    </div>
    <div>{overviewIntro}</div>
    <div className="mt-2">
      <b>State</b> <i>(Code in: &quot;./src/VoteApp/state.ts&quot;)</i>: {state}
    </div>
    <div className="mt-2">
      <b>Facade</b> <i>(Code in: &quot;./src/VoteApp/facade.ts&quot;)</i>: {facade}
    </div>
    <div className="mt-4">
      <b>UI/views</b> <i>(Code in: &quot;./src/VoteApp/index.tsx&quot;)</i>: {UI}
    </div>
    <div className="mt-2">
      <b>The ADAX's touch</b> <i>(addRule, trigger & useSync)</i>: {adaxTouch}
    </div>
  </p>
);
