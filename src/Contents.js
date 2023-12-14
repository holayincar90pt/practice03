import React from "react";

const Contents = ({
  dataObjs,
  setUrl,
  API_URL_users,
  API_URL_posts,
  API_URL_comments,
  setActive,
  active,
  loading,
  internet,
  catchError,
}) => {
  return (
    <main>
      <div>
        <button
          className={active === "users" ? "active" : null}
          onClick={() => {
            setUrl(API_URL_users);
            setActive("users");
          }}
        >
          Users
        </button>
        <button
          className={active === "posts" ? "active" : null}
          onClick={() => {
            setUrl(API_URL_posts);
            setActive("posts");
          }}
        >
          Posts
        </button>
        <button
          className={active === "comments" ? "active" : null}
          onClick={() => {
            setUrl(API_URL_comments);
            setActive("comments");
          }}
        >
          Comments
        </button>
      </div>
      {loading && (
        <p
          style={{
            color: "#00f",
            margin: "5rem",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          loading...
        </p>
      )}

      {!internet && (
        <p
          style={{
            color: "#f00",
            margin: "5rem",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Check your internet connections and try again.
        </p>
      )}

      {catchError && (
        <p
          style={{
            color: "#f00",
            margin: "5rem",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Unable to fecth the required data
        </p>
      )}
      <section>
        <ul>
          {dataObjs.map((obj) => (
            <li key={obj.id}>{JSON.stringify(obj)}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Contents;
