import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App className="app" />,
    environmentProps: {
        windowWidth: 1024,
    },
});
