import React from 'react';

const BlogSearchForm = () => {
    return (
        <form className="search-form">
            <input type="text" placeholder="Search your keyword..." />
            <button type="submit"><i className='fas fa-search'></i></button>
        </form>
    );
};

export default BlogSearchForm;