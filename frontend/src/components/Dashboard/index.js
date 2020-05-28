import React, { useEffect, useState } from 'react';
import qs from 'qs';

import api from '../../services/api';
import BabyYoda from '../../assets/img/baby-yoda.jpg';

import {
  Loading,
  LoadingIcon
} from './styles'

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const [posts, setPosts] = useState([]);

  const [checked, setChecked] = useState(false);
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

  const handleKeyPressed = async e => {
    if (e.key === "Enter") {
      const terms = e.target.value.split(',');

      const query = qs.stringify({
        'group-all-by': terms,
      });

      const res = await api.get(`/users?${query}`);
      const { data } = res.data;

      setUsers(data.reverse());
    }
  }

  const renderMenuItem = (user) => {
    const {grouped} = user;

    if (Array.isArray(grouped)) {
      return grouped.map(user => (
        <li key={user.id}>
          <a
            className="highlight"
            href="#/#"
            onClick={() => setUser(user)}>
              <strong>{user.name}</strong>
              <small>{user.company}</small>
            </a>
        </li>
      ));
    } else {
      return (
        <li key={user.id}>
          <a href="#/#" onClick={() => setUser(user)}>
            <strong>{user.name}</strong>
            <small>{user.company}</small>
          </a>
        </li>
      )
    }

  }

  return (
    <div className="container">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />

      <span className="hamburger"></span>

      <ul>
        <li>
          <input
            type="text"
            placeholder="Informar empresa [ENTER]"
            onKeyPress={handleKeyPressed}/>
          <hr/>
        </li>

        {users.map(user => renderMenuItem(user))}
      </ul>

      {user === null && (
        <>
          <h1>hello world</h1>

          <div className="intro">
            <div className="content">
              <img src={BabyYoda} alt="Baby Yoda"/>
              <p>Que a força esteja com você. {':}'}</p>
            </div>
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
