import { unwrapResult } from '@reduxjs/toolkit';
import { Footer } from 'components/common/Footer';
import { Header } from 'components/common/Header';
import { Masonry } from 'masonic';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PhotoCard from '../components/PhotoCard';
import { fetchPhotoList, selectPhotoFilter, selectPhotoList } from '../photoSlice';

const Container = styled.div`
  max-width: 75rem;
  padding: 1rem 2rem;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    padding: 1rem 1.5rem;
  }

  @media screen and (max-width: 575px) {
    padding: 1rem;
  }
`;

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function ListPage() {
  const dispatch = useDispatch();

  const filter = useSelector(selectPhotoFilter);
  const photoList = useSelector(selectPhotoList);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const action = fetchPhotoList(filter);

        const resultAction = await dispatch(action);
        unwrapResult(resultAction);
      } catch (error) {
        console.log('Failed to fetch photo list: ', error);
      }

      setLoading(false);
    })();
  }, [filter, dispatch]);

  return (
    <Container>
      {loading && (
        <Loading>
          <ReactLoading type="bars" color="#444" height={48} width={48} />
        </Loading>
      )}

      <Header />

      {!loading && (
        <Masonry columnGutter={16} columnWidth={350} items={photoList} render={PhotoCard} />
      )}

      <Footer />
    </Container>
  );
}

export default ListPage;
