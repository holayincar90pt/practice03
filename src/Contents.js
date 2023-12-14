import React from "react";

const Contents = ({
  dataObjs,
  setUrl,
  API_URL_users,
  API_URL_posts,
  API_URL_comments,
  setActive,
  active,
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
