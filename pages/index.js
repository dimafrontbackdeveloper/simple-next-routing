import HeadSeo from '../components/HeadSeo';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <HeadSeo title={'main'} content={'main, localhost'}>
      <Navbar>
        <h1>Main</h1>
      </Navbar>
    </HeadSeo>
  );
}
