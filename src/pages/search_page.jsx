import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Itembar from '../components/itembar';
import Search from "../components/search";
import { CategoriesItem, SearchItem } from "../api";

const SearchPage = () => {
    const location = useLocation();
    const [Category, setCategory] = useState(null)
    const [Search_itemList, setSearch_itemList] = useState([])
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get("Category");
        if (query) {
            setCategory(query)
        }
    }, [location]);

    useEffect(() => {
        if (Category) {
            CategoriesItem(Category).then((data) => {
                console.log('Category Dara', data);
                setSearch_itemList(data)
            })
        }
    }, [Category])


    const SearchFetch = (searchValue) => {
        SearchItem(searchValue).then((SearchitemList) => {
            setSearch_itemList(SearchitemList)
        })
    };
    return (
        <div className="Search_page_Max">
            <Search searchFun={SearchFetch} />
            {
                Category && (<div className="Search_page_Categorytip">Category:{Category}</div>)
            }
            <div className="ItemListContainer">
                {Search_itemList.map((item, index) => (
                    <Itembar key={index} item={item} />
                ))}
            </div>

        </div>
    );
};

export default SearchPage;
