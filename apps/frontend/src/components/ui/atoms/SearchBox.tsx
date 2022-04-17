import React, {FC, ReactChildren} from 'react';

interface ISearchBoxProps {
  placeHolder?: string;
  inputLabel?: string;
  inputId?: string;
  children?: ReactChildren,
}

const SearchBox: FC<ISearchBoxProps> = (
  {
    inputId = 'search-box',
    placeHolder = "Type anything then search"
  }) => {
  return (
    <>
      <input
        className={`shadow text-xl appearance-none border w-96 rounded-full py-2 px-3 bg-gray-200 text-gray-100 leading-tight focus:outline-none focus:shadow-outline form-input`}
        id={inputId} type="search" placeholder={placeHolder}/>
    </>
  );
};

export default SearchBox;
