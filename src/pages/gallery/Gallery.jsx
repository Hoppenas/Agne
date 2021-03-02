import React, { useState, useEffect } from 'react';
import './gallery.scss';
import Layout from "../../components/SiteLayout/Layout";
import Makeup from "./Makeup.jpg";
import Painting from "./Painting.jpg";
import axios from "axios";

const Gallery = () => {
    //https://res.cloudinary.com/<your Cloudinary account's cloud name>/image/fetch/
    const url = "http://res.cloudinary.com/ddwfyfmly/image/fetch/";
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProduct(response.data)
            })
    }, [url])

    // if (product) {console.log(product)};

    return (
      <Layout>
        <div className="gallery-wrapper">
            <p className="gallery-text">Works</p>
            <div className="make-up__wrapper">
                <p className="gallery-heading">Make up</p>
                <img src={Makeup} className="gallery-makeup" alt="Make up gallery."/>
            </div>   
            <div className="paintings__wrapper">
                <img src={Painting} className="gallery-painting" alt="Paintings gallery."/>
                <p className="gallery-heading">Paintings</p>
            </div>         
        </div>
      </Layout>
    );
  };

  export default Gallery;