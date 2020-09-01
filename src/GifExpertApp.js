import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = ( value ) => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }>{ category }</li>;
                    })
                }
            </ol>
        </>
    );

}
