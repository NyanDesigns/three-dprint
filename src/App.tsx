import styles from './App.module.scss';
import { SubmitButton } from './components/submit-button/submit-button';
import { Input } from './components/input/input';
import { Label } from './components/label/label';

function App() {
    function onFormSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData: Record<string, string> = {};

        function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
            return 'value' in e && 'name' in e;
        }

        Array.from(e.currentTarget.elements).filter(isInputNamedElement).forEach((field) => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });

        fetch('/.netlify/functions/mail', {
            method: 'POST',
            body: JSON.stringify(formData)
        }).then(response => {
            // Do something here on success!
        }).catch(error => {
            // Do something here on error!
        });
    }
    return (
        <div className={styles.App}>
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
                <form className={styles['form-container']} onSubmit={onFormSubmit}>
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
