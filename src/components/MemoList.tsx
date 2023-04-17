import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

type Props = {
    memos: string[];
    onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = ({ memos, onClickDelete }) => {
    return (
        <Scontainer>
            <h1 style={{ textAlign: 'center' }}>Memo List</h1>
            {memos.map((memo, index) => (
                <SMemoWrapper key={index}>
                    <div>{memo}</div>
                    <Sbutton onClick={() => onClickDelete(index)}>Delete</Sbutton>
                </SMemoWrapper>
            ))}
        </Scontainer>
    );
};

const Scontainer = styled.div`
    width: 500px;
    margin: 0 auto;
`;

const SMemoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
`;

const Sbutton = styled.button`
    background-color: #4caf50;
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
