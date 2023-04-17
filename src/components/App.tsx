import React from 'react';
import {ChangeEvent, useState, FC } from 'react';
import styled from 'styled-components';

export const App: FC = () => {
    // text box
    const [text, setText] = useState<string>('');
    // memo list
    const [memos, setMemos] = useState<string[]>([]);

    // text box change event
    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    // when click add button
    const onClickAdd = () => {
        if (text === '') {
            return;
        }
        const newMemos = [...memos, text];
        setMemos(newMemos);
        // clear text box
        setText('');
    };

    // when click delete button
    const onClickDelete = (index: number) => {
        const newMemos = [...memos];
        // delete memo
        newMemos.splice(index, 1);
        setMemos(newMemos);
    };

    return (
        <div>
            <h1>React Memo App</h1>
            <input type="text" value={text} onChange={onChangeText} />
            <Sbutton onClick={onClickAdd}>Add</Sbutton>
            <Scontainer>
                <h1 style={{textAlign: 'center'}}>Memo List</h1>
                {memos.map((memo, index) => (
                    <SMemoWrapper key={index}>
                        <div>{memo}</div>
                        <Sbutton onClick={() => onClickDelete(index)}>Delete</Sbutton>
                    </SMemoWrapper>
                ))}
            </Scontainer>
        </div>
    );
};


const Sbutton = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
`;

const Scontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SMemoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 0;
`;
