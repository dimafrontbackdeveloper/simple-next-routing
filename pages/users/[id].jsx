import { useRouter } from 'next/router';
import React from 'react';
import HeadSeo from '../../components/HeadSeo';
import Navbar from '../../components/Navbar';
import styles from './../../styles/user.module.css';

const User = ({ user }) => {
  return (
    <HeadSeo title={'User'} content={'User'}>
      <Navbar>
        <div>
          <h1 className={styles.userName}>{user.firstName}</h1>
          <h2>{user.id}</h2>
        </div>
      </Navbar>
    </HeadSeo>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://dummyjson.com/users/${params.id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}

export default User;
