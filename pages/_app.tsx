import React from 'react';
import { AppPropsLayout } from '@/interfaces/app-with-layout';
import '@/styles/globals.css';
import { FilterContextWrapper } from 'context/filter.context';

function MyApp({ Component, pageProps }: AppPropsLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <React.Fragment>
      <FilterContextWrapper>
        {getLayout(<Component {...pageProps} />)}
      </FilterContextWrapper>
    </React.Fragment>
  )
}

export default MyApp
