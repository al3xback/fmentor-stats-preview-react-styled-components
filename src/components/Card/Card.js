import styled from 'styled-components';

import meetingImage from '../../assets/images/meeting.jpg';

const CardShell = styled.article`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 28em;
	margin: 2.6666666667em 0 4em;
	background-color: hsl(244, 38%, 16%);
	border-radius: 8px;
	overflow: hidden;

	& .card__image,
	& .card__content,
	& .card__stats-list,
	& .card__stats-list-item {
		display: flex;
		flex-direction: column;
	}

	& .card__image-inner {
		position: relative;
		height: 0;
		padding-bottom: 76%;
		background-color: hsl(277, 64%, 61%);
	}

	& .card__image-inner img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
		mix-blend-mode: multiply;
		opacity: 0.75;
	}

	& .card__content {
		padding: 2.6666666667em 1.6em;
		text-align: center;
	}

	& .card__title {
		margin-bottom: 0.6153846154em;
	}

	& .card__desc {
		margin-bottom: 2.4em;
	}

	& .card__stats-list {
		gap: 2em;
	}

	& .card__stats-list-item {
		gap: 0.1666666667em;
		font-size: 0.8em;
		text-transform: uppercase;
	}

	& .card__stats-list-item .num {
		font-size: 1.6666666667em;
		font-weight: 700;
		color: hsl(0, 0%, 100%);
	}

	& .card__stats-list-item .label {
		letter-spacing: 0.0666666667em;
	}

	@media (min-width: 65em) {
		& {
			flex-direction: row-reverse;
			max-width: 74em;
		}

		& .card__image,
		& .card__content {
			flex-shrink: 0;
			flex-basis: 50%;
			max-width: 50%;
		}

		& .card__image-inner,
		& .card__image-inner img {
			position: static;
		}

		& .card__image-inner {
			flex: auto;
			height: auto;
			padding-bottom: 0;
		}

		& .card__content {
			padding: 4.6666666667em;
			text-align: left;
		}

		& .card__title {
			font-size: 2.4em;
		}

		& .card__desc {
			max-width: 24.6666666667em;
			margin-bottom: 4em;
		}

		& .card__stats-list {
			flex-direction: row;
		}

		& .card__stats-list-item {
			min-width: 9.3333333333em;
		}
	}
`;

const Card = () => {
	return (
		<CardShell>
			<div className="card__image">
				<div className="card__image-inner">
					<img src={meetingImage} alt="" />
				</div>
			</div>
			<div className="card__content">
				<h2 className="card__title">
					Get <mark>insights</mark> that help your business grow.
				</h2>
				<p className="card__desc">
					Discover the benefits of data analytics and make better
					decisions regarding revenue, customer experience, and
					overall efficiency.
				</p>
				<ul className="card__stats-list">
					<li className="card__stats-list-item">
						<span className="num">10K+</span>
						<span className="label">Companies</span>
					</li>
					<li className="card__stats-list-item">
						<span className="num">314</span>
						<span className="label">Templates</span>
					</li>
					<li className="card__stats-list-item">
						<span className="num">12M+</span>
						<span className="label">Queries</span>
					</li>
				</ul>
			</div>
		</CardShell>
	);
};

export default Card;
