import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import {
  Loading,
  LoadingIcon
} from './styles'

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const [posts, setPosts] = useState([]);

  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    const { target } = e;
    setChecked(target.checked);
  };

  useEffect(() => {
    ;(async () => {
      const res = await api.get('/users');
      const { data } = res.data;

      setUsers(data);
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const hasUser = !!user;

      if (hasUser) {
        setLoading(true);

        const res = await api.get(`/users/${user.id}/posts`);
        const { data } = res.data;

        setPosts(data);
        setChecked(true);
        setLoading(false);
      }
    })()
  }, [user])

  return (
    <div className="container">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />

      <span className="hamburger"></span>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <a href="#/#" onClick={() => setUser(user)}>{user.name}</a>
          </li>
        ))}
      </ul>

      {user === null && (
        <>
          <h1>hello world</h1>

          <div className="intro">
            <p>Esse trecho `<span>os quais a empresa em que trabalham fazem parte de um grupo</span>` não ficou claro {':{'}</p>
          </div>

          <div className="repo">
            <div className="links">
              <a href="https://github.com/carvalhoviniciusluiz/GrowthTech-Desafio">
                https://github.com/carvalhoviniciusluiz/GrowthTech-Desafio
              </a>
              <a href="https://github.com/backend-br/vagas/issues/2461">
                https://github.com/backend-br/vagas/issues/2461
              </a>
            </div>
          </div>
        </>
      )}

      {user && (
        <>
          <h1>{user.name}</h1>
          <span>{user.company}</span>
          <hr/>
        </>
      )}

      {loading ? (
        <Loading>
          <LoadingIcon/>
        </Loading>
      ) : posts.map(post => (
        <section key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>
      ))}
    </div>
  );
}
