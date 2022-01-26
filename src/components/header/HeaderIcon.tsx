interface Props {
    className?: string;
    props?: any
}
const HeaderIcon: React.FC<Props> = ({ className }) => (
    <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10.4511C0 9.1034 0.591797 7.82368 1.61867 6.95084L8.5095 1.09363C10.225 -0.36454 12.7445 -0.364543 14.46 1.09362L21.3508 6.95084C22.3777 7.82367 22.9695 9.1034 22.9695 10.4511V22.1084C22.9695 24.6455 20.9127 26.7023 18.3756 26.7023H4.59389C2.05676 26.7023 0 24.6455 0 22.1084V10.4511Z" fill="#B072FF" />
        <path d="M4.44629 13.7488C4.44629 12.4011 5.03809 11.1214 6.06495 10.2486L12.9558 4.39136C14.6713 2.93319 17.1908 2.93319 18.9062 4.39135L25.7971 10.2486C26.824 11.1214 27.4158 12.4011 27.4158 13.7488V25.4061C27.4158 27.9432 25.359 30 22.8219 30H9.04018C6.50304 30 4.44629 27.9432 4.44629 25.4061V13.7488Z" fill="#33373B" />
    </svg>
);


export default HeaderIcon;