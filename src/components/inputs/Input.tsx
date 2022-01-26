import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import styled from "styled-components";
import { LOGIN_WITH_PHONE } from "../../Reducer/ActionTypes";
const InputField = styled.input`
  font-size: 18px;
  padding: 10px;
  align-self:center;
  margin: 10px;
  background: rgb(252, 252, 252);
  border: 1px solid #BEBEC2;
  border-radius: 8px;
  ::placeholder {
    color:#828282;
  }
`;
interface Props {
    isPhone: boolean;
    isValid: (val: boolean) => void
}

const Inputs: React.FC<Props> = ({ isPhone, isValid }) => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    return (
        <InputField type="text" value={inputValue}
            onChange={(e) => {
                setInputValue(e.target.value);
                if (!isPhone) {
                    isValid(/.+@.+\.[A-Za-z]+$/.test(e.target.value));
                    dispatch({ type: LOGIN_WITH_PHONE, payload: e.target.value })
                }
                else {
                    isValid(/^(0|08|08[0-9]{1,9})$/.test(e.target.value));
                    dispatch({ type: LOGIN_WITH_PHONE, payload: e.target.value })
                }
            }}
            placeholder={isPhone === true ? 'EX (337) 378 8383' : 'johndoe@gmail.com'}
        />
    )
}
export default Inputs;