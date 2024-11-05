import useGlobalContext from '@/hooks/use-context';
import React from 'react';

const SearchBarModel = () => {
    const { inputValue, setInputValue } = useGlobalContext()
    return (
        <div className={inputValue ? "modal fade show search-modal" : "modal fade"} tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-remove">
                <button onClick={() => setInputValue(!inputValue)}>
                    <i className='fas fa-window-close'></i>
                </button>
            </div>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <form>
                        <input type="text" placeholder="Search here..." />
                        <button>
                            <i className='fas fa-search'></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchBarModel;