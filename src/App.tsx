import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submit-button/submit-button';

function App() {
    return (
        <div className={styles.App}>
            <form>
                <Label>Name</Label>
                <Input />
                <Label>Email</Label>
                <Input />
                <Label>Message</Label>
                <Input />
                <SubmitButton />
            </form>
        </div>
    );
}

export default App;
