import styles from './input.module.scss';
import Classnames from 'classnames';

export interface InputProps {
    className?: string;
    name?: string;
    id?: string;
}

export const Input = ({ className, id, name }: InputProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            <input id={id} name={name} className={Classnames(styles.input, styles.input)} />
        </div>
    );
};
