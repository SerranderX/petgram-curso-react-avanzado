import React, {Fragment, useEffect, useState} from 'react'
import {Category} from '@components/Category'
import {List, Item} from '@components/ListOfCategories/style'
import { ENV } from '@config/Env'

function useCategoriesData() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${ENV.API_URL}categories`)
        .then(res => res.json())
        .then(response => {
            setLoading(false)
            setCategories(response)
        })
    }, [])

    return {categories, loading}
}

export const ListOfCategories = () => {
    const {categories, loading} = useCategoriesData();
    const [showFixed, setShowFixed] = useState(false);

    useEffect(()=> {
        const onScroll = e => {
            const newShowFixed = window.scrollY >= 200;
            showFixed !== newShowFixed && setShowFixed(newShowFixed);
        }

        document.addEventListener('scroll', onScroll);

        return () => document.removeEventListener('scroll', onScroll);
    }, [showFixed]);

    const renderCategories = (scroll = false) => (
        <List fixed={scroll}>
            {
                categories.map(category => <Item key={category.id}> <Category  {...category} path={`/pet/${category.id}`}/> </Item>)
            }
        </List>
    )

    if(loading) return (<div>Loading...</div>)
    if(!loading) return (
        <Fragment>
            {renderCategories()}
            {showFixed && renderCategories(true)}
        </Fragment>
    )
}