import Navbar from 'components/common/Navbar';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';
import SearchBar from 'components/SearchBar';
import RecommendBox from 'components/sidebar/RecommendBox';
import PopularUserBox from 'components/sidebar/PopularUserBox';

export default function MainLayout() {
    return (
        <div className={styles.layout}>
            <Navbar />
            <div className={styles.main}>
                <main className={styles.main__contents}>
                    <Outlet />
                </main>
                <aside className={styles.main__right}>
                    <SearchBar />
                    <RecommendBox />
                    <PopularUserBox />
                </aside>
            </div>
        </div>
    );
}
