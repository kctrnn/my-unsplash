import photoApi from 'api/photoApi';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const fetchPhotoList = async () => {
      const res = await photoApi.get();
      console.log(res);
    };

    fetchPhotoList();
  });

  return <div className="app">APP</div>;
}

export default App;
