import { joinClassNames } from '@utils/v1/ClassName';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

import Image from '@components/UI/V1/Image';

interface Props {}

const JustAdded = (props: Props): JSX.Element => {
	return (
		<section className={classes['just-added']}>
			<h3 className={classes.title}>Just Added</h3>
			<div className={joinClassNames(helpers.dFlex, classes.thumbnails)}>
				{new Array(10).fill(null).map((item, index) => (
					<div key={index} className={classes.thumbnail}>
						<Image
							className={classes['img-container']}
							src='https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973516.jpg?c=2?imbypass=on'
							alt=''
						/>
						<div
							className={joinClassNames(
								helpers.dFlex,
								helpers.xyCenter,
								classes['top-layer']
							)}
						>
							<i className='fas fa-play' />
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default JustAdded;
