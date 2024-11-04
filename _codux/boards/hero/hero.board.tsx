import { createBoard } from '@wixc3/react-board';
import { Hero } from '../../../src/components/hero/hero';

export default createBoard({
    name: 'Hero',
    Board: () => <Hero />,
    environmentProps: {
        windowWidth: 1024,
    },
});
