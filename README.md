**A simple app to introduce ADAX**

![image](https://github.com/user-attachments/assets/e08ba631-5abc-4984-8104-0c11846b0a58)


The example app allows FANS to vote for either Blue or Red. Notice when voting for either the results panel to the right shows the updated score. On the left side, Both "FANS" areas show their respective mood with an emoji. If it's a tie both moods are neutral 😐. Otherwise, the winning team displays 😃 and the losing one 🤬. Click/Vote to see the results pannel update immediately. On the other hand, the "FANS" areas only updates if there is a "change of mood".

![image](https://github.com/user-attachments/assets/4354ff37-92cc-40cb-937e-2122761ae4af)


**Implementation Overview**_(Code in: "./src/VoteApp")_

ADAX is simple, tiny & non opinionated. Let's see how it's been used in our little app.

**State** _(Code in: "./src/VoteApp/state.ts")_: Simple data (candidatesList) that fully describes everything necessary to know about the app at any point in time.

**Facade** _(Code in: "./src/VoteApp/facade.ts")_: The app's state/data can only be queried or written-to through functions defined in the facade.

**UI/views** _(Code in: "./src/VoteApp/index.tsx")_: On the left: 2 FANS-areas for Blue and Red respectively. On the right: 1 result-panel view for the score.  
FANS-area needs a query to get the mood (check **getMood**) and a mutation to increment the vote (check **voteFor**). The result-panel needs a query to get the current score (check **getResult**).  
**NB**: In this simple example, all query & write functions are found in "./src/VoteApp/**facade.ts**")

**The ADAX's touch** _(addRule, trigger & useSync)_: So far, we've only seen vanilla Typescript for the state/logic part and React for the UI part. To make the app interactive, we need the UI to update itself when (and only when) necessary. All query functions used in views need to be re-run for the UI views to update themselves. To make this automatic, we wrap the query functions with **useSync** and wrap the write functions with **trigger**.  
Have a second look inside the React views (in: _"./src/VoteApp/index.tsx"_) how queries are wrapped in **useSync** and writes/actions are wrapped in **trigger**.  

Optionally, if we want strict control on when queries are re-run and views updated. We can use addRule to specify what write function should cause what query functions to re-run. In addition to the write and the query functions, the addRule accepts a third optional argument skip to programatically condition when query is to be skiped (i.e. we bypass the rule). Exp, we do not always re-run getMood whenever voteFor is triggered, but only when the mood changes. This is programmatically controled with the skip argument in the addRule. I.e: skipMoodChangeAfterVote. For convenience, we placed all query, write, rules & skip functions in "./src/VoteApp/facade.ts")  
**NB**: There are other ways to ensure views are only updated when necessary without involving rules at all. All such options will be expplained in detailed documentation later on!
