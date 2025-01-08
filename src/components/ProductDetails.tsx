import React from 'react';
import '../styles/ProductDetails.css'; 

interface ProductDetailsProps {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    tags: string[]; // If tags like "Pantry" or "Blender" are needed
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ id, title, image, subtitle, brand, tags }) => {
    return (
        <div className="product-details">
            <img src={image} alt={title} className="product-image" />
            <h2 className="product-title">{title}</h2>
            <h4 className="product-subtitle">{subtitle}</h4>
            <p className="product-brand">{brand}</p>
            <div className="product-tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
        </div>
    );
};

export default ProductDetails;
