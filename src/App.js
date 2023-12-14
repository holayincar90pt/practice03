import "./App.css";
import Contents from "./Contents";
import { useState, useEffect } from "react";

function App() {
  const API_URL_users = "https://jsonplaceholder.typicode.com/users";
  const API_URL_posts = "https://jsonplaceholder.typicode.com/posts";
  const API_URL_comments = "https://jsonplaceholder.typicode.com/comments";

  const [url, setUrl] = useState(API_URL_users);
  const [dataObjs, setDataObjs] = useState([]);
  const [active, setActive] = useState("users");
  const [loading, setLoading] = useState(true);
  const [internet, setInternet] = useState(true);
  const [catchError, setCatchError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setCatchError(true);
        } else {
          const objDatas = await response.json();
          setDataObjs(objDatas);
        }
      } catch (error) {
        console.warn(error);
        setInternet(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div className="App">
      <Contents
        dataObjs={dataObjs}
        setUrl={setUrl}
        API_URL_users={API_URL_users}
        API_URL_posts={API_URL_posts}
        API_URL_comments={API_URL_comments}
        active={active}
        setActive={setActive}
        loading={loading}
        internet={internet}
        catchError={catchError}
      />
    </div>
  );
}

export default App;
