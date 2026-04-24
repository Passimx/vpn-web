import { FC, memo } from 'react';
import { CopiedText } from '../copied-text';
import { Foreground } from '../foreground';

/** Foreground components */
export const TopElements: FC = memo(() => {
    return (
        <>
            <Foreground />
            <CopiedText />
        </>
    );
});
