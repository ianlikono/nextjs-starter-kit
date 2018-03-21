import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import NProgress from 'nprogress';
import {asset} from '@utils/uri';
import {Router, Link} from '@routes/web';
import {withI18next} from '@hoc/withI18next';


class NavMenu extends React.Component {
    render() {
        const {t} = {...this.props};

        return (
            <nav className="text-middle">
                <Link route="home">
                    <a>{t('menu.home')}</a>
                </Link>
                <span> | </span>
                <Link route="news">
                    <a>{t('menu.news')}</a>
                </Link>
            </nav>
        );
    }
}

export default withI18next()(NavMenu);
