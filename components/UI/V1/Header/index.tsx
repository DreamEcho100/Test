import { joinClassNames } from '@utils/v1/ClassName';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

import Image from '@components/UI/V1/Image';
import Account from '../Account';
import SearchModal from '../SearchModal';

interface Props {}

const Header = (props: Props): JSX.Element => {
	return (
		<header className={joinClassNames(helpers.dFlex, classes.header)}>
			<div className={joinClassNames(helpers.dFlex, classes['left-side'])}>
				<div className={classes['menu-btn']}>
					<i className='fas fa-bars' />
				</div>
				<div className={classes['search-btn']}>
					<i className='fas fa-search' />
				</div>
			</div>
			<div className={classes.logo}></div>
			<div
				className={joinClassNames(
					helpers.dFlex,
					helpers.xyCenter,
					classes.account
				)}
			>
				<Image
					className={classes['user-img']}
					src='https://uifaces.co/our-content/donated/vIqzOHXj.jpg'
					alt=''
				/>
				<div className={classes['user-name']}>Bryant</div>
			</div>
			<Account />
			<SearchModal />
		</header>
	);
};

export default Header;
