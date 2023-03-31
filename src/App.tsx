import styles from './App.module.scss';
import { SubmitButton } from './components/submit-button/submit-button';
import { Input } from './components/input/input';
import { Label } from './components/label/label';

function App() {
    return (
        <div className={styles['main-bg']}>
            <div className={styles['main-container']}>
                <div className={styles['title-container']}>
                    <div className={styles.logo} />
                    <div className={styles['text-container']}>
                        <div className={styles.subtitle}>Online 3D-Printing Service</div>
                        <div className={styles.seperator} />
                        <div className={styles['sub-subtitle']}>
                            You upload, We Print! Get a Quote today!
                        </div>
                    </div>
                </div>
                <form className={styles['form-container']}>
                    <div className={styles.InputRow}>
                        <Label>NAME</Label>
                        <Input />
                    </div>
                    <div className={styles.InputRow}>
                        <Label>EMAIL</Label>
                        <Input />
                    </div>
                    <div className={styles.InputRow}>
                        <Label>MESSAGE</Label>
                        <Input />
                    </div>
                    <p className={styles.paragraph}>All fields must be filled.</p>
                    <SubmitButton />
                </form>
            </div>
        </div>
    );
}

export default App;
