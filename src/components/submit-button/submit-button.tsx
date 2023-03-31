import styles from './submit-button.module.scss';
import classNames from 'classnames';

export interface SubmitButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-submit-buttons-and-templates
 */
export const SubmitButton = ({ className }: SubmitButtonProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <button>Submit</button>
        </div>
    );
};
