import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCategory, getProduct } from '../../actions/productAction';
import SearchedProducts from './SearchedProducts';

const Search = () => {
    const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(getProduct({ keyword }))
    };
    useEffect(() => {
        let time;
        if (keyword)
            time = setTimeout(() => dispatch(getProduct({ keyword })), 600);
        return () => {
            clearTimeout(time);
            dispatch(clearCategory());
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }, [dispatch, keyword]);

    return (
        <div className='bg-gray-200 py-36'>
            <div className=' pb-10 '>
                <form
                    onSubmit={searchSubmitHandler}
                    className="flex justify-center items-center w-full flex-1"
                >
                    <input
                        type="text"
                        placeholder="Search a Product ..."
                        onChange={(e) => setKeyword(e.target.value)}
                        className="p-4 px-7 my-4 outline-none rounded-full ml-14 border border-lime"
                    />
                    <button
                        type='submit'
                        className="relative text-xl font-semibold text-lime right-24 mb-2"
                    >
                        Search
                    </button>
                </form>
                {
                    products?.length > 0 && keyword ? (
                        <SearchedProducts products={products} title={keyword} loading={loading} />
                    )
                        : loading ? (
                            <div className='loader'></div>
                        ) : !keyword ? (
                            <h2 className="text-2xl font-medium py-5 text-center text-gray-700 w-full px-10">
                                Search Products..
                            </h2>
                        ) : !products.length > 0 && (
                            <h2 className="text-2xl font-medium py-5 text-center text-gray-700 w-full px-10">
                                There is no Product with{' '}
                                <span className="text-red-500">"{keyword}"</span>
                            </h2>
                        )}
            </div>
        </div>
    )
}

export default Search