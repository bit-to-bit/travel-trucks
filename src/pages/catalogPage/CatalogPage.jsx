import FilterPanel from '../../components/filterPanel/FilterPanel';
import css from './CatalogPage.module.css';
import { fetchCampersList } from '../../api/campers';
import { useState, useEffect } from 'react';
import CamperList from '../../components/camperList/CamperList';
const CatalogPage = () => {
  const [campersList, setCampersList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchCampersList();
      console.log('res = ', res);
      setCampersList(res);
    };
    fetchData();
  }, []);

  return (
    <div className={css.catalog}>
      <FilterPanel />
      <CamperList campers={campersList} />
    </div>
  );
};

export default CatalogPage;
