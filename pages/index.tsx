import Layout from '@/components/common/Layout';
import TVShowList from '@/components/features/TVShow/TVShowList';
import { NextPageWithLayout } from '@/interfaces/app-with-layout';
import { TrendingUpIcon } from '@heroicons/react/solid';
import { Icon } from '@tremor/react';
import { ReactElement } from 'react';

const Home: NextPageWithLayout = () => {

  return (
    <section className="px-5 mt-5">
      <header className="text-white py-4 ">
        <h1 className="text-3xl font-bold flex items-center">
          Most Popular TV Shows
          <Icon className="text-yellow-100" size="xl" icon={TrendingUpIcon} />
        </h1>
      </header>
      
      <TVShowList />
    </section>
  )
}

Home.getLayout = (page: ReactElement) => (
  <Layout title={"Most popular tv shows"}>
    {page}
  </Layout>
)

export default Home
