import Link from 'next/link';
import React from 'react';
import HeadSeo from '../../components/HeadSeo';
import Navbar from '../../components/Navbar';

const Users = ({ users }) => {
  return (
    <HeadSeo title={'Users'} content={'users'}>
      <Navbar>
        <div>
          <h1>Users</h1>
          <ul>
            {users.map((user) => {
              return (
                <li key={user.id}>
                  <Link href={`http://localhost:3001/users/${user.id}`}>{user.firstName}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Navbar>
    </HeadSeo>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/users');
  const { users } = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
