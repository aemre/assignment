
interface Props {
    className?: string;
    props?: any
}
const DashboardLeftIcon: React.FC<Props> = ({ className }) => (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.241577 8.08248C0.241577 7.09416 0.675561 6.1557 1.4286 5.51561L6.48188 1.22033C7.7399 0.151006 9.58752 0.151003 10.8455 1.22033L15.8988 5.51561C16.6519 6.1557 17.0858 7.09416 17.0858 8.08248V16.6311C17.0858 18.4917 15.5776 20 13.717 20H3.61043C1.74986 20 0.241577 18.4917 0.241577 16.6311V8.08248Z" fill="#33373B" />
    </svg>
);
export default DashboardLeftIcon;