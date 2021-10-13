import { unwrapResult } from '@reduxjs/toolkit';
import photoApi from 'api/photoApi';
import { AddModal } from 'components/common/AddModal';
import { DeleteModal } from 'components/common/DeleteModal';
import { Footer } from 'components/common/Footer';
import { Header } from 'components/common/Header';
import { Masonry } from 'masonic';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PhotoCard from '../components/PhotoCard';
import {
  fetchPhotoList,
  selectPhotoFilter,
  selectPhotoList,
  setDeleteMode,
  toggleDeleteMode,
} from '../photoSlice';

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

  const showDeleteModal = useSelector((state) => state.photo.deleteMode);

  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

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

  const handleAddPhotoClick = () => {
    setShowModal(true);
  };

  const handleCloseModalClick = () => {
    setShowModal(false);
    dispatch(setDeleteMode(false));
  };

  const handleAddSubmit = async (data) => {
    try {
      const response = await photoApi.add(data);
      console.log(response);
    } catch (error) {
      console.log('Add photo failed: ', error);
    }

    setShowModal(false);
  };

  const handleDeleteSubmit = async (data) => {};

  return (
    <Container>
      {loading && (
        <Loading>
          <ReactLoading type="bars" color="#444" height={48} width={48} />
        </Loading>
      )}

      {!loading && <Header onAddPhotoClick={handleAddPhotoClick} />}

      {!loading && (
        <Masonry columnGutter={16} columnWidth={350} items={photoList} render={PhotoCard} />
      )}

      {!loading && <Footer />}

      <AddModal
        isShow={showModal}
        onCloseModalClick={handleCloseModalClick}
        onAddSubmit={handleAddSubmit}
      />

      <DeleteModal
        isShow={showDeleteModal}
        onCloseModalClick={handleCloseModalClick}
        onDeleteSubmit={handleDeleteSubmit}
      />
    </Container>
  );
}

export default ListPage;
