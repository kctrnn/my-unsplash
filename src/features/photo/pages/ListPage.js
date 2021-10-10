import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotoList, selectPhotoFilter, selectPhotoList } from '../photoSlice';

function ListPage() {
  const dispatch = useDispatch();

  const filter = useSelector(selectPhotoFilter);
  const photoList = useSelector(selectPhotoList);

  const [loading, setLoading] = useState(true);

  console.log(photoList);
  console.log(loading);

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

  return <div>PHOTO LIST PAGE</div>;
}

export default ListPage;
