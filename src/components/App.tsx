import React, { useCallback } from 'react';
import {ChangeEvent, useState, FC } from 'react';
import styled from 'styled-components';
import { MemoList } from './MemoList';

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

    const onClickDelete = useCallback((index: number) => {
        const newMemos = [...memos];
        newMemos.splice(index, 1);
        setMemos(newMemos);
    }, [memos]);

    return (
        <div>
            <h1>React Memo App</h1>
            <input type="text" value={text} onChange={onChangeText} />
            <Sbutton onClick={onClickAdd}>Add</Sbutton>
            <MemoList memos={memos} onClickDelete={onClickDelete} />
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
