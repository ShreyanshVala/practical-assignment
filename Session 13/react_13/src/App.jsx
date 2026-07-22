import PlaylistEditor from "./components/PlaylistEditor";

import LiveCommentsFeed from "./components/LiveCommentsFeed";

function App() {
  return (
    <div>
      <h1>Firestore CRUD Part 2</h1>

      <PlaylistEditor />

      <hr />

      <LiveCommentsFeed />
    </div>
  );
}

export default App;
