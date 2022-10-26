import { useRouter } from 'next/router';

import { FistSection, SecondSection } from '@/components/home-page';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
// eslint-disable-next-line import/extensions
// import styles from '../styles/global.css';

const Index = () => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <FistSection></FistSection>
      <SecondSection></SecondSection>
    </Main>
  );
};

export default Index;
