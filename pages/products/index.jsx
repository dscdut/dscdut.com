import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Card } from 'antd';
import { motion } from 'framer-motion';
import MyHead from '../../components/common/Head/MyHead';
import NavGroup from '../../components/common/Navbar/NavGroup';
import MyHeader from '../../components/common/Header/MyHeader';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import Footer from '../../components/common/Footer/Footer';
import productsList from '../../constants/products';
import styles from '../../styles/Products.module.scss';

const { Meta } = Card;

export const getStaticProps = async () => {
  const data = productsList;
  return {
    props: { products: data },
  };
};

const Products = ({ products }) => {
  const hoverMotion = {
    position: 'relative',
    zIndex: 1,
    background: 'white',
    scale: [1, 1.05],
    transition: {
      duration: 0.3,
    },
  };

  const renderCard = (product) => (
    <Image
      className={styles.img}
      height={300}
      width={300}
      alt={product.name}
      src={product.image}
      quality={100}
    />
  );

  const renderProduct = products.map((product) => (
    <motion.div key={product.id} whileHover={hoverMotion}>
      <Link href={product.link} target="_blank" rel="noreferrer">
        <a className={styles.group_product} href={product.link} target="_blank" rel="noreferrer">
          <Card className={styles.card} cover={renderCard(product)}>
            <Meta className={styles.meta} title={product.name} description={product.description} />
          </Card>
        </a>
      </Link>
    </motion.div>
  ));

  return (
    <div className={styles.single}>
      <MyHead title="Our Products" />
      <div className={styles.title}>
        <MyHeader />
        <SearchBar />
      </div>
      <NavGroup />

      <div className={styles.cover}>
        <Image
          className={styles.coverImg}
          alt="Out team cover image"
          src="/images/ourteam_cover.svg"
          width={1120}
          height={480}
          layout="intrinsic"
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className={styles.products}>
        <div className={styles.group_container}>
          <h1 className={styles.group_name}>PRODUCTS</h1>
          <div className={styles.group_products}>
            {renderProduct}
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};

export default Products;
