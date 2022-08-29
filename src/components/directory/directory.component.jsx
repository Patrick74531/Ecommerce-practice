import React from 'react';
import CategoryItem from '../categoy-item/category-item.component';
import { useNavigate } from 'react-router-dom';
import './directory.styles.scss';
const Directory = ({ categories }) => {
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(categories.route);
    return (
        <div className='directory-container'>
            {categories.map(category => (
                <CategoryItem
                    key={category.id}
                    category={category}
                    judgeLength={categories.length}
                    NavigateHandler={onNavigateHandler}
                />
            ))}
        </div>
    )
}

export default Directory