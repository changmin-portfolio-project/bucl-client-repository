import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BodyLayout from '../layout/BodyLayout';
import BrandImgSlider from './body/BrandImgSlider';
import BrandProducts from './body/BrandProducts';
import {
  ProductBrandData,
  getProductBrand,
} from '../../services/productBrand/getProductInfo';

const Body: React.FC = () => {
  const param = useParams();
  const [productBrandData, setProductBrandData] = useState<ProductBrandData>({
    brandDesc: '',
    brandName: '',
    brandProfilePath: '',
    brandImgList: [],
  });

  useEffect(() => {
    if (param.market_code) {
      // 상품 정보 가져오기
      getProductBrand(param.market_code).then((res) => {
        setProductBrandData(res.data);
      });
    }
  }, []);

  return (
    <BodyLayout>
      <BrandImgSlider productBrandData={productBrandData} />
      <BrandProducts />
    </BodyLayout>
  );
};

export default Body;
