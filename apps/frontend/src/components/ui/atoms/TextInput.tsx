import React, {FC} from 'react';

export interface ITextInputProps {
  placeHolder?: string;
  inputLabel?: string;
  inputId?: string;
  styleClasses?: string
}

const TextInput: FC<ITextInputProps> = (
  {
    inputId,
    inputLabel,
    placeHolder = "Enter text",
    styleClasses
  }) => {
  return (
    <div className="mb-4">
      {inputLabel && (
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={inputId}>
          {inputLabel}
        </label>
      )}
      <input
        className={`shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${styleClasses}`}
        id={inputId} type="text" placeholder={placeHolder}/>
    </div>
  );
};

TextInput.propTypes = {};

export default TextInput;
