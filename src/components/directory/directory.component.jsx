import React from 'react';
import './directory.styles.scss';
import CategoryItem from '../categoy-item/category-item.component';
const Directory = ({ categories }) => {

    return (
        <div className='directory-container'>
            {categories.map(category => (
                <CategoryItem key={category.id} category={category} judgeLength={categories.length} />
            ))}
        </div>
    )
}

export default Directory