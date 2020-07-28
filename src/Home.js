import React from 'react'
import "./Home.css";
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        alt="Album"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/WeeklyBuild/072420/072420_GL_TaylorSwiftNewAlbum-faceout_GW_Hero_D_CVX_1500x600._CB409706618_.jpg"
      ></img>
      {/** product id, title, price, rating image */}
      <div className="home__row">
        <Product
          id="12312"
          title="Green salad"
          price={12.12}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/merch/2020/WFM/Monthly/July/AMZ/SingleCategoryCard/F3VX-2343_WFM-July-cantaloupes_gw_flexible_desktop_cat_card_1x._SY304_CB429445571_.jpg"
        />
        <Product
          id="87232"
          title="Lotus Salad"
          price={14.2}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/merch/2020/WFM/Monthly/July/AMZ/SingleCategoryCard/F3VX-2343_WFM-July-cantaloupes_gw_flexible_desktop_cat_card_1x._SY304_CB429445571_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="9789"
          title="Men's Shoes"
          price={70.2}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/SUMMER_1/GW/CATCARDS/DESKTOP/GW_D_CatCard_AF_M_XGL_1x._SY304_CB431389547_.jpg"
        />
        <Product
          id="9789"
          title="Men's Pants"
          price={41.50}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/SUMMER_1/GW/CATCARDS/DESKTOP/GW_D_CatCard_AF_M_XGL_1x._SY304_CB431389547_.jpg"
        />
        <Product
          id="9789"
          title="Men's Shirts"
          price={30.12}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/SUMMER_1/GW/CATCARDS/DESKTOP/GW_D_CatCard_AF_M_XGL_1x._SY304_CB431389547_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="165412"
          title="Eco Bottles"
          price={13.62}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_OD_DSC_379x304_B079834VBQ_cc1d6c0e._SY304_CB410951854_.jpg"
          />
      </div>
    </div>
  );
}
{
  /**src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2020/newhomeessentials/subpages/furniture_hero_desktop.jpg"
   */
}

export default Home
