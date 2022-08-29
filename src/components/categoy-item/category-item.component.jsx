import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './category-item.styles.scss';

const CategoryItem = ({ category, judgeLength }) => {
    const [categoryContainer, setCategoryContainer] = useState('')
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(category.route);
    useEffect(() => {

        if (judgeLength % 3 === 0) {
            setCategoryContainer('category-container');
        } else {
            setCategoryContainer('category-container large');
        }

    }, [judgeLength])



    return (
        <div key={category.id} className={categoryContainer} onClick={onNavigateHandler}>
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