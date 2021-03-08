import React, { useState, useEffect } from 'react';
import './gallery.scss';
import Layout from "../../components/SiteLayout/Layout";
import Makeup from "./Makeup.jpg";
import Painting from "./Painting.jpg";
import axios from "axios";
import {Cloudinary} from "@cloudinary/base";
import {AdvancedImage} from '@cloudinary/react';

const Gallery = () => {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'ddwfyfmly'
        }
    });

    // cld.image returns a CloudinaryImage with the configuration set.
    const myImage = cld.image('sample');
    console.log(myImage);

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
                {/* <AdvancedImage cldImg={myImage} /> */}
                <p className="gallery-heading">Paintings</p>
            </div>         
        </div>
      </Layout>
    );
  };

  export default Gallery;