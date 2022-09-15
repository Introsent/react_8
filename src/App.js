import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getComments} from "./redux/commentsReducer/commentsReducer";

function App() {
  const comments = useSelector(state => state.comments);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments())
  }, []);

  const restart = () => {
    dispatch(getComments())
  }

  if (loading) {
    return (
        <div>
          Loading...
        </div>
    )
  }

  if (error) {
    return (
        <div>
          Error!
          <button onClick={restart}>Update</button>
        </div>
    )
  }

  return (
    <div>
      {comments.map((comment) => {
        return (
            <div key={comment.id}>
              {comment.email}:
              {comment.name}
            </div>
        )

      })}

    </div>
  );
}

export default App;
