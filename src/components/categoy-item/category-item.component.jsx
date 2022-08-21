import React, { useEffect, useState } from 'react';
import './category-item.styles.scss';

const CategoryItem = ({ category, judgeLength }) => {
    const [categoryContainer, setCategoryContainer] = useState('')
    useEffect(() => {

        if (judgeLength % 3 === 0) {
            setCategoryContainer('category-container');
        } else {
            setCategoryContainer('category-container large');
        }

    }, [judgeLength])



    return (
        <div key={category.id} className={categoryContainer}>
            <div
                className='background-image'
                style={{ backgroundImage: `url(${category.imageUrl})` }}
            />
            <div className='category-body-container'>
                <h2>{category.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem