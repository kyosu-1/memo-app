import { useCallback, useState } from "react";

// custom hook to memoize a list of items
export const useMemoList = () => {
    // state of the list of memo
    const [memos, setMemos] = useState<string[]>([]);

    // logic to add a new memo
    const addMemo = useCallback((memo: string) => {
        setMemos([...memos, memo]);
    }, [memos]);

    // logic to remove a memo
    const deleteMemo = useCallback((index: number) => {
        const newMemos = [...memos];
        newMemos.splice(index, 1);
        setMemos(newMemos);
    }, [memos]);

    return {memos, addMemo, deleteMemo};
};
