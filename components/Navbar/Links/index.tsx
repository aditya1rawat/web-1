import Link from 'next/link'
import Img, { Svg } from 'react-optimized-image'

import shop from 'images/shop.svg'
import bit from 'images/bit.png'
import plus from 'images/plus.svg'

import styles from './index.module.scss'

const NavbarLinks = () => (
	<div className={styles.root}>
		<Link href="/shop">
			<a className={styles.shop}>
				<Svg className={styles.shopIcon} src={shop} />
				Gift Shop
			</a>
		</Link>
		<Link href="/bits">
			<a className={styles.bits}>
				<Img className={styles.bitsIcon} src={bit} webp url />
				1,420
				<Svg className={styles.addBits} src={plus} />
			</a>
		</Link>
	</div>
)

export default NavbarLinks
